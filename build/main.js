/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_core_WebGL__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_shader_TestShader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_shader_ShaderProgram__ = __webpack_require__(3);




window.onload = function() {
	var gl = new __WEBPACK_IMPORTED_MODULE_0__engine_core_WebGL__["a" /* default */]("600px","800px");
	gl.viewport(0,0,600,800);
	var shader = new __WEBPACK_IMPORTED_MODULE_2__engine_shader_ShaderProgram__["a" /* default */](gl);
	var vertexShader = "#version 200 core" +
			"in vec2 position"+
			"void main() {"+
			"gl_Position = vec4(position, 0, 1);"+
			"}";
	var fragmentShader = "#version 200 core" +
			"void main() {" +
			"gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);" +
			"}" 
	
	var testShader = new __WEBPACK_IMPORTED_MODULE_1__engine_shader_TestShader__["a" /* default */]("testShader", gl, vertexShader, fragmentShader);
	testShader.start();
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initializeWebGL;
function initializeWebGL(height, width) {
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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TestShader;
function TestShader(name, gl, vertex, fragment) {
	//----programs
	const VERTEX_FILE = vertex;
	const FRAGMENT_FILE = fragment;
	
	this.prototype = new ShaderProgram(name, gl);
	addVertexShader(VERTEX_FILE);
	addFragmentShader(FRAGMENT_FILE);
	compile();
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ShaderProgram;
function ShaderProgram(name, gl) {
	var programID = gl.createProgram();
	var vertexShaderID;
	var fragmentShaderID;
	var uniforms = {};
	
	if(this.programID == 0) {
		console.log("Shader creation failed!");
		return;
	} else {
		console.log("Shader created!");
	}
	
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
			gl.detachShader(this.programID, this.vertexShaderID)
		}
		
		if(this.fragmentShaderID) {
			gl.detachShader(this.programID, this.fragmentShaderID)
		}
		gl.deleteProgram(this.programID);
	}
	
	this.loadUniformLocations = function loadUniformLocations() {}
	
	this.compile = function compile() {
		this.bindAttributes();
		gl.linkProgram(this.programID);
		
		if(gl.getProgrami(programID, gl.LINK_STATUS) == 0) {
			console.log(gl.getProgramInfoLog(programID, 1024));
			return;
		}
		
		gl.validateProgram(this.programID);
		
		if(gl.getProgrami(this.programID, gl.VALIDATE_STATUS) == 0) {
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

/***/ })
/******/ ]);