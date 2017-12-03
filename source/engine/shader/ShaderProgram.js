import {gl} from "./../../index.js";

function ShaderProgram() {
	// initialization	
	var programID = gl.createProgram();
	var vertexShaderID = null;
	var fragmentShaderID = null;
	var uniforms = [];

	
	if(!programID) {
		console.log("Shader creation failed!");
		return null;
	}
	
	// methods
	this.start = function() {
		gl.useProgram(programID);
	}
	
	this.stop = function() {
		gl.useProgram(null);
	}
	
	this.clean = function() {
		this.stop();
		if(vertexShaderID) {
			gl.detachShader(programID, vertexShaderID)
		}
		
		if(this.fragmentShaderID) {
			gl.detachShader(programID, fragmentShaderID)
		}
		gl.deleteShader(fragmentShaderID);
		gl.deleteShader(vertexShaderID);
		gl.deleteProgram(programID);
	}
	
	this.loadUniformLocations = function() {}
	
	this.compileShaders = function compileShader() {
		this.bindAttributes();
		gl.linkProgram(programID);
		
		if(!gl.getProgramParameter(programID, gl.LINK_STATUS)) {
			console.log(gl.getProgramInfoLog(programID, 1024));
			return null;
		}
		gl.validateProgram(programID);
		
		if(!gl.getProgramParameter(programID, gl.VALIDATE_STATUS)) {
			console.log(gl.getProgramInfoLog(programID, 1024));
			return null;
		}
		this.loadUniformLocations();
	}
	
	var loadShader = function(source, type) {
		var shaderID = gl.createShader(type);
		gl.shaderSource(shaderID, source);
		gl.compileShader(shaderID);
		if(!gl.getShaderParameter(shaderID, gl.COMPILE_STATUS)) {
			console.log(gl.getShaderInfoLog(shaderID, 500));
			console.log("Couldn't compile shader!");
			return null;
		}
		gl.attachShader(programID, shaderID);
		return shaderID;
	}
	
	this.addVertexShader = function(text) {
		vertexShaderID = loadShader(text, gl.VERTEX_SHADER);
	}
	
	this.addFragmentShader = function(text) {
		fragmentShaderID = loadShader(text, gl.FRAGMENT_SHADER);
	}
	
	this.addUniform = function(name) {
		var uniformLocation = getUniformLocation(name);
		
		if(uniformLocation == "0xFFFFFFFF") {
			console.log("Couldn't find uniform: " + name);
			return;
		}
		
		uniforms[name] = uniformLocation;
	}
	
	var getUniformLocation = function(name) {
		return gl.getUniformLocation(programID, name);
	}
	
	this.loadInt = function(name, value) {
		var uniformLocation = uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.loadFloat = function(name, value) {
		var uniformLocation = uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.load4DVector = function(name, vector) {
		var uniformLocation = uniforms[name];
		gl.uniform4f(uniformLocation, vector.x, vector.y, vector.z, vector.w);
	}
	
	this.load3DVector = function(name, vector) {
		var uniformLocation = uniforms[name];
		gl.uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	}
	
	this.load2DVector = function(name, vector) {
		var uniformLocation = uniforms[name];
		gl.uniform2f(uniformLocation, vector.x, vector.y);
	}
	
	this.loadMatrix = function(name, matrix) {
		var uniformLocation = uniforms[name];
		var matrixBuffer = [];
		matrix.store(matrixBuffer);
		gl.uniformMatrix4fv(uniformLocation, false, matrixBuffer);
	}
	
	this.bindAttributes = function() {}
	
	this.bindAttribute = function(attribute, name) {
		gl.bindAttribLocation(programID, attribute, name);
	}
	
	this.bindFragOutput = function(attribute, name) {
		gl.bindFragDataLocation(programID, attribute, name);
	}
}

export {ShaderProgram};