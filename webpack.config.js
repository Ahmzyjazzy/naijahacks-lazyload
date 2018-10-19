// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   devtool: 'cheap-module-source-map',
//   module: {
//       rules: [
//           { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
//           {
//             test: /\.css$/,
//             use: [ 'style-loader', 'css-loader' ]
//           }
//       ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({template: 'index.html'})
//   ]

// };

// const nodeExternals = require('webpack-node-externals')

const common = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}

module.exports = [
  {
    ...common,
    entry: './src/client',
    output: {
      path: `${__dirname}/public`
    }
  },
  {
    ...common,
    target: 'node',
    entry: './src/server'
  }
]

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path')

// const common = {
//   devtool: 'cheap-module-source-map',
//   module: {
//       rules: [
//           { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
//           {
//             test: /\.css$/,
//             use: [ 'style-loader', 'css-loader' ]
//           }
//       ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({template: 'index.html'})
//   ]
// }

// module.exports = [
//   {
//     ...common,
//     entry: './src/client',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'bundle',
//     }
//   }
//   // {
//   //   ...common,
//   //   // target: 'node',
//   //   entry: './src/server'
//   // }
// ]
