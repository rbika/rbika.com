import js from '@eslint/js';
import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    extends: [
      js.configs.recommended,
      ...eslintPluginAstro.configs.recommended,
      eslintConfigPrettier,
    ],
  },
]);
