import {Loop} from "./engine/core/Loop";
import {initExtentions} from "./engine/core/Extentions";
import {initTools, maths} from "./engine/core/Tools";

var gl = null;

window.onload = (function() {
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
	// start engine	
		var loop = new Loop();
		for(var i = 0; i < 100; i++) {
			loop.update();
		}
		loop.stop();
	}
})();

export {gl};