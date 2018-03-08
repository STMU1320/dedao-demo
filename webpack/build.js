const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const merge = require('webpack-merge')
const cssOptions = {
  modules: true,
  localIdentName: '[hash:base64:5]',
  importLoaders: 1,
}

const postcssOptions = {
  plugins: loader => [
    require('autoprefixer')({ browsers: ['last 3 versions'] }),
  ],
}
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: cssOptions },
            { loader: 'postcss-loader', options: postcssOptions },
          ]
        })
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: cssOptions },
            { loader: 'postcss-loader', options: postcssOptions },
            'less-loader',
          ]
        })
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],{root: path.join(__dirname, '../')}),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
  ],

}

module.exports = merge(common, build)
