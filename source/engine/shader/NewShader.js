import {gl} from "./../../index.js";

export function Shader() {
	
	this.fragmentShader = getShader(gl.FRAGMENT_SHADER, 'shader-fs');
	this.vertexShader = getShader(gl.VERTEX_SHADER, 'shader-vs');
	
	this.shaderProgram = gl.createProgram();
	
	if(!this.shaderProgram) {
		console.log("Shader creation failed!");
	}
	
	this.compile = function compile() {
	
		gl.attachShader(this.shaderProgram, this.vertexShader);
		gl.attachShader(this.shaderProgram, this.fragmentShader);
		
		gl.linkProgram(this.shaderProgram);
		
		if(!gl.getProgramParameter(this.shaderProgram, gl.LINK_STATUS)) {
			console.log("Can't link shader");
		}
	}
	
	this.start = function start() {
		gl.useProgram(this.shaderProgram);
	}
	
	this.bindAttributes = function bindAttributes() {	
		this.shaderProgram.vertexPositionAttribute = 
			gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
		gl.enableVertexAttribArray(this.shaderProgram.vertexPositionAttribute);
	}
	
	function getShader(type, id) { 
		var source = document.getElementById(id).innerHTML;
		var shader = gl.createShader(type);
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		
		if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.log(gl.getShaderInfoLog(shader));
			gl.deleteShader(shader);
			return null;
		}
		return shader;
	}
}