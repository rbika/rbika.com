const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.mdx',
      options: {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
  singleQuote: true,
  tabWidth: 2,
};

export default config;
