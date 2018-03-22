var path = require('path');

module.exports = {
  entry: "./lib/main.js",
  devtool: 'source-map',
  output: {
    // path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "jquery_lite.js"
  }
};
