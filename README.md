# Forma Studio – Portfolio

Portfolio website for Forma Studio, built with [Astro](https://astro.build). German is the main language (`/`), English is available under `/en/`.

## Local preview

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321 in the browser. Stop the server with `Ctrl + C`.

`npm run build` creates the finished website in the `dist` folder.

## Where to change things

| What | File |
|---|---|
| German texts, services and prices | `src/i18n/de.ts` |
| English texts, services and prices | `src/i18n/en.ts` |
| Portfolio projects | `src/data/projects.ts` |
| Email address, logo | `src/data/site.ts` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Page sections | `src/components/` |
| Impressum, Datenschutz | `src/pages/` and `src/pages/en/` |

Services and prices are defined once per language and are used by the services section, the price list and the contact form.

### Activate a portfolio project

In `src/data/projects.ts`:

1. Enter the address of the demo website in `demoUrl`.
2. Save a screenshot in `public/projects/` and enter its path in `image`, for example `/projects/cafe-lumiere.webp`.

The button then changes from "Demnächst" to "Projekt ansehen" and the placeholder preview is replaced by the screenshot.

### Add the logo

The logo is `public/logo.png`; its path and pixel size are set in `src/data/site.ts`.

### Browser-tab icon and social-sharing images

`npm run brand-assets` regenerates `public/favicon.png`, `public/apple-touch-icon.png`, `public/og-de.jpg` and `public/og-en.jpg`. The icons are cut from the original logo in `reference/`. The social images are rendered from `scripts/og-template.html` with an installed Edge or Chrome; edit the texts in that file if the headline changes.

## Contact form (Netlify Forms)

The form only delivers messages once the site is deployed on Netlify. In the local preview it validates the entries but sends nothing.

One-time setup after the first deployment:

1. In the Netlify dashboard open **Forms** and choose **Enable form detection**, then deploy the site again.
2. The form appears under **Forms** with the name `kontakt`.
3. Open **Forms → Form notifications → Add notification → Email notification** and enter `formastudio.webdesign@gmail.com`.
4. Send a test inquiry through the live website and check the Gmail inbox, including the spam folder.

Spam protection: a hidden honeypot field, a minimum time before sending, and Netlify's own spam filter. No API keys are needed.

## Before going live

- Re-read the Impressum and Datenschutz pages (`src/pages/` and `src/pages/en/`) and confirm they still match the actual setup, in particular the hosting and email providers.
- Run `npm run brand-assets` if the headline or logo changes.

The `reference/` folder contains screenshots of the earlier Wix website. It is not part of the published site.
