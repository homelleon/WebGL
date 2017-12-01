import {gl} from "./../../index.js";

function ShaderProgram() {
	// initialization	
	this.programID = gl.createProgram();
	this.uniforms = [];

	
	if(!this.programID) {
		console.log("Shader creation failed!");
		return null;
	}
	
	// methods
	this.start = function start() {
		gl.useProgram(this.programID);
	}
	
	this.stop = function stop() {
		gl.useProgram(null);
	}
	
	this.clean = function clean() {
		this.stop();
		if(this.vertexShaderID) {
			gl.detachShader(this.programID, this.vertexShaderID)
		}
		
		if(this.fragmentShaderID) {
			gl.detachShader(this.programID, this.fragmentShaderID)
		}
		gl.deleteShader(this.fragmentShaderID);
		gl.deleteShader(this.vertexShaderID);
		gl.deleteProgram(this.programID);
	}
	
	this.loadUniformLocations = function loadUniformLocations() {}
	
	this.compileShaders = function compileShader() {
		this.bindAttributes();
		gl.linkProgram(this.programID);
		
		if(!gl.getProgramParameter(this.programID, gl.LINK_STATUS)) {
			console.log(gl.getProgramInfoLog(this.programID, 1024));
			return null;
		}
		gl.validateProgram(this.programID);
		
		if(!gl.getProgramParameter(this.programID, gl.VALIDATE_STATUS)) {
			console.log(gl.getProgramInfoLog(this.programID, 1024));
			return null;
		}
		this.loadUniformLocations();
	}
	
	this.loadShader = function loadShader(source, type) {
		var shaderID = gl.createShader(type);
		gl.shaderSource(shaderID, source);
		gl.compileShader(shaderID);
		if(!gl.getShaderParameter(shaderID, gl.COMPILE_STATUS)) {
			console.log(gl.getShaderInfoLog(shaderID, 500));
			console.log("Couldn't compile shader!");
			return null;
		}
		gl.attachShader(this.programID, shaderID);
		return shaderID;
	}
	
	this.addVertexShader = function addVertexShader(text) {
		this.vertexShaderID = this.loadShader(text, gl.VERTEX_SHADER);
	}
	
	this.addFragmentShader = function addFragmentShader(text) {
		this.fragmentShaderID = this.loadShader(text, gl.FRAGMENT_SHADER);
	}
	
	this.addUniform = function addUniform(name) {
		var uniformLocation = this.getUniformLocation(name);
		
		if(uniformLocation == "0xFFFFFFFF") {
			console.log("Couldn't find uniform: " + name);
			return;
		}
		
		this.uniforms[name] = uniformLocation;
	}
	
	this.getUniformLocation = function getUniformLocation(name) {
		return gl.getUniformLocation(this.programID, name);
	}
	
	this.loadInt = function loadInt(name, value) {
		var uniformLocation = this.uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.loadFloat = function loadFloat(name, value) {
		var uniformLocation = this.uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.load4DVector = function load4DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		gl.uniform4f(uniformLocation, vector.x, vector.y, vector.z, vector.w);
	}
	
	this.load3DVector = function load3DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		gl.uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	}
	
	this.load2DVector = function load2DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		gl.uniform2f(uniformLocation, vector.x, vector.y);
	}
	
	this.loadMatrix = function loadMatrix(name, matrix) {
		var uniformLocation = this.uniforms[name];
		var matrixBuffer = [];
		matrix.store(matrixBuffer);
		gl.uniformMatrix4fv(uniformLocation, false, matrixBuffer);
	}
	
	this.bindAttributes = function bindAttributes() {}
	
	this.bindAttribute = function bindAttribute(attribute, name) {
		gl.bindAttribLocation(this.programID, attribute, name);
	}
	
	this.bindFragOutput = function bindFragOutput(attribute, name) {
		gl.bindFragDataLocation(this.programID, attribute, name);
	}
}

export {ShaderProgram};