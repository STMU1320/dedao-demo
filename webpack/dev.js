const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./common')
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

const dev = {
  entry: {
    index: ['babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, '../src/app.js')],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash:5].js',
    chunkFilename: "[name].[chunkHash:5].js",
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          { loader: 'css-loader', options: cssOptions },
          { loader: 'postcss-loader', options: postcssOptions },
        ]
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          { loader: 'css-loader', options: cssOptions },
          { loader: 'postcss-loader', options: postcssOptions },
          'less-loader',
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('development')
      }
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
  },
}

module.exports = merge(common, dev)
