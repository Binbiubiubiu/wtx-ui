module.exports = {
  setupFiles: ["./tests/setup.js"],
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  },
  testPathIgnorePatterns: ["/node_modules/", "/lib/"],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"]
};
