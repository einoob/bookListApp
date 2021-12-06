module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default': 'off',
    'prettier/prettier': ['error'],
    'no-restricted-exports': 'off',
    'import/no-named-as-default-member': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponent: 'arrow-function',
      },
    ],
  },
};
