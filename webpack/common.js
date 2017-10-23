const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")


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
    alias: {
      components: path.join(__dirname, '../src/components'),
      views: path.join(__dirname, '../src/views'),
      utils: path.join(__dirname, '../src/utils'),
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
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
  ],
}

module.exports = common
