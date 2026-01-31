import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://dx.evaulthub.com',
  base: '/',
  output: 'static',
  adapter: vercel({
    output: 'static'
  }),
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});
