const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const PurgecssPlugin = require('purgecss-webpack-plugin');

// const glob = require('glob');
// const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      // new PurgecssPlugin({
      //   paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
      // }),
    ],
  },
};