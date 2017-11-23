'use strict';
import {Loop} from "./engine/core/Loop";

export var gl;

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
		console.dir(gl); // see all webgl objects
		gl.viewportHeight = canvas.height;
		gl.viewportWidth = canvas.width;
		gl.haveVAOs = getAndApplyExtension(gl, "OES_vertex_array_object");
	// start engine	
		var loop = new Loop();		
		loop.update();
		loop.stop();
	}
}

function getAndApplyExtension(gl, name) {
	  var ext = gl.getExtension(name);
	  if (!ext) {
	    return false;
	  }
	  var suffix = name.split("_")[0];
	  var prefix = suffix = '_';
	  var suffixRE = new RegExp(suffix + '$');
	  var prefixRE = new RegExp('^' + prefix);
	  for (var key in ext) {
	    var val = ext[key];
	    if (typeof(val) === 'function') {
	      // remove suffix (eg: bindVertexArrayOES -> bindVertexArray)
	      var unsuffixedKey = key.replace(suffixRE, '');
	     if (key.substing) {
	      gl[unprefixedKey] = ext[key].bind(ext);
	    } else {
	      var unprefixedKey = key.replace(prefixRE, '');
	      gl[unprefixedKey] = ext[key];
	    }
	  }