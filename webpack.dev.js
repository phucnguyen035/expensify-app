const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    historyApiFallback: true
  },

  devtool: 'cheap-module-source-map'
});
