const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

module.exports = {
  entry: './app.js',
  output: {
	path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
	  new HtmlWebpackPlugin({
		  title: 'WebGL testing'
	  })
  ]
};