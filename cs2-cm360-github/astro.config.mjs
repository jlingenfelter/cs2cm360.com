import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cs2cm360.com',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
