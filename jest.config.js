module.exports = {
  verbose: true,
  setupFiles: ['./tests/setup.ts'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  collectCoverageFrom: ['components/**/*.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(css|less|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
  },
};
