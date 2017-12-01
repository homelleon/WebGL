module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(glsl|vs|fs)$/,
					loader: 'webpack-glsl-loader'
				}
			]
		}
	}
};