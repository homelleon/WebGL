export default function ShaderProgram(gl) {
	var programID = gl.createProgram();
	var vertexShaderID;
	var fragmentShaderID;
	var uniforms = {};
	
	// initialization
	if(this.programID == 0) {
		console.log("Shader creation failed!");
		return;
	} else {
		console.log("Shader created!");
	}
	
	// functions
	this.start = function start() {
		gl.useProgram(this.programID);
		console.log("Shader started!");
	}
	
	this.stop = function stop() {
		gl.useProgram(0);
	}
	
	this.clean = function clean() {
		stop();
		if(this.vertexShaderID) {
			gl.detachShader(programID, vertexShaderID)
		}
		
		if(this.fragmentShaderID) {
			gl.detachShader(programID, fragmentShaderID)
		}
		gl.deleteProgram(programID);
	}
	
	this.loadUniformLocations = function loadUniformLocations() {}
	this.bindAttributes = function bindAttributes() {}
	
	this.compile = function compile() {
		this.bindAttributes();
		gl.linkProgram(programID);
		
		if(!gl.getProgramParameter(programID, gl.LINK_STATUS)) {
			console.log(gl.getProgramInfoLog(programID, 1024));
			return;
		}
		gl.validateProgram(programID);
		
		if(!gl.getProgramParameter(programID, gl.VALIDATE_STATUS)) {
			console.log(gl.getProgramInfoLog(programID, 1024));
			return;
		}
		this.loadUniformLocations();
	}
	
	var loadShader = function loadShader(file, type) {
		var shaderID = gl.createShader(type);
		gl.shaderSource(shaderID, file);
		gl.compileShader(shaderID);
		if(gl.getShaderParameter(shaderID, gl.COMPILE_STATUS) == gl.FALSE) {
			console.log(gl.getShaderInfoLog(shaderID, 500));
			console.log("Couldn't compile shader!");
			return;
		}
		gl.attachShader(programID, shaderID);
		return shaderID;
	}
	
	
	this.addVertexShader = function addVertexShader(text) {
		vertexShaderID = loadShader(text, gl.VERTEX_SHADER);
	}
	
	this.addFragmentShader = function addFragmentShader(text) {
		fragmentShaderID = loadShader(text, gl.FRAGMENT_SHADER);
	}
	
	this.addUniform = function addUniform(name) {
		var uniformLocation = this.getUniformLocation(name);
		
		if(uniformLocation == "0xFFFFFFFF") {
			console.log("Couldn't find uniform: ".name);
			return;
		}
		
		uniforms[name] = uniformLocation;
	}
	
	this.loadInt = function loadInt(name, value) {
		var uniformLocation = uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.loadFloat = function loadFloat(name, value) {
		var uniformLocation = uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.load3DVector = function load3DVector(name, vector) {
		var uniformLocation = uniforms[name];
		gl.uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	}
	
	this.load2DVector = function load2DVector(name, vector) {
		var uniforomLocation = uniforms[name];
		gl.uniform2f(uniformLocation, vector.x, vector.y);
	}
	
	this.bindAttribute = function bindAttribute(attribute, name) {
		gl.bindAttribLocation(programID, attribute, name);
	}
	
	this.bindFragOutput = function bindFragOutput(attribute, name) {
		gl.bindFragDataLocation(programID, attribute, name);
	}
}