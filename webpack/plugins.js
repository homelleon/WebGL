const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (PATHS) {
	return {
		plugins: [
			  new HtmlWebpackPlugin({
				  template: PATHS.source + '/index.pug'
			  })
		  ]
	}
};