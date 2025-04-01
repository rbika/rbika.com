// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rbika.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [expressiveCode({
    themes: ['nord'],
    plugins: [pluginLineNumbers()],
    defaultProps: {
      showLineNumbers: false,
    },
    frames: {
      showCopyToClipboardButton: false,
    },
  }), mdx(), sitemap()],
  experimental: {
    svg: true,
  },
});