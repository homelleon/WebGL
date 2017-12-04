module.exports = function(PATHS) {
	return {
		  entry: {
			  test: PATHS.test + '/source/testIndex.js'
		  },
		  output: {
			path: PATHS.test + '/build/',
		    filename: '[name].js'
		  }
		}
};