module.exports = {
  verbose: true,
  setupFiles: ["./tests/setup.ts"],
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  collectCoverageFrom: ["components/**/*.{ts,tsx}"],
  testPathIgnorePatterns: ["/node_modules/", "/lib/"],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"]
};
