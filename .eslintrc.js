module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['sonarjs', 'import'],
  parser: 'babel-eslint',
  rules: {
    'max-len': ['error', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js*', 'config/**', 'tests/**'] }],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'eol-last': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'import/no-commonjs': 'warn',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.graphql'],
      },
    },
  },
};
