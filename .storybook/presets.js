const path = require("path");

module.exports = [
  {
    name: "@storybook/addon-docs/react/preset",
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: {
        parser: "typescript",
        prettierConfig: { printWidth: 80, singleQuote: false },
        uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
      }
    }
  }
];
