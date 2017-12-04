import {gl} from "./../../index.js";

function ShaderProgram() {
	// initialization	
	var _programObject = gl.createProgram();
	var _vertexShaderObject = null;
	var _fragmentShaderObject = null;
	var _uniforms = [];
	
	// test initialization
	try {
		if(!_programObject) {
			throw "Shader object was not initialized!";
		}
	} catch(err) {
		console.log(err);
		alert(err);
	}
	
	// methods
	this.start = function() {
		gl.useProgram(_programObject);
	}
	
	this.stop = function() {
		gl.useProgram(null);
	}
	
	this.clean = function() {
		this.stop();
		if(_vertexShaderObject) {
			gl.detachShader(_programObject, _vertexShaderObject)
		}
		
		if(_fragmentShaderObject) {
			gl.detachShader(_programObject, _fragmentShaderObject)
		}
		gl.deleteShader(_fragmentShaderObject);
		gl.deleteShader(_vertexShaderObject);
		gl.deleteProgram(_programObject);
	}
	
	this.loadUniformLocations = function() {}
	
	this.compileShaders = function compileShader() {
		this.bindAttributes();
		gl.linkProgram(_programObject);
		
		if(!gl.getProgramParameter(_programObject, gl.LINK_STATUS)) {
			console.log(gl.getProgramInfoLog(_programObject, 1024));
			return null;
		}
		gl.validateProgram(_programObject);
		
		if(!gl.getProgramParameter(_programObject, gl.VALIDATE_STATUS)) {
			console.log(gl.getProgramInfoLog(_programObject, 1024));
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
		gl.attachShader(_programObject, shaderID);
		return shaderID;
	}
	
	this.addVertexShader = function(text) {
		_vertexShaderObject = loadShader(text, gl.VERTEX_SHADER);
	}
	
	this.addFragmentShader = function(text) {
		_fragmentShaderObject = loadShader(text, gl.FRAGMENT_SHADER);
	}
	
	this.addUniform = function(name) {
		var uniformLocation = getUniformLocation(name);
		
		if(uniformLocation == "0xFFFFFFFF") {
			console.log("Couldn't find uniform: " + name);
			return;
		}
		
		_uniforms[name] = uniformLocation;
	}
	
	var getUniformLocation = function(name) {
		return gl.getUniformLocation(_programObject, name);
	}
	
	this.loadInt = function(name, value) {
		var uniformLocation = _uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.loadFloat = function(name, value) {
		var uniformLocation = _uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.load4DVector = function(name, vector) {
		var uniformLocation = _uniforms[name];
		gl.uniform4f(uniformLocation, vector.x, vector.y, vector.z, vector.w);
	}
	
	this.load3DVector = function(name, vector) {
		var uniformLocation = _uniforms[name];
		gl.uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	}
	
	this.load2DVector = function(name, vector) {
		var uniformLocation = _uniforms[name];
		gl.uniform2f(uniformLocation, vector.x, vector.y);
	}
	
	this.loadMatrix = function(name, matrix) {
		var uniformLocation = _uniforms[name];
		var matrixBuffer = [];
		matrix.store(matrixBuffer);
		gl.uniformMatrix4fv(uniformLocation, false, matrixBuffer);
	}
	
	this.bindAttributes = function() {}
	
	this.bindAttribute = function(attribute, name) {
		gl.bindAttribLocation(_programObject, attribute, name);
	}
	
	this.bindFragOutput = function(attribute, name) {
		gl.bindFragDataLocation(_programObject, attribute, name);
	}
}

export {ShaderProgram};
