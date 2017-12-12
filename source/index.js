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
	// make canvas full size 
		canvas.height = document.documentElement.clientHeight;
		canvas.width = document.documentElement.clientWidth;
	// initialize gl size
		gl.viewportHeight = canvas.height;
		gl.viewportWidth = canvas.width;
	// initialize exteriors
		initExtentions();
		initTools();
	// initialize engine
		var loop = new Loop();
	// start looping
		(function looping() {
			loop.update();
			requestAnimFrame(looping, canvas);	
		})();
	}
});

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.onRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback, element) {
		return window.setTimeout(callback, 100 / 60);
	};
})();

export {gl};