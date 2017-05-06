var path = require('path');

module.exports = {
  entry: "./lib/catalyst.js",
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
      library: "",
      libraryTarget: "commonjs"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
