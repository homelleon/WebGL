module.exports = function(PATHS) {
	return {
		  entry: {
			  main: PATHS.source + '/index.js'
		  },
		  output: {
			path: PATHS.build,
		    filename: '[name].js'
		  }
		}
};