const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = {
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
  module: {
	  rules: [
		  {
			  test: /\.pug$/,
			  loader: 'pug-loader',
			  options: {
				  pretty: true
			  }
		  }
	  ]
  }
};

const developmentConfig = {
		devServer: {
			stats: 'errors-only',
			port: 9000
		}
};

module.exports = function(env) {
	if(env === 'production') {
		return common;
	}
	if(env === 'development') {
		return Object.assign(
			{},
			common,
			developmentConfig
		)
	}
}