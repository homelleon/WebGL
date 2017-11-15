export default function WebGL(height, width) {
	var canvas = document.createElement("canvas");
	canvas.id = "gl";
	canvas.style.height = height;
	canvas.style.width = width;
	
	this.height = height;
	this.width = width;
	this.gl = gl;
	
	document.body.appendChild(canvas);
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
	return gl;
}