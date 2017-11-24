module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					use: 'babel-loader'
				}
			]
		}
	}
};