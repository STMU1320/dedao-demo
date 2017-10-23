const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./common')

const build = {
  entry: {
    index: ['babel-polyfill', path.join(__dirname, '../src/app.js')],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkHash:5].js',
    chunkFilename: "[name].[chunkHash:5].js",
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'],{root: path.join(__dirname, '../')}),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],

}

module.exports = merge(common, build)
