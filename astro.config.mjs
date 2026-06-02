import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://al1n3waj.github.io',
  base: '/alinewaj/',         
  integrations: [tailwind()],
  output: 'static',
  prefetch: true
});
