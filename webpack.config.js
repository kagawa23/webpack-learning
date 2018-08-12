var path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    // main: "./index.js"
    //  vendor: ["moment"]
    index: "./index.jsx"
    // index2: "./index2.jsx"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "index.html")
    })
    //new HotModuleReplacementPlugin()
  ],
  optimization: {
    // runtimeChunk: {
    //   name: entrypoint => `runtime~${entrypoint.name}`
    // },
    splitChunks: {
      chunks: "initial",
      minSize: 3000,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        "react-vendor": {
          test: (module, chunks) => /react/.test(module.context),
          priority: 1
        }
      }
    }
  },
  devServer: {
    port: "8080",
    host: "0.0.0.0",
    hot: true,
    overlay: {
      errors: true
    }
  }
};
