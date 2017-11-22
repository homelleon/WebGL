export default function ShaderProgram(gl) {
	// initialization
	this.name = "TestShader";
	this.programID = gl.createProgram();
	
	if(!this.programID) {
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
		this.stop();
		if(this.vertexShaderID) {
			gl.detachShader(this.programID, this.vertexShaderID)
		}
		
		if(this.fragmentShaderID) {
			gl.detachShader(this.programID, this.fragmentShaderID)
		}
		gl.deleteProgram(this.programID);
	}
	
	this.loadUniformLocations = function loadUniformLocations() {}
	this.bindAttributes = function bindAttributes() {}
	
	this.compile = function compile() {
		this.bindAttributes();
		gl.linkProgram(this.programID);
		
		if(!gl.getProgramParameter(this.programID, gl.LINK_STATUS)) {
			console.log(gl.getProgramInfoLog(this.programID, 1024));
			return;
		}
		gl.validateProgram(this.programID);
		
		if(!gl.getProgramParameter(this.programID, gl.VALIDATE_STATUS)) {
			console.log(gl.getProgramInfoLog(this.programID, 1024));
			return;
		}
		this.loadUniformLocations();
	}
	
	this.loadShader = function loadShader(file, type) {
		var shaderID = gl.createShader(type);
		gl.shaderSource(shaderID, file);
		gl.compileShader(shaderID);
		if(gl.getShaderParameter(shaderID, gl.COMPILE_STATUS) == gl.FALSE) {
			console.log(gl.getShaderInfoLog(shaderID, 500));
			console.log("Couldn't compile shader!");
			return;
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
	
	this.loadInt = function loadInt(name, value) {
		var uniformLocation = this.uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.loadFloat = function loadFloat(name, value) {
		var uniformLocation = this.uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	this.load3DVector = function load3DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		gl.uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	}
	
	this.load2DVector = function load2DVector(name, vector) {
		var uniforomLocation = this.uniforms[name];
		gl.uniform2f(uniformLocation, vector.x, vector.y);
	}
	
	this.bindAttribute = function bindAttribute(attribute, name) {
		gl.bindAttribLocation(this.programID, attribute, name);
	}
	
	this.bindFragOutput = function bindFragOutput(attribute, name) {
		gl.bindFragDataLocation(this.programID, attribute, name);
	}
}