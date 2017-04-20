const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry: "./app/app.js",
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
      }
    }]
  },
  output: {
    path: __dirname + "/public/js",
    filename: "script.min.js"
  }
};
