'use strict';
import {Shader} from "./engine/shader/NewShader";
import {draw} from "./engine/renderer/Draw";

export var gl;
var vertexBuffer;

function initBuffers() {
	vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	var triangleVertices = [
		0.0, 0.5, 0.0,
		-0.5, -0.5, 0.0,
		0.5, -0.5, 0,0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices),
			gl.STATIC_DRAW);
	vertexBuffer.itemSize = 3;
	vertexBuffer.numberOfItems = 3;
}

window.onload = function() {
	
	var canvas = document.getElementById("gl");
	
	try {
		gl = canvas.getContext("webgl") ||
			 canvas.getContext("experimental-webgl");
	}
	catch(e) {}
	
	if(!gl) {
		console.log("WebGL is not supported by your browser");
	}
	
	if(gl) {
		gl.viewportHeight = canvas.width;
		gl.viewportWidth = canvas.height;
		
		var shader = new Shader();
		
//		initBuffers();
		
		gl.clearColor(1.0, 0.4, 0.0, 0.5);
		shader.compile();
		shader.bindAttributes();
		shader.start();
		draw(shader);
	}
}