const Path = require('path');

module.exports = {
  entry: Path.join(__dirname, 'src/entry'),
  output: {
    path: Path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/, loaders: ["style", "css"] },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  }
};
