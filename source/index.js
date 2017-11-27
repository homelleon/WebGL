import {Loop} from "./engine/core/Loop";
import {initExtentions} from "./engine/core/Extentions";
import {initTools, maths} from "./engine/core/Tools";

export var gl;

export function initial() {
	return 1;
}

export function sum(a, b) {
	return initial() + a + b;
}

window.onload = function() {
	
	var canvas = document.getElementById("gl");
	
	// initialize webgl
	try {
		gl = canvas.getContext("webgl") ||
			 canvas.getContext("experimental-webgl") ||
				canvas.getContext("moz-webgl") ||
				canvas.getContext("webkit-3d");
	}
	catch(e) {}
	
	if(!gl) {
		console.log("WebGL is not supported by your browser");
	}
	
	if(gl) {
		gl.viewportHeight = canvas.height;
		gl.viewportWidth = canvas.width;
		initExtentions();
		initTools();
		console.dir(gl); // see all webgl objects
	// start engine	
		var loop = new Loop();
		for(var i = 0; i < 100; i++) {
			loop.update();
		}
		loop.stop();
	}
}

//TODO: need to correct that function
function getAndApplyExtension(gl, name) {
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
	    	var unsuffixedKey = key.replace(suffixRE, '');
	    	gl[unsuffixedKey] = ext[key].bind(ext);
	    }
	  }
	  return true;
}