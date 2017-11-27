const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/main.js',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};