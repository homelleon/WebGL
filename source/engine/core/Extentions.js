import {gl} from  "./../../index.js";

export function initExtentions() {
	applyExtention("OES_vertex_array_object"); // VAO
};

function applyExtention(name) {
	  var ext = gl.getExtension(name);
	  if (!ext) {
	    return false;
	  }
	  var suffix = name.split("_")[0];
	  var prefix = suffix + '_';
	  var suffixRE = new RegExp(suffix + '$');
	  var prefixRE = new RegExp('^' + prefix);
	  for (var key in ext) {
	    var val = ext[key];
	    if(typeof(val) === 'function') {
	    	// delete suffix and attach new functions for gl context
	    	var unsuffixedKey = key.replace(suffixRE, '');
	    	gl[unsuffixedKey] = ext[key].bind(ext);
	    }
	  }
	  return true;
};