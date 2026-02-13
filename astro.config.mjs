// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
