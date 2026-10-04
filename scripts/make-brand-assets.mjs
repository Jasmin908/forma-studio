// Generates the browser-tab icons and the social-sharing images.
// Run with: npm run brand-assets
//
//   public/favicon.png           96 x 96, the "F" symbol on a transparent background
//   public/apple-touch-icon.png  180 x 180, the "F" symbol on the site's dark background
//   public/og-de.jpg, og-en.jpg  1200 x 630, rendered from scripts/og-template.html
//
// The icons are cut from the original logo in reference/. The social images
// are screenshots of the template, taken with an installed Edge or Chrome,
// so they use the same font and colours as the website.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

// --- Icons -----------------------------------------------------------------
const logo = 'reference/Forma Studio Gradient Emblem Logo.png';
if (fs.existsSync(logo)) {
  // The symbol sits in this area of the logo file; the masked corner removes
  // the first letter of the wordmark, which reaches into the same rectangle.
  const area = { left: 280, top: 140, width: 520, height: 520 };
  const mask = { fromX: 690, fromY: 292 };
  const { data, info } = await sharp(logo).ensureAlpha().extract(area).raw().toBuffer({ resolveWithObject: true });
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (x + area.left >= mask.fromX && y + area.top >= mask.fromY) data[(y * info.width + x) * 4 + 3] = 0;
    }
  }
  const symbol = await sharp(data, { raw: info }).trim().png().toBuffer();
  const fit = { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } };

  await sharp(symbol).resize(96, 96, fit).png().toFile('public/favicon.png');
  await sharp({ create: { width: 180, height: 180, channels: 4, background: '#09090b' } })
    .composite([{ input: await sharp(symbol).resize(116, 116, fit).png().toBuffer() }])
    .png()
    .toFile('public/apple-touch-icon.png');
  console.log('Created public/favicon.png and public/apple-touch-icon.png');
} else {
  console.log(`Skipped icons: ${logo} not found`);
}

// --- Social-sharing images ---------------------------------------------------
const browsers = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = browsers.find((candidate) => fs.existsSync(candidate));
if (!browser) throw new Error('No Edge or Chrome installation found for rendering the social images.');

const template = pathToFileURL(path.resolve('scripts/og-template.html')).href;
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'forma-og-'));

for (const lang of ['de', 'en']) {
  const shot = path.join(tmp, `og-${lang}.png`);
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=4000',
    `--user-data-dir=${path.join(tmp, 'profile')}`,
    `--screenshot=${shot}`,
    `${template}?lang=${lang}`,
  ]);
  const out = await sharp(shot).resize(1200, 630).jpeg({ quality: 88, mozjpeg: true }).toFile(`public/og-${lang}.jpg`);
  console.log(`Created public/og-${lang}.jpg (${out.width} x ${out.height}, ${Math.round(out.size / 1024)} KB)`);
}
