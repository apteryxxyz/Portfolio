/** @type {import('prettier').Config} */
const prettierConfig = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  tailwindConfig: './tailwind.config.js',
  singleQuote: true,
};

module.exports = prettierConfig;
