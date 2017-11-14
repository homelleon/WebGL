import bar from './bar';
import display from './engine/core/DisplayManager';

bar();

window.onload = function() {	
	var canvas = document.getElementById("gl");
	var gl = canvas.getContext("webgl") || 
		canvas.getContext("experimental-webgl") ||
		canvas.getContext("moz-webgl") ||
		canvas.getContext("webkit-3d");
	
	if(!gl) {
		canvas.innerText = "Ваш браузер не поддерживает WebGL!";
	}
	
	if(gl) {		
		gl.clearColor(1.0, 1.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
};
