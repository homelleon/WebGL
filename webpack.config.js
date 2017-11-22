const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const babel = require('./webpack/babel');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const images = require('./webpack/images');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
	  entry: PATHS.source + '/index.js',
	  output: {
		path: PATHS.build,
	    filename: '[name].js'
	  },
	  plugins: [
		  new HtmlWebpackPlugin({
			  template: PATHS.source + '/index.pug'
		  })
	  ],
	},
	babel(),
	pug(),
	images()
]);

module.exports = function(env) {
	if(env === 'production') {
		return common;
	}
	if(env === 'development') {
		return merge([
			common,
			devserver()
		])
	}
};