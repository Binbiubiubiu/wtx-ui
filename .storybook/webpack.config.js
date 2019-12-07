const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  // 设置相对路径别名
  config.resolve.alias["@"] = path.resolve(__dirname, "../src");
  config.resolve.alias["components"] = path.resolve(__dirname, "../components");

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
