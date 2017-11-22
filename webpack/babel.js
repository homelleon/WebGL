module.exports = function() {
	return {
		module: {
			loaders: [
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				}
			]
		}
	}
}