const path = require('path');

module.exports = [
  {
    name: '@storybook/addon-docs/react/preset',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: {
        parser: 'typescript',
        prettierConfig: { printWidth: 100, singleQuote: true },
        uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
      },
      // sourceLoaderOptions: {
      //   parser: "typescript",
      //   prettierConfig: {
      //     printWidth: 100,
      //     tabWidth: 2,
      //     bracketSpacing: true,
      //     trailingComma: "es6",
      //     singleQuote: true
      //   },
      //   uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
      // }
    },
  },
];
