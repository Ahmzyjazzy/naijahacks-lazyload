const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
  },
  module: {
      rules: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ]

};

