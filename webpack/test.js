module.exports = function(PATHS) {
	return {
		  entry: {
			  test: PATHS.test + '/indexTest.js'
		  },
		  output: {
			path: PATHS.build + '/test/',
		    filename: '[name].js'
		  }
		}
};