// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  adapter: process.argv.includes('dev') ? undefined : cloudflare(),
  integrations: [react(), keystatic(), markdoc()],
  redirects: {
    '/admin': '/keystatic',
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(import.meta.env.MODE),
    }
  }
});