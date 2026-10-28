// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rbika.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    expressiveCode({
      themes: ['catppuccin-latte', 'nord'],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => (theme.name === 'nord' ? '.dark' : false),
      plugins: [pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: false,
      },
      frames: {
        showCopyToClipboardButton: false,
      },
    }),
    mdx(),
    sitemap(),
    react(),
  ],
  experimental: {
    svg: true,
  },
});
