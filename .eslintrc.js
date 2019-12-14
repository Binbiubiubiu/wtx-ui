module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'react', 'jest'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      // 'warn',
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 0, // 忽略必须要propsType 校验
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // TODO: 临时fix
    '@typescript-eslint/no-explicit-any': 0,
    'no-underscore-dangle': 0,
    'import/no-named-as-default': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'react/sort-comp': 0,
    'no-unused-expressions': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/static-property-placement': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/button-has-type': 0,
    'react/require-default-props': 0,
    'react/default-props-match-prop': 0,
    'import/prefer-default-export': 0,
    'import/named':0,
    'no-shadow':0
  },
};
