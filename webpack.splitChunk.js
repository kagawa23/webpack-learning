const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

var entry = {
  a: "./a.js",
  b: "./b.js"
};

var output = {
  filename: "[name].bundle.js"
};

var optimization = {
  splitChunks: {
    cacheGroups: {
      node_vendors: {
        test: /[\\/]node_module[\\/]/,
        chunks: "async",
        priority: 1
      }
    }
  }
};

module.exports = {
  entry: entry,
  output: output,
  optimization: optimization,
  plugins: [new BundleAnalyzerPlugin()]
};
