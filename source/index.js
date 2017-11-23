'use strict';
import {Loop} from "./engine/core/Loop";

export var gl;

window.onload = function() {
	
	var canvas = document.getElementById("gl");
	
	// initialize webgl
	try {
		gl = canvas.getContext("webgl") ||
			 canvas.getContext("experimental-webgl");
	}
	catch(e) {}
	
	if(!gl) {
		console.log("WebGL is not supported by your browser");
	}
	
	if(gl) {
		console.dir(gl); // see all webgl objects
		gl.viewportHeight = canvas.width;
		gl.viewportWidth = canvas.height;
	// start engine	
		var loop = new Loop();		
		loop.update();
		loop.stop();
	}
}