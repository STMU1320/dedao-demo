const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = {
  // entry: {
  //   index: ['babel-polyfill', 'react-hot-loader/patch', path.join(__dirname, 'src/app.js')],
  //   vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  // },
  // output: {
  //   path: path.join(__dirname, './dist'),
  //   filename: '[name].[hash:5].js',
  //   chunkFilename: "[name].[chunkHash:5].js",
  // },
  resolve: {
    modules: ['./node_modules', './src'],
    alias: {
      mock: path.join(__dirname, '../mock'),
    },
    extensions: ['.js', '.json', '.css', '.less', 'jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        include: path.join(__dirname, '../src'),
        use: ['babel-loader?cacheDirectory=true'],
      },
      {
        test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg)$/i,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'runtime'],
    }),
    new HtmlWebpackPlugin({
      title: 'DeDao-Demo',
      template: path.join(__dirname, '../assets/template.html'),
    }),
  ],
}

module.exports = common
