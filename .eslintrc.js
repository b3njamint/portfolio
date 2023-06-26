module.exports = {
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import'],
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
};
