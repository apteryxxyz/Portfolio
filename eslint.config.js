/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  env: {
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {},
  ignorePatterns: [],
  reportUnusedDisableDirectives: true,
};

module.exports = eslintConfig;
