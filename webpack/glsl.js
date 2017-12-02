module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(glsl)$/,
					loader: 'file-loader',
					options: {
						name: 'shaders/[name].[ext]'
					}
				}
			]
		}
	}
};