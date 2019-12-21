module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: process.env.OUTPUT_MOUDLES || false,
      },
    ],
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
