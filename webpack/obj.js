module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.obj$/,
					loader: 'file-loader',
					options: {
						name: 'meshes/[name].[ext]'
					}
				}
			]
		}
	}
};