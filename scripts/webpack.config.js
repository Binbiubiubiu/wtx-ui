const path = require("path");

const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const r = p => path.resolve(__dirname, "..", p);

module.exports = {
  mode: "production",
  entry: {
    index: r("components/index.ts")
  },
  output: {
    library: "lv-ui",
    libraryTarget: "umd",
    umdNamedDefine: true,
    path: r("dist"),
    filename: "[name].min.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    classnames: "classnames"
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ],
        exclude: /node_modules/,
        include: [r("components"), r("src")]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // "style-loader",
          { loader: "css-loader", options: { importLoaders: 2 } },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|woff|eot|ttf)(\?.*)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({
        // 压缩css  与 ExtractTextPlugin 配合使用
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } }, // 移除所有注释
        canPrint: true // 是否向控制台打印消息
      })
    ]
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: "styles",
    //       test: /\.(sa|sc|c)ss$/,
    //       chunks: "all",
    //       enforce: true
    //     }
    //   }
    // }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].min.css"
      // chunkFilename: "[id].css"
      // ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ]
};
