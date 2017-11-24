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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
/* harmony export (immutable) */ __webpack_exports__["initial"] = initial;
/* harmony export (immutable) */ __webpack_exports__["sum"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_core_Loop__ = __webpack_require__(1);


var gl;

function initial() {
	return 1;
}

function sum(a, b) {
	return initial() + a + b;
}

window.onload = function () {

	var canvas = document.getElementById("gl");

	// initialize webgl
	try {
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") || canvas.getContext("moz-webgl") || canvas.getContext("webkit-3d");
	} catch (e) {}

	if (!gl) {
		console.log("WebGL is not supported by your browser");
	}

	if (gl) {
		console.dir(gl); // see all webgl objects
		gl.viewportHeight = canvas.height;
		gl.viewportWidth = canvas.width;
		//		gl.haveVAOs = getAndApplyExtension(gl, "OES_vertex_array_object");
		// start engine	
		var loop = new __WEBPACK_IMPORTED_MODULE_0__engine_core_Loop__["a" /* Loop */]();
		loop.update();
		loop.stop();
	}
};

//function getAndApplyExtension(gl, name) {
//	  var ext = gl.getExtension(name);
//	  if (!ext) {
//	    return false;
//	  }
//	  var suffix = name.split("_")[0];
//	  var prefix = suffix = '_';
//	  var suffixRE = new RegExp(suffix + '$');
//	  var prefixRE = new RegExp('^' + prefix);
//	  for (var key in ext) {
//	    var val = ext[key];
//	    if (typeof(val) === 'function') {
//	      // remove suffix (eg: bindVertexArrayOES -> bindVertexArray)
//	      var unsuffixedKey = key.replace(suffixRE, '');
//	     if (key.substing) {
//	      gl[unprefixedKey] = ext[key].bind(ext);
//	    } else {
//	      var unprefixedKey = key.replace(prefixRE, '');
//	      gl[unprefixedKey] = ext[key];
//	    }
//	  }

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Loop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer_MainRenderer__ = __webpack_require__(2);


function Loop() {
	// initialization
	var renderer = new __WEBPACK_IMPORTED_MODULE_0__renderer_MainRenderer__["a" /* MainRenderer */]();

	// methods
	this.update = function update() {
		renderer.render();
	};

	this.stop = function stop() {
		renderer.clean();
	};
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MainRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TestRenderer__ = __webpack_require__(3);



function MainRenderer() {
	// initialization
	this.testRenderer = new __WEBPACK_IMPORTED_MODULE_1__TestRenderer__["a" /* TestRenderer */]();

	// methods
	this.render = function render() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].clearColor(1.0, 0.0, 0.0, 0.5);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].clear(__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].COLOR_BUFFER_BIT);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].viewportWidth, __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].viewportHeight);
		this.testRenderer.render();
	};

	this.clean = function clean() {
		this.testRenderer.clean();
	};
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TestRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_TestShader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_VAO__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__primitive_VBO__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_js__ = __webpack_require__(0);





function TestRenderer() {
	// initialization
	this.shader = new __WEBPACK_IMPORTED_MODULE_0__shader_TestShader__["a" /* TestShader */]();

	var triangleVertices = [0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0, 0];

	//	this.vao = new VAO();
	//	this.vao.bind();
	//	console.dir(this.vao);

	this.vbo = new __WEBPACK_IMPORTED_MODULE_2__primitive_VBO__["a" /* VBO */](__WEBPACK_IMPORTED_MODULE_3__index_js__["gl"].ARRAY_BUFFER);
	this.vbo.bind();
	this.vbo.setData(triangleVertices, 3);

	// methods
	this.render = function render() {
		this.shader.start();
		__WEBPACK_IMPORTED_MODULE_3__index_js__["gl"].enableVertexAttribArray(0);
		__WEBPACK_IMPORTED_MODULE_3__index_js__["gl"].vertexAttribPointer(0, this.vbo.dimentions, __WEBPACK_IMPORTED_MODULE_3__index_js__["gl"].FLOAT, false, 0, 0);
		__WEBPACK_IMPORTED_MODULE_3__index_js__["gl"].drawArrays(__WEBPACK_IMPORTED_MODULE_3__index_js__["gl"].TRIANGLES, 0, this.vbo.size);
		this.shader.stop();
	};

	this.clean = function clean() {
		this.shader.stop();
		this.shader.clean();
	};
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TestShader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__ = __webpack_require__(5);


function TestShader() {
	this.__proto__ = new __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__["a" /* ShaderProgram */]();
	//----programs
	const VERTEX_FILE = 'shader-vs';
	const FRAGMENT_FILE = 'shader-fs';
	//----attributes
	const ATTRIBUTE_POSITION = "aVertexPosition";

	// functions
	// @override
	this.bindAttributes = function bindAttributes() {
		this.bindAttribute(0, ATTRIBUTE_POSITION);
	};

	// initialize
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compileShaders();
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ShaderProgram;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


function ShaderProgram() {
	// initialization
	const VERTEX_SHADER = 'shader-vs';
	const FRAGMENT_SHADER = 'shader-fs';

	this.programID = __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].createProgram();

	if (!this.programID) {
		console.log("Shader creation failed!");
		return null;
	}

	// methods
	this.start = function start() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].useProgram(this.programID);
	};

	this.stop = function stop() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].useProgram(null);
	};

	this.clean = function clean() {
		this.stop();
		if (this.vertexShaderID) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].detachShader(this.programID, this.vertexShaderID);
		}

		if (this.fragmentShaderID) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].detachShader(this.programID, this.fragmentShaderID);
		}
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].deleteShader(this.fragmentShaderID);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].deleteShader(this.vertexShaderID);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].deleteProgram(this.programID);
	};

	this.loadUniformLocations = function loadUniformLocations() {};

	this.compileShaders = function compileShader() {
		this.bindAttributes();
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].linkProgram(this.programID);

		if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].getProgramParameter(this.programID, __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].LINK_STATUS)) {
			console.log(__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].getProgramInfoLog(this.programID, 1024));
			return null;
		}
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].validateProgram(this.programID);

		if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].getProgramParameter(this.programID, __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].VALIDATE_STATUS)) {
			console.log(__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].getProgramInfoLog(this.programID, 1024));
			return null;
		}
		this.loadUniformLocations();
	};

	this.loadShader = function loadShader(file, type) {
		var shaderID = __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].createShader(type);
		var source = document.getElementById(file).innerHTML;
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].shaderSource(shaderID, source);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].compileShader(shaderID);
		if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].getShaderParameter(shaderID, __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].COMPILE_STATUS)) {
			console.log(__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].getShaderInfoLog(shaderID, 500));
			console.log("Couldn't compile shader!");
			return null;
		}
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].attachShader(this.programID, shaderID);
		return shaderID;
	};

	this.addVertexShader = function addVertexShader(text) {
		this.vertexShaderID = this.loadShader(text, __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].VERTEX_SHADER);
	};

	this.addFragmentShader = function addFragmentShader(text) {
		this.fragmentShaderID = this.loadShader(text, __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].FRAGMENT_SHADER);
	};

	this.addUniform = function addUniform(name) {
		var uniformLocation = this.getUniformLocation(name);

		if (uniformLocation == "0xFFFFFFFF") {
			console.log("Couldn't find uniform: " + name);
			return;
		}

		this.uniforms[name] = uniformLocation;
	};

	this.loadInt = function loadInt(name, value) {
		var uniformLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform1f(uniformLocation, value);
	};

	this.loadFloat = function loadFloat(name, value) {
		var uniformLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform1f(uniformLocation, value);
	};

	this.load3DVector = function load3DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	};

	this.load2DVector = function load2DVector(name, vector) {
		var uniforomLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform2f(uniformLocation, vector.x, vector.y);
	};

	this.bindAttributes = function bindAttributes() {};

	this.bindAttribute = function bindAttribute(attribute, name) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindAttribLocation(this.programID, attribute, name);
	};

	this.bindFragOutput = function bindFragOutput(attribute, name) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindFragDataLocation(this.programID, attribute, name);
	};
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VAO */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


function VAO() {
	// initialization
	if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].haveVAOs) {
		console.log("You don't have extentions!");
	} else {
		this.object = __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].createVertexArray();
	}

	// methods
	this.bind = function bind() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindVertexArray(this.object);
	};

	this.unbind = function unbind() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindVertexArray(null);
	};
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = VBO;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


function VBO(type) {
	// initialization
	this.object = __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].createBuffer();
	this.type = type;

	// methods
	this.bind = function bind() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindBuffer(this.type, this.object);
	};

	this.unbind = function unbind() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindBuffer(this.type, this.object);
	};

	this.setData = function setData(values, dimentions) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bufferData(this.type, new Float32Array(values), __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].STATIC_DRAW);
		this.size = values.length / dimentions;
		this.dimentions = dimentions;
	};

	this.clean = function clean() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].deleteBuffer(this.object);
	};
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_index__ = __webpack_require__(0);


describe('function tests', () => {
	test('should be true for arguments 2 and 3', () => {
		expect(Object(__WEBPACK_IMPORTED_MODULE_0__source_index__["sum"])(2, 3) == 6).toBeTruthy();
	}), test('should return 8 for arguments 5 and 2', () => {
		expect(Object(__WEBPACK_IMPORTED_MODULE_0__source_index__["sum"])(5, 2)).toBe(8);
	});
});

/***/ })
/******/ ]);