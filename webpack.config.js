'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_FOLDER = path.join(__dirname, 'src')
const DIST_FOLDER = path.join(__dirname, 'dist')
const HTML_TEMPLATE = path.join(__dirname, 'index.html')
const HTML_TITLE = 'ng2 example'

const PORT = 8081
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const webpackConfig = {
  entry: {
    app: IS_PRODUCTION
      ? [
        path.join(SRC_FOLDER, 'app.js')
      ] : [
        'webpack/hot/dev-server',
        `webpack-dev-server/client?http://localhost:${PORT}`,
        path.join(SRC_FOLDER, 'app.js')
      ],
    vendors: [
      // TODO
    ]
  },
  output: {
    publicPath: '/', // This is used for generated urls
    path: DIST_FOLDER,
    filename: 'scripts/[name].[hash].js',
    chunkFilename: 'scripts/[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: [SRC_FOLDER]
      }
    ]
  },
  plugins: IS_PRODUCTION
    ? [
      new HtmlWebpackPlugin({
        title: HTML_TITLE,
        template: HTML_TEMPLATE
      }),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'scripts/vendors.[hash].js'),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true
      })
    ] : [
      new HtmlWebpackPlugin({
        title: HTML_TITLE,
        template: HTML_TEMPLATE
      }),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'scripts/vendors.[hash].js'),
      new webpack.HotModuleReplacementPlugin()
    ],
  devServer: {
    hot: true,
    inline: true,
    port: PORT
  }
}

module.exports = webpackConfig
