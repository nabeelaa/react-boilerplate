const eslint = require('eslint');
const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const commonPaths = require('./paths');

module.exports = {
  /**
   * Entry - The first place Webpack looks to start building the bundle.
   * react-hot-loader/patch' - enables hot-reloading
   */
  entry: ['react-hot-loader/patch', commonPaths.entryPath],
  /**
   * Module
   *
   * Determine how modules within the project are treated.
   */
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ],
  },
  serve: {
    add: app => {
      app.use(convert(history()));
    },
    content: commonPaths.entryPath,
    dev: {
      publicPath: commonPaths.outputPath,
    },
    open: true,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  /**
   * Plugins - customize the build process
   */
  plugins: [
    new webpack.ProgressPlugin(),
    // HtmlWebpackPlugin - generates an HTML file from a template.
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    // Dotenv - passes env variables
    new Dotenv({
      path: './config/env/.env.' + process.env.NODE_ENV,
    }),
  ],
};
