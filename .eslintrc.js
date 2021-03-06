module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: false,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
  ignorePatterns: ['webpack.config.js'],
}
