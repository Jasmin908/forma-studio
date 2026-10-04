import { defineConfig } from 'astro/config';

// Netlify sets the URL environment variable to the site's main address during
// a build, so canonical links and social-sharing tags are correct without
// editing this file. Locally the dev-server address is used.
export default defineConfig({
  site: process.env.URL || 'http://localhost:4321',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
