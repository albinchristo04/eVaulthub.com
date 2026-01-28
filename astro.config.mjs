import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dx.evaulthub.com',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
