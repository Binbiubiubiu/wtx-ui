const path = require("path");
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          transpileOnly: true
        }
      },
      // {
      //   loader: require.resolve("babel-loader"),
      //   options: {
      //     presets: [["react-app", { flow: false, typescript: true }]]
      //   }
      // },
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
