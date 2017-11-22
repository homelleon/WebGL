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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_core_Loop__ = __webpack_require__(2);





var gl;
var loop;

window.onload = init();

function init() {
	gl = new __WEBPACK_IMPORTED_MODULE_0__engine_core_WebGL__["a" /* default */]("800px","1000px");
	gl.viewport(0, 0, 600, 800);
	loop = new __WEBPACK_IMPORTED_MODULE_1__engine_core_Loop__["a" /* default */](gl);
	loop.update();
	loop.stop();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Loop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer_MainRenderer__ = __webpack_require__(3);


function Loop(gl) {
	var renderer = new __WEBPACK_IMPORTED_MODULE_0__renderer_MainRenderer__["a" /* default */](gl);
	
	this.update = function update() {
		renderer.render();
	}
	
	this.stop = function stop() {
		renderer.stop();
	}
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MainRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TestRenderer__ = __webpack_require__(4);


function MainRenderer(gl) {	
	var testRenderer = new __WEBPACK_IMPORTED_MODULE_0__TestRenderer__["a" /* default */](gl);
	
	this.render = function render() {
		testRenderer.render();
	}
	
	this.clean = function clean() {
		testRenderer.clean();
	}
	
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TestRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_TestShader__ = __webpack_require__(5);


function TestRenderer(gl) {
	var shader = new __WEBPACK_IMPORTED_MODULE_0__shader_TestShader__["a" /* default */](gl);
	console.log(shader);
	var vetices = [
		-0.5, 0,
		0.0, 1.0,
		0.5, 0
	];
	
	this.render = function render() {
		shader.start;
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3)
		shader.stop;
	}
	
	this.clean = function clean() {
		shader.stop;
		shader.clean;
	}
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TestShader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__ = __webpack_require__(6);


function TestShader(gl) {
	this.value = 1;
	//----programs
	const VERTEX_FILE = "#version 200 core" +
	"attribute vec2 position"+
	"void main() {"+
	"gl_Position = vec4(position, 0, 1);" +
	"}";	
	const FRAGMENT_FILE = "void main() {" +
	"gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);" +
	"}";
//	this.prototype.addVertexShader(VERTEX_FILE);
//	this.prototype.addFragmentShader(FRAGMENT_FILE);
//	this.prototype.compile();
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function ShaderProgram(gl) {
	
	function Shader() {
		this.programID = gl.createProgram();	
	}
	// initialization
	
	if(!Shader.programID) {
		console.log("Shader creation failed!");
		return;
	} else {
		console.log("Shader created!");
	}
	
	// functions
	Shader.start = function start() {
		gl.useProgram(this.programID);
		console.log("Shader started!");
	}
	
	Shader.stop = function stop() {
		gl.useProgram(0);
	}
	
	Shader.clean = function clean() {
		this.stop();
		if(this.vertexShaderID) {
			gl.detachShader(this.programID, this.vertexShaderID)
		}
		
		if(this.fragmentShaderID) {
			gl.detachShader(this.programID, this.fragmentShaderID)
		}
		gl.deleteProgram(this.programID);
	}
	
	Shader.loadUniformLocations = function loadUniformLocations() {}
	Shader.bindAttributes = function bindAttributes() {}
	
	Shader.compile = function compile() {
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
	
	Shader.loadShader = function loadShader(file, type) {
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
	
	
	Shader.addVertexShader = function addVertexShader(text) {
		this.vertexShaderID = this.loadShader(text, gl.VERTEX_SHADER);
	}
	
	Shader.addFragmentShader = function addFragmentShader(text) {
		this.fragmentShaderID = this.loadShader(text, gl.FRAGMENT_SHADER);
	}
	
	Shader.addUniform = function addUniform(name) {
		var uniformLocation = this.getUniformLocation(name);
		
		if(uniformLocation == "0xFFFFFFFF") {
			console.log("Couldn't find uniform: " + name);
			return;
		}
		
		this.uniforms[name] = uniformLocation;
	}
	
	Shader.loadInt = function loadInt(name, value) {
		var uniformLocation = this.uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	Shader.loadFloat = function loadFloat(name, value) {
		var uniformLocation = this.uniforms[name];
		gl.uniform1f(uniformLocation, value);
	}
	
	Shader.load3DVector = function load3DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		gl.uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	}
	
	Shader.load2DVector = function load2DVector(name, vector) {
		var uniforomLocation = this.uniforms[name];
		gl.uniform2f(uniformLocation, vector.x, vector.y);
	}
	
	Shader.bindAttribute = function bindAttribute(attribute, name) {
		gl.bindAttribLocation(this.programID, attribute, name);
	}
	
	Shader.bindFragOutput = function bindFragOutput(attribute, name) {
		gl.bindFragDataLocation(this.programID, attribute, name);
	}
	
	return Shader;
}

/***/ })
/******/ ]);