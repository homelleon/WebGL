import {Loop} from "./engine/core/Loop";
import {initExtentions} from "./engine/core/Extentions";
import {initTools, maths} from "./engine/core/Tools";

var gl = null;

window.onload = (function() {	
	var canvas = document.getElementById("gl");
	if(!canvas) {
		canvas = document.createElement("canvas");
		canvas.id = "gl";
		document.body.appendChild(canvas);
	}
	
	// initialize webgl
	try {
		gl = canvas.getContext("webgl") ||
			 canvas.getContext("experimental-webgl") ||
				canvas.getContext("moz-webgl") ||
				canvas.getContext("webkit-3d");
	}
	catch(err) {
		console.log(err);
	}
	
	if(!gl) {
		var err = "WebGL is not supported by your browser";
		console.log(err);
		canvas.innerHTML = err;
	}
	
	if(gl) {
		gl.viewportHeight = canvas.height;
		gl.viewportWidth = canvas.width;
		initExtentions();
		initTools();
	// start engine	
		var loop = new Loop();
		loop.update();
		var update = setTimeout(function() {
			console.log("???");
			loop.update();
			loop.stop();
		}, 1000);
		update();
		
	}
})();

export {gl};