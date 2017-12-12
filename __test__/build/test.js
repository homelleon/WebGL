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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector3f; });
function Vector3f(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.sub = function(leftVector, rightVector) {
		if(!rightVector) {
			this.x = this.x - leftVector.x;
			this.y = this.y - leftVector.y;
			this.z = this.z - leftVector.z;
			
			return this;
		} else {
			return new Vector3f(leftVector.x - rightVector.x, 
					leftVector.y - rightVector.y,
					leftVector.z - rightVector.z);
		} 
	}
} 



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_core_Loop__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_core_Extentions__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_core_Tools__ = __webpack_require__(39);




var gl = null;

window.onload = (function() {	
	var canvas = document.getElementById("gl");
	if(!canvas) {
		canvas = document.createElement("canvas");
		canvas.id = "gl";
		document.body.appendChild(canvas);
	}
	
	// initialize webgl
	try {
		gl = canvas.getContext("webgl") ||
			 canvas.getContext("experimental-webgl") ||
				canvas.getContext("moz-webgl") ||
				canvas.getContext("webkit-3d");
	}
	catch(err) {
		console.log(err);
	}
	
	if(!gl) {
		var err = "WebGL is not supported by your browser";
		console.log(err);
		canvas.innerHTML = err;
	}
	
	if(gl) {
	// make canvas full size 
		canvas.height = document.documentElement.clientHeight;
		canvas.width = document.documentElement.clientWidth;
	// initialize gl size
		gl.viewportHeight = canvas.height;
		gl.viewportWidth = canvas.width;
	// initialize exteriors
		Object(__WEBPACK_IMPORTED_MODULE_1__engine_core_Extentions__["a" /* initExtentions */])();
		Object(__WEBPACK_IMPORTED_MODULE_2__engine_core_Tools__["a" /* initTools */])();
	// initialize engine
		var loop = new __WEBPACK_IMPORTED_MODULE_0__engine_core_Loop__["a" /* Loop */]();
	// start looping
		(function looping() {
			loop.update();
			requestAnimFrame(looping, canvas);	
		})();
	}
});

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.onRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback, element) {
		return window.setTimeout(callback, 100 / 60);
	};
})();



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrix4f; });
/**
 * Representation of mathematical 4-dimentional matrix.
 */
function Matrix4f() {
	this.m = [[],[],[],[]];
	this.setIdentity;
	var self = this;
	
	/**
	 * Makes current matrix zero.
	 */
	this.zero = function() {
		this.m[0][0] = 0; this.m[0][1] = 0; this.m[0][2] = 0; this.m[0][3] = 0;
		this.m[1][0] = 0; this.m[1][1] = 0; this.m[1][2] = 0; this.m[1][3] = 0;
		this.m[2][0] = 0; this.m[2][1] = 0; this.m[2][2] = 0; this.m[2][3] = 0;
		this.m[3][0] = 0; this.m[3][1] = 0; this.m[3][2] = 0; this.m[3][3] = 0;
		
		return this;
	}
	
	/**
	 * Makes current matrix indentity.
	 */
	this.setIdentity = function() {
		this.m[0][0] = 1; this.m[0][1] = 0; this.m[0][2] = 0; this.m[0][3] = 0;
		this.m[1][0] = 0; this.m[1][1] = 1; this.m[1][2] = 0; this.m[1][3] = 0;
		this.m[2][0] = 0; this.m[2][1] = 0; this.m[2][2] = 1; this.m[2][3] = 0;
		this.m[3][0] = 0; this.m[3][1] = 0; this.m[3][2] = 0; this.m[3][3] = 1;
	
		return this;
	}
	
	this.orthographic2D = function(width, height) {
		this.m[0][0] = 2 / width; this.m[0][1] = 0; 		  this.m[0][2] = 0; this.m[0][3] = -1;
		this.m[1][0] = 0;		   this.m[1][1] = 2 / height; this.m[1][2] = 0; this.m[1][3] = -1;
		this.m[2][0] = 0; 		   this.m[2][1] = 0; 		  this.m[2][2] = 1; this.m[2][3] =  0;
		this.m[3][0] = 0; 		   this.m[3][1] = 0; 		  this.m[3][2] = 0; this.m[3][3] =  1;
		
		return this;
	}
	
	/**
	 * Translates current matrix by argument of Vector3f translation object.
	 */
	this.translate3f = function(translation) {
		this.m[3][0] += this.m[0][0] * translation.x + this.m[1][0] * translation.y + this.m[2][0] * translation.z;
		this.m[3][1] += this.m[0][1] * translation.x + this.m[1][1] * translation.y + this.m[2][1] * translation.z;
		this.m[3][2] += this.m[0][2] * translation.x + this.m[1][2] * translation.y + this.m[2][2] * translation.z;
		this.m[3][3] += this.m[0][3] * translation.x + this.m[1][3] * translation.y + this.m[2][3] * translation.z;
	
		return this;
	}
	
	/**
	 * Translates current matrix by argument of Vector2f translation object.
	 */
	this.translate2f = function(translation) {		
		this.m[3][0] += this.m[0][0] * translation.x + this.m[1][0] * translation.y;
		this.m[3][1] += this.m[0][1] * translation.x + this.m[1][1] * translation.y;
		this.m[3][2] += this.m[0][2] * translation.x + this.m[1][2] * translation.y;
		this.m[3][3] += this.m[0][3] * translation.x + this.m[1][3] * translation.y;
		
		return this;
	}
	
	/**
	 * Creates tranformation plane from current matrix by argument of Vector4f plane object.
	 */
	this.transform = function(plane) {
		var x = this.m[0][0] * plane.x + this.m[1][0] * plane.y + this.m[2][0] * plane.z + this.m[3][0] * plane.w;
		var y = this.m[0][1] * plane.x + this.m[1][1] * plane.y + this.m[2][1] * plane.z + this.m[3][1] * plane.w;
		var z = this.m[0][2] * plane.x + this.m[1][2] * plane.y + this.m[2][2] * plane.z + this.m[3][2] * plane.w;
		var w = this.m[0][3] * plane.x + this.m[1][3] * plane.y + this.m[2][3] * plane.z + this.m[3][3] * plane.w;
		
		return new Vector4f(x,y,z,w);
	}
	
	//TODO: need to be static
	this.transform = function(matrix, plane) {
		var x = matrix.m[0][0] * plane.x + matrix.m[1][0] * plane.y + matrix.m[2][0] * plane.z + matrix.m[3][0] * plane.w;
		var y = matrix.m[0][1] * plane.x + matrix.m[1][1] * plane.y + matrix.m[2][1] * plane.z + matrix.m[3][1] * plane.w;
		var z = matrix.m[0][2] * plane.x + matrix.m[1][2] * plane.y + matrix.m[2][2] * plane.z + matrix.m[3][2] * plane.w;
		var w = matrix.m[0][3] * plane.x + matrix.m[1][3] * plane.y + matrix.m[2][3] * plane.z + matrix.m[3][3] * plane.w;
		
		return new Vector4f(x,y,z,w);
	}
	
	/**
	 * Rotates by argument of vector3f rotation object.
	 */
	this.rotate = function(rotation) {
		var rx = new Matrix4f();
		var ry = new Matrix4f();
		var rz = new Matrix4f();
		
		//TODO: toRadiants - is there such a function in JS?
		var x = Math.toRadians(rotation.getX());
		var y = Math.toRadians(rotation.getY());
		var z = Math.toRadians(rotation.getZ());
		
		rz.m[0][0] = Math.cos(z); 		 rz.m[0][1] = -Math.sin(z); 	 	 rz.m[0][2] = 0; 				   rz.m[0][3] = 0;
		rz.m[1][0] = Math.sin(z); 		 rz.m[1][1] = Math.cos(z);  	 	 rz.m[1][2] = 0; 				   rz.m[1][3] = 0;
		rz.m[2][0] = 0; 				 rz.m[2][1] = 0; 				   	 rz.m[2][2] = 1; 				   rz.m[2][3] = 0;
		rz.m[3][0] = 0; 				 rz.m[3][1] = 0; 				   	 rz.m[3][2] = 0; 				   rz.m[3][3] = 1;
		
		rx.m[0][0] = 1; 				 rx.m[0][1] = 0;					 rx.m[0][2] = 0; 				   rx.m[0][3] = 0;
		rx.m[1][0] = 0; 				 rx.m[1][1] = Math.cos(x); 			 rx.m[1][2] = -Math.sin(x); 	   rx.m[1][3] = 0;
		rx.m[2][0] = 0; 				 rx.m[2][1] = Math.sin(x); 	 		 rx.m[2][2] = Math.cos(x);  	   rx.m[2][3] = 0;
		rx.m[3][0] = 0; 				 rx.m[3][1] = 0; 				 	 rx.m[3][2] = 0;				   rx.m[3][3] = 1;
		
		ry.m[0][0] = Math.cos(y); 		 ry.m[0][1] = 0; 					 ry.m[0][2] = Math.sin(y);  	   ry.m[0][3] = 0;
		ry.m[1][0] = 0; 				 ry.m[1][1] = 1; 				 	 ry.m[1][2] = 0; 				   ry.m[1][3] = 0;
		ry.m[2][0] = -Math.sin(y);		 ry.m[2][1] = 0;					 ry.m[2][2] = Math.cos(y);  	   ry.m[2][3] = 0;
		ry.m[3][0] = 0; 				 ry.m[3][1] = 0; 					 ry.m[3][2] = 0; 				   ry.m[3][3] = 1;
	
		this.m =  rz.mul(ry.mul(rx)).getM();
		
		return this;
	}
	
	/**
	 * Rotates current matrix by arguments of rotation angle and axis.
	 */
	this.rotate = function(angle, axis) {		
		var c = Math.cos(angle);
		var s = Math.sin(angle);
		var oneminusc = 1.0 - c;
		var xy = axis.x * axis.y;
		var yz = axis.y * axis.z;
		var xz = axis.x * axis.z;
		var xs = axis.x * s;
		var ys = axis.y * s;
		var zs = axis.z * s;

		var f00 = axis.x * axis.x * oneminusc + c;
		var f01 = xy * oneminusc + zs;
		var f02 = xz * oneminusc - ys;
		// n[3] not used
		var f10 = xy * oneminusc - zs;
		var f11 = axis.y * axis.y * oneminusc + c;
		var f12 = yz * oneminusc + xs;
		// n[7] not used
		var f20 = xz * oneminusc + ys;
		var f21 = yz * oneminusc - xs;
		var f22 = axis.z * axis.z * oneminusc + c;

		var t00 = this.m[0][0] * f00 + this.m[1][0] * f01 + this.m[2][0] * f02;
		var t01 = this.m[0][1] * f00 + this.m[1][1] * f01 + this.m[2][1] * f02;
		var t02 = this.m[0][2] * f00 + this.m[1][2] * f01 + this.m[2][2] * f02;
		var t03 = this.m[0][3] * f00 + this.m[1][3] * f01 + this.m[2][3] * f02;
		var t10 = this.m[0][0] * f10 + this.m[1][0] * f11 + this.m[2][0] * f12;
		var t11 = this.m[0][1] * f10 + this.m[1][1] * f11 + this.m[2][1] * f12;
		var t12 = this.m[0][2] * f10 + this.m[1][2] * f11 + this.m[2][2] * f12;
		var t13 = this.m[0][3] * f10 + this.m[1][3] * f11 + this.m[2][3] * f12;
		
		
		this.m[2][0] = this.m[0][0] * f20 + this.m[1][0] * f21 + this.m[2][0] * f22;
		this.m[2][1] = this.m[0][1] * f20 + this.m[1][1] * f21 + this.m[2][1] * f22;
		this.m[2][2] = this.m[0][2] * f20 + this.m[1][2] * f21 + this.m[2][2] * f22;
		this.m[2][3] = this.m[0][3] * f20 + this.m[1][3] * f21 + this.m[2][3] * f22;
		this.m[0][0] = t00;
		this.m[0][1] = t01;
		this.m[0][2] = t02;
		this.m[0][3] = t03;
		this.m[1][0] = t10;
		this.m[1][1] = t11;
		this.m[1][2] = t12;
		this.m[1][3] = t13;
		
		return this;
	}
	
	/**
	 * Scales current matrix by argument Vector2f object
	 */
	this.scale = function(scaling) {
		this.m[0][0] = this.m[0][0] * scaling.x;
		this.m[0][1] = this.m[0][1] * scaling.x;
		this.m[0][2] = this.m[0][2] * scaling.x;
		this.m[0][3] = this.m[0][3] * scaling.x;
		this.m[1][0] = this.m[1][0] * scaling.y;
		this.m[1][1] = this.m[1][1] * scaling.y;
		this.m[1][2] = this.m[1][2] * scaling.y;
		this.m[1][3] = this.m[1][3] * scaling.y;
		this.m[2][0] = this.m[2][0] * scaling.z;
		this.m[2][1] = this.m[2][1] * scaling.z;
		this.m[2][2] = this.m[2][2] * scaling.z;
		this.m[2][3] = this.m[2][3] * scaling.z;
		
		return this;
	}	
	
	/**
	 * Multiplies current matrix by argument matrix.
	 */
	this.mul = function(matrix) {
		
		return this.load(this.mul(this, matrix));
	}
	
	//TODO: need to be static
	/**
	 * Gets result of multiplication of two matrices.
	 */
	this.mul = function(left, right) {
		var matrix = new Matrix4f();
		matrix.m[0][0] = left.m[0][0] * right.m[0][0] + left.m[1][0] * right.m[0][1] + left.m[2][0] * right.m[0][2] + left.m[3][0] * right.m[0][3];
		matrix.m[0][1] = left.m[0][1] * right.m[0][0] + left.m[1][1] * right.m[0][1] + left.m[2][1] * right.m[0][2] + left.m[3][1] * right.m[0][3];
		matrix.m[0][2] = left.m[0][2] * right.m[0][0] + left.m[1][2] * right.m[0][1] + left.m[2][2] * right.m[0][2] + left.m[3][2] * right.m[0][3];
		matrix.m[0][3] = left.m[0][3] * right.m[0][0] + left.m[1][3] * right.m[0][1] + left.m[2][3] * right.m[0][2] + left.m[3][3] * right.m[0][3];
		matrix.m[1][0] = left.m[0][0] * right.m[1][0] + left.m[1][0] * right.m[1][1] + left.m[2][0] * right.m[1][2] + left.m[3][0] * right.m[1][3];
		matrix.m[1][1] = left.m[0][1] * right.m[1][0] + left.m[1][1] * right.m[1][1] + left.m[2][1] * right.m[1][2] + left.m[3][1] * right.m[1][3];
		matrix.m[1][2] = left.m[0][2] * right.m[1][0] + left.m[1][2] * right.m[1][1] + left.m[2][2] * right.m[1][2] + left.m[3][2] * right.m[1][3];
		matrix.m[1][3] = left.m[0][3] * right.m[1][0] + left.m[1][3] * right.m[1][1] + left.m[2][3] * right.m[1][2] + left.m[3][3] * right.m[1][3];
		matrix.m[2][0] = left.m[0][0] * right.m[2][0] + left.m[1][0] * right.m[2][1] + left.m[2][0] * right.m[2][2] + left.m[3][0] * right.m[2][3];
		matrix.m[2][1] = left.m[0][1] * right.m[2][0] + left.m[1][1] * right.m[2][1] + left.m[2][1] * right.m[2][2] + left.m[3][1] * right.m[2][3];
		matrix.m[2][2] = left.m[0][2] * right.m[2][0] + left.m[1][2] * right.m[2][1] + left.m[2][2] * right.m[2][2] + left.m[3][2] * right.m[2][3];
		matrix.m[2][3] = left.m[0][3] * right.m[2][0] + left.m[1][3] * right.m[2][1] + left.m[2][3] * right.m[2][2] + left.m[3][3] * right.m[2][3];
		matrix.m[3][0] = left.m[0][0] * right.m[3][0] + left.m[1][0] * right.m[3][1] + left.m[2][0] * right.m[3][2] + left.m[3][0] * right.m[3][3];
		matrix.m[3][1] = left.m[0][1] * right.m[3][0] + left.m[1][1] * right.m[3][1] + left.m[2][1] * right.m[3][2] + left.m[3][1] * right.m[3][3];
		matrix.m[3][2] = left.m[0][2] * right.m[3][0] + left.m[1][2] * right.m[3][1] + left.m[2][2] * right.m[3][2] + left.m[3][2] * right.m[3][3];
		matrix.m[3][3] = left.m[0][3] * right.m[3][0] + left.m[1][3] * right.m[3][1] + left.m[2][3] * right.m[3][2] + left.m[3][3] * right.m[3][3];

		return matrix;
	}
	
	this.traspose = function() {
		var result = new Matrix4f();
		
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				result.set(i, j, get(j,i));
			}
		}
		return result;
	}
		
	this.invert = function(src, dest) {
		if(!dest) {
			dest = new Matrix4f();
		}
		
		if(!src) {
			src = self;
		}
		
		var determinant = src.determinant();

		if (determinant) {
			/*
			 * m00 m01 m02 m03
			 * m10 m11 m12 m13
			 * m20 m21 m22 m23
			 * m30 m31 m32 m33
			 */
			var determinant_inv = 1 / determinant;

			// first row
			var t00 =  this.determinant3x3(src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t01 = -this.determinant3x3(src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t02 =  this.determinant3x3(src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t03 = -this.determinant3x3(src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// second row
			var t10 = -this.determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t11 =  this.determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t12 = -this.determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t13 =  this.determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// third row
			var t20 =  this.determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t21 = -this.determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t22 =  this.determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t23 = -this.determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// fourth row
			var t30 = -this.determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3]);
			var t31 =  this.determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3]);
			var t32 = -this.determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3]);
			var t33 =  this.determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2]);

			// transpose and divide by the determinant
			dest.m[0][0] = t00*determinant_inv;
			dest.m[1][1] = t11*determinant_inv;
			dest.m[2][2] = t22*determinant_inv;
			dest.m[3][3] = t33*determinant_inv;
			dest.m[0][1] = t10*determinant_inv;
			dest.m[1][0] = t01*determinant_inv;
			dest.m[2][0] = t02*determinant_inv;
			dest.m[0][2] = t20*determinant_inv;
			dest.m[1][2] = t21*determinant_inv;
			dest.m[2][1] = t12*determinant_inv;
			dest.m[0][3] = t30*determinant_inv;
			dest.m[3][0] = t03*determinant_inv;
			dest.m[1][3] = t31*determinant_inv;
			dest.m[3][1] = t13*determinant_inv;
			dest.m[3][2] = t23*determinant_inv;
			dest.m[2][3] = t32*determinant_inv;
			return dest;
		} else
			return null;
	}
	
	this.determinant3x3 = function(t00, t01, t02,
		     t10, t11, t12,
		     t20, t21, t22)	{
		return   t00 * (t11 * t22 - t12 * t21)
		      + t01 * (t12 * t20 - t10 * t22)
		      + t02 * (t10 * t21 - t11 * t20);
	}
	
	this.determinant = function determinant() {
		var f =
			this.m[0][0]
				* ((this.m[1][1] * this.m[2][2] * this.m[3][3] + this.m[1][2] * this.m[2][3] * this.m[3][1] + this.m[1][3] * this.m[2][1] * this.m[3][2])
					- this.m[1][3] * this.m[2][2] * this.m[3][1]
					- this.m[1][1] * this.m[2][3] * this.m[3][2]
					- this.m[1][2] * this.m[2][1] * this.m[3][3]);
		f -= this.m[0][1]
			* ((this.m[1][0] * this.m[2][2] * this.m[3][3] + this.m[1][2] * this.m[2][3] * this.m[3][0] + this.m[1][3] * this.m[2][0] * this.m[3][2])
				- this.m[1][3] * this.m[2][2] * this.m[3][0]
				- this.m[1][0] * this.m[2][3] * this.m[3][2]
				- this.m[1][2] * this.m[2][0] * this.m[3][3]);
		f += this.m[0][2]
			* ((this.m[1][0] * this.m[2][1] * this.m[3][3] + this.m[1][1] * this.m[2][3] * this.m[3][0] + this.m[1][3] * this.m[2][0] * this.m[3][1])
				- this.m[1][3] * this.m[2][1] * this.m[3][0]
				- this.m[1][0] * this.m[2][3] * this.m[3][1]
				- this.m[1][1] * this.m[2][0] * this.m[3][3]);
		f -= this.m[0][3]
			* ((this.m[1][0] * this.m[2][1] * this.m[3][2] + this.m[1][1] * this.m[2][2] * this.m[3][0] + this.m[1][2] * this.m[2][0] * this.m[3][1])
				- this.m[1][2] * this.m[2][1] * this.m[3][0]
				- this.m[1][0] * this.m[2][2] * this.m[3][1]
				- this.m[1][1] * this.m[2][0] * this.m[3][2]);
		return f;
	}
	
	this.equals = function(m) {
		if (this.m[0][0] == m.getM()[0][0] && this.m[0][1] == m.getM()[0][1] &&
			this.m[0][2] == m.getM()[0][2] && this.m[0][3] == m.getM()[0][3] &&
			this.m[1][0] == m.getM()[1][0] && this.m[1][1] == m.getM()[1][1] &&
			this.m[1][2] == m.getM()[1][2] && this.m[1][3] == m.getM()[1][3] &&
			this.m[2][0] == m.getM()[2][0] && this.m[2][1] == m.getM()[2][1] &&
			this.m[2][2] == m.getM()[2][2] && this.m[2][3] == m.getM()[2][3] &&
			this.m[3][0] == m.getM()[3][0] && this.m[3][1] == m.getM()[3][1] &&
			this.m[3][2] == m.getM()[3][2] && this.m[3][3] == m.getM()[3][3])
				return true;
		else
			return false;	
	}
	
	this.set = function(x, y, value) {
		this.m[x][y] = value;
	}
	
	this.get = function(x, y) {
		return  this.m[x][y];
	}

	this.getM = function() {
		return this.m;
	}
	
	/**
	 * Load from a float buffer. The buffer stores the matrix in column major
	 * (OpenGL) order.
	 *
	 * @param buf A float buffer to read from
	 * @return this
	 */
	this.loadBuffer = function(buf) {

		this.m[0][0] = buf.get();
		this.m[0][1] = buf.get();
		this.m[0][2] = buf.get();
		this.m[0][3] = buf.get();
		this.m[1][0] = buf.get();
		this.m[1][1] = buf.get();
		this.m[1][2] = buf.get();
		this.m[1][3] = buf.get();
		this.m[2][0] = buf.get();
		this.m[2][1] = buf.get();
		this.m[2][2] = buf.get();
		this.m[2][3] = buf.get();
		this.m[3][0] = buf.get();
		this.m[3][1] = buf.get();
		this.m[3][2] = buf.get();
		this.m[3][3] = buf.get();

		return this;
	}
	
	this.load = function(matrix) {
		this.m = matrix;
	}
	
	/**
	 * Store this matrix in a float buffer. The matrix is stored in column
	 * major (openGL) order.
	 * @param buf The buffer to store this matrix in
	 */
	this.store = function(buf) {
		buf.push(this.m[0][0]);
		buf.push(this.m[0][1]);
		buf.push(this.m[0][2]);
		buf.push(this.m[0][3]);
		buf.push(this.m[1][0]);
		buf.push(this.m[1][1]);
		buf.push(this.m[1][2]);
		buf.push(this.m[1][3]);
		buf.push(this.m[2][0]);
		buf.push(this.m[2][1]);
		buf.push(this.m[2][2]);
		buf.push(this.m[2][3]);
		buf.push(this.m[3][0]);
		buf.push(this.m[3][1]);
		buf.push(this.m[3][2]);
		buf.push(this.m[3][3]);
		
		return this;
	}
	
	/**
	 * Verticle visualization
	 */
	this.toString = function() {
		
		return 	"|" + this.m[0][0] + " " + this.m[1][0] + " " + this.m[2][0] + " " + this.m[3][0] + "|\n" +
				"|" + this.m[0][1] + " " + this.m[1][1] + " " + this.m[2][1] + " " + this.m[3][1] + "|\n" +
				"|" + this.m[0][2] + " " + this.m[1][2] + " " + this.m[2][2] + " " + this.m[3][2] + "|\n" +
				"|" + this.m[0][3] + " " + this.m[1][3] + " " + this.m[2][3] + " " + this.m[3][3] + "|";
	}
	
	
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return buffers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer_MainRenderer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_Scene__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_VAOManager__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__control_Inputs__ = __webpack_require__(36);





var buffers = null;


/**
 * Engine loop.
 * 
 */
function Loop() {
	// initialization	
	var _renderer = new __WEBPACK_IMPORTED_MODULE_0__renderer_MainRenderer__["a" /* MainRenderer */]();
	buffers = new __WEBPACK_IMPORTED_MODULE_2__manager_VAOManager__["a" /* VAOManager */]();
	var _scene = new __WEBPACK_IMPORTED_MODULE_1__scene_Scene__["a" /* Scene */]();
	var _inputs = new __WEBPACK_IMPORTED_MODULE_3__control_Inputs__["a" /* Inputs */](_scene);
	
	// methods
	this.update = function() {
		_scene.getCamera().move();
		_renderer.render(_scene);
		_inputs.update();
	}
	
	this.stop = function() {
		_renderer.clean();
		buffers.clean();
	}
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maths; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix_Matrix4f__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector_Vector3f__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(1);




/**
 * Utility maths calculataion class.
 */
function Maths() {
	const PI = 3.14;
	
	/**
	 * Shifts angle into radian. 
	 */
	this.toRadians = function(angle) {
		return (angle / 180) * PI;
	}
	
	/**
	 * Creates perspective transformation (projection) matrix from arguments.
	 * 
	 * @param nearPlane - Vector4f-type object argument of nearest clipping plane
	 * @param farPlane - Vector4f-type object argument of farthest clipping plane
	 * @param FOV - Number-type argument of field of view
	 *  
	 * @return Matrix4f-type object of projection Matrix
	 */
	this.createProjectionMatrix = function(nearPlane, farPlane, FOV) {
		var projectionMatrix = new __WEBPACK_IMPORTED_MODULE_0__matrix_Matrix4f__["a" /* Matrix4f */]();
		var aspectRatio = __WEBPACK_IMPORTED_MODULE_2__index__["a" /* gl */].viewportWidth / __WEBPACK_IMPORTED_MODULE_2__index__["a" /* gl */].viewportHeight;
		var yScale = 1 / Math.tan(Math.toRadians(FOV / 2));
		var xScale = yScale / aspectRatio;
		var frustumLength = farPlane - nearPlane;
		
		projectionMatrix.setIdentity();
		
		projectionMatrix.m[0][0] = xScale;
		projectionMatrix.m[1][1] = yScale;
		projectionMatrix.m[2][2] = -((farPlane + nearPlane) / frustumLength); 
		projectionMatrix.m[2][3] = -1;
		projectionMatrix.m[3][2] = -((2 * nearPlane * farPlane) / frustumLength);
		projectionMatrix.m[3][3] = 0; 
		
		return projectionMatrix;
		
	}
	
	/**
	 * Creates camera view transformation (view) matrix from camera object.
	 * 
	 * @param camera - Camera-type object argument
	 * 
	 * @return Matrix4f-type object of view matrix
	 */
	this.createViewMatrix = function(camera) {
		var viewMatrix = new __WEBPACK_IMPORTED_MODULE_0__matrix_Matrix4f__["a" /* Matrix4f */]();
		viewMatrix.setIdentity();
		viewMatrix.rotate(Math.toRadians(camera.getPitch()), new __WEBPACK_IMPORTED_MODULE_1__vector_Vector3f__["a" /* Vector3f */](1, 0, 0));
		viewMatrix.rotate(Math.toRadians(camera.getYaw()), new __WEBPACK_IMPORTED_MODULE_1__vector_Vector3f__["a" /* Vector3f */](0, 1, 0));
		viewMatrix.rotate(Math.toRadians(camera.getRoll()), new __WEBPACK_IMPORTED_MODULE_1__vector_Vector3f__["a" /* Vector3f */](0, 0, 1));
		var negativeCameraPosition = new __WEBPACK_IMPORTED_MODULE_1__vector_Vector3f__["a" /* Vector3f */](
				-camera.getPosition().x, -camera.getPosition().y, -camera.getPosition().z);
		viewMatrix.translate3f(negativeCameraPosition);
		
		return viewMatrix;
	}
	
	
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_matrix_Matrix4f__ = __webpack_require__(2);



function Camera(name) {
	const speed = 100;
	const runSpeed = 400;
	const turnSpeed = 1;
	
	var _name = name;
	var _position = new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0); 
	var _pitch = 0;
	var _yaw = 0;
	var _roll = 0;
	var _target = null;
	var _targetAngle = 0;
	var _targetDistance = 0;
	var _currentTurnSpeed = 0;
	var _currentPitchSpeed = 0;
	var _currentForwardSpeed = 0;
	var _currentStrafeSpeed = 0;
	
	var _canRotate = false;
	var _canMove = true;
	
	this.move = function() {
		var yawAngle = _currentTurnSpeed * 0.6;
		var pitchAngle = _currentPitchSpeed * 0.6;
		var forwardDistance = _currentForwardSpeed * 0.6;
		var strafeDistance = _currentStrafeSpeed * 0.6;
		
		this.increaseRotation(0, yawAngle, pitchAngle);
		
		var dx = forwardDistance * Math.sin(Math.toRadians(-_yaw)) +
			strafeDistance * Math.sin(Math.toRadians(-_yaw + 90));
		var dy = forwardDistance * Math.sin(Math.toRadians(_pitch)) +
			strafeDistance * Math.cos(Math.toRadians(_pitch + 90));
		var dz = forwardDistance * Math.cos(Math.toRadians(-_yaw)) +
			strafeDistance * Math.cos(Math.toRadians(-_yaw + 90));
		
		this.increasePosition(dx, dy, dz);
		
		_currentTurnSpeed = 0;
		_currentPitchSpeed = 0;
		_currentForwardSpeed = 0;
		_currentStrafeSpeed = 0;
	}
	
	this.addSpeed = function(forward, slide) {
		if(_canMove) {
    		if(forward) {
    			_currentForwardSpeed += speed * forward;
    		}
    		if(slide) {
    			_currentStrafeSpeed += speed * slide;
    		}
		}
	}
	
	this.addTurnSpeed = function(turn, pitch) {
		if(_canRotate) {
    		if(turn) {
    			_currentTurnSpeed -= turnSpeed * turn;
    		}
    		
    		if(pitch) {
    			_currentPitchSpeed -= turnSpeed * pitch;
    		}
		}
	}
	
	this.attachTarget = function(target) {
		_target = target;
	}
	
	this.getViewMatrix = function() {		
		return Math.createViewMatrix(this);
	}
	
	this.increasePosition = function(dx, dy, dz) {
		_position.x += dx;
		_position.y += dy;
		_position.z += dz;		
	}
	
	this.increaseRotation = function(dx, dy, dz) {
		_roll += dx;
		_yaw += dy;
		_pitch += dz;
	}
	
	this.increaseTargetAngle = function(angle) {
		_targetAngle += angle;
	}
	
	this.increaseTargetDistance = function(distance) {
		_targetDistance += distance;
	}
	
	this.getName = function(name) {
		return _name;
	}
	
	this.getPosition = function() {
		return _position;
	}
	
	this.getPitch = function() {
		return _pitch;
	}
	
	this.getYaw = function() {
		return _yaw;
	}
	
	this.getRoll = function() {
		return _roll;
	}
	
	this.setCanRotate = function(canRotate) {
		_canRotate = canRotate;
	}
	
	this.canRotate = function() {
		return _canRotate;
	}
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mesh; });
/**
 * Object mesh containing buffer object information.
 * 
 * @param name - mesh name
 * @param vao - vertex array object
 */
function Mesh(name, vao) {
	var _name = name;
	var _vao = vao;
	
	this.getName = function() {
		return _name;
	}
	
	this.getVAO = function() {
		return _vao;
	}
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VAO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_VBO__ = __webpack_require__(24);



/**
 * Vertex array object for managing
 * vertex buffer objects to store them
 * into video buffer.
 */
function VAO() {
	// initialization
	var _object = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].createVertexArray();	
	var _vbos = [];
	var _indexBuffer = null;
    	      
	// methods
	/**
	 * Binds current vertex array object for webgl context. 
	 */
	this.bind = function() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].bindVertexArray(_object);
	}
	
	/**
	 * Unbinds all vertex array objects from webgl context.
	 */
	this.unbind = function() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].bindVertexArray(null);
	}
	
	/**
	 * Binds vertex buffer objects within current 
	 * vertex array object for special buffer indices
	 * of webgl context.
	 * 
	 * @param attributes - array of vbo binding points 
	 */
	this.bindAttrib = function(attributes) {
		this.bind();
		for(var attribute in attributes) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].enableVertexAttribArray(attribute);
		}
	}
	
	/**
	 * Unbinds vertex array and buffer objects from special
	 * buffer indices of webgl context.
	 * 
	 *  @param attributes - array of vbo binding points
	 */
	this.unbindAttrib = function(attributes) {
		for(var attribute in attributes) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].disableVertexAttribArray(attribute);
		}
		this.unbind();
	}
	
	/**
	 * Creates and loads data for new vertex buffer object 
	 * attribute of current vertex array buffer.
	 * 
	 * @param attribute - bind point of current vbo
	 * @param dimentions - count of data values dimentions
	 * @param values - values to store into vertex array buffer.
	 */
	this.createAttribute = function(attribute, dimentions, values) {
		var vbo = new __WEBPACK_IMPORTED_MODULE_1__primitive_VBO__["a" /* VBO */](__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].ARRAY_BUFFER);
		vbo.bind();
		vbo.storeData(values, dimentions);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].vertexAttribPointer(
				attribute, dimentions, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].FLOAT, false, 4 * dimentions, 0);
		vbo.unbind();
		_vbos.push(vbo);
	}
	
	/**
	 * Creates and loads indices data for new element array
	 * buffer object attribute of current vertex array buffer.  
	 */
	this.createIndexBuffer = function(values) {
		var indexVBO = new __WEBPACK_IMPORTED_MODULE_1__primitive_VBO__["a" /* VBO */](__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].ELEMENT_ARRAY_BUFFER);
		indexVBO.bind();
		indexVBO.storeIndexData(values);
		_indexBuffer = indexVBO; 
	}
	
	/**
	 * Releases all vertex buffer objects of current vertex 
	 * array object from webgl context.
	 */
	this.clean = function() {
		for(let vbo in vbos) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].deleteBuffer(vbo.object);
		}
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].deleteVertexArray(_object);
	}
	
	this.getObject = function() {
		return _object;
	}
	
	this.getVbos = function() {
		return _vbos;
	}
	
	this.getIndexBuffer = function() {
		return _indexBuffer;
	}
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector2f; });
function Vector2f(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.sub = function(leftValue, rightValue) {
		if(!r) {
			if(typeof leftVector == "number") {
				this.x -= leftValue;
				this.y -= leftValue;
			} else {
				this.x -= leftValue.x;
				this.y -= leftValue.y;	
			}			
			
			return this;
		} else {
			return new Vector2f(leftValue.x - rightValue.x, leftValue.y - rightValue.y); 
		}
	}
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderUtil; });
/**
 * Util class for object loader.
 */
function LoaderUtil() {
	
	this.removeEmptyStrings = function(data) {
		var result = [];
		for(var i = 0; i < data.length; i++) {
			if(!data[i] == "") {
				result.push(data[i]);
			}
		}
		
		return result;
	}
	
	this.generateNormalsCW = function(vertices, indices) {
    	for (var i = 0; i < indices.length; i += 3 ) {
    		var v0 = vertices[indices[i    ]].getPos();
    	    var v1 = vertices[indices[i + 1]].getPos();
    	    var v2 = vertices[indices[i + 2]].getPos();
    	        
    	    var normal = v1.sub(v0).cross(v2.sub(v0)).normalize();
    	        
    	    vertices[indices[i	  ]].setNormal(vertices[indices[i    ]].getNormal().push(normal));
    	    vertices[indices[i + 1]].setNormal(vertices[indices[i + 1]].getNormal().push(normal));
    	    vertices[indices[i + 2]].setNormal(vertices[indices[i + 2]].getNormal().push(normal));
    	}
    
    	for (var i = 0; i < vertices.length; ++i ) {	
    	    vertices[i].setNormal(vertices[i].getNormal().normalize());
    	}       
	}
	
	this.generateNormalsCCW = function(vertices, indices)	{
	    for (var i = 0; i < indices.length; i += 3 ) {
	    	var v0 = vertices[indices[i    ]].getPos();
	    	var v1 = vertices[indices[i + 1]].getPos();
	    	var v2 = vertices[indices[i + 2]].getPos();
	        
	    	var normal = v2.sub(v0).cross(v1.sub(v0)).normalize();
	        
	        vertices[indices[i	  ]].setNormal(vertices[indices[i    ]].getNormal().push(normal));
	        vertices[indices[i + 1]].setNormal(vertices[indices[i + 1]].getNormal().push(normal));
	        vertices[indices[i + 2]].setNormal(vertices[indices[i + 2]].getNormal().push(normal));
	    }

	    for (var i = 0; i < vertices.length; ++i ) {	
	    	vertices[i].setNormal(vertices[i].getNormal().normalize());
	    }       
	}
	
	this.peekLast = function() {
		return this[this.length - 1];
	}
};



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_math_testMaths__ = __webpack_require__(11);


new __WEBPACK_IMPORTED_MODULE_0__engine_math_testMaths__["a" /* testMath */]();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testMath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_engine_math_Maths__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_engine_math_matrix_Matrix4f__ = __webpack_require__(2);



function testMath() {	
	describe('Maths class test', () => {
		// initialize test variables
		const PI = 3.14;
		var maths = new __WEBPACK_IMPORTED_MODULE_0__source_engine_math_Maths__["a" /* Maths */](); // object to test
		jest.mock('./../../source/engine/math/Maths');
		
		describe('Maths \'toRadiants\' method test', () => {
			// arguments to test
			var angleArray = [
				0, 10, 45, 90, 180, 270, 360, -10
			];
			
			for(var i = 0; i < angleArray.length; i++) {
				// initialize suites variables
				var angle = angleArray[i];
				var result = angleArray[i] / 180 * PI;
				it('should return ' + result + ' for ' + angle + ' degrees angle', () => {
					expect(maths.toRadians(angle)).toBe(result);
				})
			}
		});
		
		describe('Maths \'createProjectionMatrix\' method test', () => {
			var event = new Event("load");
			beforeEach(() => {
				window.dispatchEvent(event);
			});
			
			maths = new __WEBPACK_IMPORTED_MODULE_0__source_engine_math_Maths__["a" /* Maths */]();
			// arguments to test
			var args = [
				// nearPlane, farPlane, FOV
				[0.1, 1000, 70],
				[0.2, 10000, 120],
				[1, 500, 30],
				[20, 2000, 115],
				[17.2, 505, 90],
				[0, 10000, 12]
			];
			
			// initialize common test variables
			var width = 800;
			var height = 600;
			var aspectRation = width / height;
			
			for(var i = 0; i < args.length; i++) {
				// initialize suites variables
				var nearPlane = args[i][0];
				var farPlane = args[i][1];
				var FOV = args[i][2];
				
				var projectionMatrix = new __WEBPACK_IMPORTED_MODULE_1__source_engine_math_matrix_Matrix4f__["a" /* Matrix4f */]();
				var yScale = 1 / Math.tan(maths.toRadians(FOV / 2));
				var xScale = yScale / aspectRation;
				var frustumLength = farPlane - nearPlane;
				
				projectionMatrix.setIdentity();
				
				projectionMatrix.m[0][0] = xScale;
				projectionMatrix.m[1][1] = yScale;
				projectionMatrix.m[2][2] = -((farPlane + nearPlane) / frustumLength); 
				projectionMatrix.m[2][3] = -1;
				projectionMatrix.m[3][2] = -((2 * nearPlane * farPlane) / frustumLength);
				projectionMatrix.m[3][3] = 0;
				
				it('should return same object for arguments: ' + nearPlane + ', ' + farPlane + ', ' + FOV, () => {
					expect(maths.createProjectionMatrix(nearPlane, farPlane, FOV).equal(projectionMatrix)).toBeTruthly();
				})				
			}
			
		})
	})
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityRenderer__ = __webpack_require__(13);



/**
 * Main enigine rendering function. 
 */
function MainRenderer() {
	const FOV = 120;
	const NEAR_PLANE = 0.1;
	const FAR_PLANE = 10000;
	
	// initialization
	var _projectionMatrix = Math.createProjectionMatrix(NEAR_PLANE, FAR_PLANE, FOV);
	var _entityRenderer = new __WEBPACK_IMPORTED_MODULE_1__EntityRenderer__["a" /* EntityRenderer */](_projectionMatrix);
	
	__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].DEPTH_TEST);
	
	// methods
	/**
	 * Renders scene objects.
	 * @param scene - engine scene
	 */
	this.render = function(scene) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].clearColor(0.0, 1.0, 1.0, 0.5);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].COLOR_BUFFER_BIT || __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].DEPTH_BUFFER_BIT);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].viewportWidth, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].viewportHeight);
		_entityRenderer.render(scene);
	}
	
	/**
	 * Clears rendering engine.
	 */
	this.clean = function() {
		_entityRenderer.clean();
	}
	
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_entityShader_EntityShader__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_matrix_Matrix4f__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object_camera_Camera__ = __webpack_require__(5);






/**
 * Part of rendering engine for entity objects.
 * 
 * @param projectionMatrix - perspective tranformation matrix for scene objects
 */
function EntityRenderer(projectionMatrix) {	
	// initialization
	var _shader = new __WEBPACK_IMPORTED_MODULE_0__shader_entityShader_EntityShader__["a" /* EntityShader */]();
	var _projectionMatrix = projectionMatrix;
	
	// initialize some shader uniforms
	_shader.start();
	_shader.loadProjectionMatrix(projectionMatrix);
	_shader.stop();
	
	// methods
	/**
	 * Renders entity objects.
	 */
	this.render = function(scene) {
		_shader.start();
		let entity = scene.getEntities().get(0);
		let model = entity.getModels()[0];
		let material = model.getMaterial();
		let vao = model.getMeshes()[0].getVAO();
		vao.bindAttrib([ 0, 1, 2 ]);
		_shader.loadViewMatrix(scene.getCamera().getViewMatrix());
		_shader.loadDiffuseColor(new __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__["a" /* Vector3f */]( 1, 0, 1 ));
		_shader.loadLights(scene.getLights());
		_shader.loadShineVariables(material.getShininess(), material.getReflectivity());
		__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* gl */].drawElements(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* gl */].TRIANGLES, vao.getIndexBuffer().getSize(), __WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* gl */].UNSIGNED_SHORT, 0);
		vao.unbindAttrib([ 0, 1, 2 ]);
		_shader.stop();
	}
	
	/**
	 * Finalize and clear current rendering tools.
	 */
	this.clean = function() {
		_shader.stop();
		_shader.clean();
	}
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityShader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector_Vector3f__ = __webpack_require__(0);



function EntityShader() {
	// pre-initialization
	this.__proto__ = new __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__["a" /* ShaderProgram */]();
	
	const MAX_LIGHTS = 10;
	
	//----programs
	const VERTEX_FILE = __webpack_require__(16);
	const FRAGMENT_FILE = __webpack_require__(17);
	//----attributes
	const ATTRIBUTE_POSITION = 'in_position';
	const ATTRIBUTE_TEXTURE_COORDS = 'in_textureCoords';
	const ATTRIBUTE_NORMAL = 'in_normals';
	//----uniforms
	// matrices
	const UNIFORM_RPOJECTION_MATRIX = 'projectionMatrix';
	const UNIFORM_VIEW_MATRIX = 'viewMatrix';
	const UNIFORM_MODEL_MATRIX = 'modelMatrix';
	const UNIFORM_INVERSE_VIEW_MATRIX = 'inverseViewMatrix';
	// color
	const UNIFORM_DIFFUSE_COLOR = 'diffuseColor';
	// light
	const UNIFORM_LIGHT_POSITION = 'lightPosition';
	const UNIFORM_LIGHT_COLOR = 'lightColor';
	const UNIFORM_LIGHT_ATTENUATION = 'lightAttenuation';
	const UNIFORM_SHININESS = 'shininess';
	const UNIFORM_REFLECTIVITY = 'reflectivity';
	
	// methods
	// @override
	this.bindAttributes = function() {
		this.bindAttribute(0, ATTRIBUTE_POSITION);
		this.bindAttribute(1, ATTRIBUTE_TEXTURE_COORDS);
		this.bindAttribute(2, ATTRIBUTE_NORMAL);
	}
	
	// @override
	this.loadUniformLocations = function() {
		// matrices
		this.addUniform(UNIFORM_RPOJECTION_MATRIX);
		this.addUniform(UNIFORM_VIEW_MATRIX);
		this.addUniform(UNIFORM_MODEL_MATRIX);
		this.addUniform(UNIFORM_INVERSE_VIEW_MATRIX);
		// color
		this.addUniform(UNIFORM_DIFFUSE_COLOR);
		// light
		this.addUniform(UNIFORM_SHININESS);
		this.addUniform(UNIFORM_REFLECTIVITY);
		for(let i = 0; i < MAX_LIGHTS; i++) {
			this.addUniform(UNIFORM_LIGHT_POSITION + "[" + i + "]");
			this.addUniform(UNIFORM_LIGHT_COLOR + "[" + i + "]");
			this.addUniform(UNIFORM_LIGHT_ATTENUATION + "[" + i + "]");
		}
	}
	
	this.loadProjectionMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_RPOJECTION_MATRIX, matrix);
	}
	
	this.loadViewMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_VIEW_MATRIX, matrix);
		this.loadMatrix(UNIFORM_INVERSE_VIEW_MATRIX, matrix.invert());
	}
	
	this.loadModelMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_MODEL_MATRIX, matrix);
	}
	
	this.loadDiffuseColor = function(color) {
		this.load3DVector(UNIFORM_DIFFUSE_COLOR, color);
	}
	
	this.loadShineVariables = function(shininess, reflectivity) {
		this.loadFloat(UNIFORM_SHININESS, shininess);
		this.loadFloat(UNIFORM_REFLECTIVITY, reflectivity);
	}
	
	this.loadLights = function(lights) {
		for(let i = 0; i < MAX_LIGHTS; i++) {
			if(i < lights.length()) {
				this.load3DVector(
					UNIFORM_LIGHT_POSITION + "[" + i + "]", 
					lights.get(i).getPosition()
				);
				
				this.load3DVector(
					UNIFORM_LIGHT_COLOR + "[" + i + "]", 
					lights.get(i).getColor()
				);
				
				this.load3DVector(
					UNIFORM_LIGHT_ATTENUATION + "[" + i + "]", 
					lights.get(i).getAttenuation()
				);				
			} else {
				this.load3DVector(
					UNIFORM_LIGHT_POSITION + "[" + i + "]", 
					new __WEBPACK_IMPORTED_MODULE_1__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0)
				);
					
				this.load3DVector(
					UNIFORM_LIGHT_COLOR + "[" + i + "]", 
					new __WEBPACK_IMPORTED_MODULE_1__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0)
				);
					
				this.load3DVector(
					UNIFORM_LIGHT_ATTENUATION + "[" + i + "]", 
					new __WEBPACK_IMPORTED_MODULE_1__math_vector_Vector3f__["a" /* Vector3f */](1, 0, 0)
				);
			}
		}
	}
	
	// initialization
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compileShaders();	
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderProgram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);


function ShaderProgram() {
	// initialization	
	var _programObject = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].createProgram();
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
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].useProgram(_programObject);
	}
	
	this.stop = function() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].useProgram(null);
	}
	
	this.clean = function() {
		this.stop();
		if(_vertexShaderObject) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].detachShader(_programObject, _vertexShaderObject)
		}
		
		if(_fragmentShaderObject) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].detachShader(_programObject, _fragmentShaderObject)
		}
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].deleteShader(_fragmentShaderObject);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].deleteShader(_vertexShaderObject);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].deleteProgram(_programObject);
	}
	
	this.loadUniformLocations = function() {}
	
	this.compileShaders = function compileShader() {
		this.bindAttributes();
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].linkProgram(_programObject);
		
		if(!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].getProgramParameter(_programObject, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].LINK_STATUS)) {
			console.log(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].getProgramInfoLog(_programObject, 1024));
			return null;
		}
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].validateProgram(_programObject);
		
		if(!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].getProgramParameter(_programObject, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].VALIDATE_STATUS)) {
			console.log(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].getProgramInfoLog(_programObject, 1024));
			return null;
		}
		this.loadUniformLocations();
	}
	
	var loadShader = function(source, type) {
		var shaderID = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].createShader(type);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].shaderSource(shaderID, source);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].compileShader(shaderID);
		if(!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].getShaderParameter(shaderID, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].COMPILE_STATUS)) {
			console.log(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].getShaderInfoLog(shaderID, 500));
			console.log("Couldn't compile shader!");
			return null;
		}
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].attachShader(_programObject, shaderID);
		return shaderID;
	}
	
	this.addVertexShader = function(text) {
		_vertexShaderObject = loadShader(text, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].VERTEX_SHADER);
	}
	
	this.addFragmentShader = function(text) {
		_fragmentShaderObject = loadShader(text, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].FRAGMENT_SHADER);
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
		return __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].getUniformLocation(_programObject, name);
	}
	
	this.loadInt = function(name, value) {
		var uniformLocation = _uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].uniform1f(uniformLocation, value);
	}
	
	this.loadFloat = function(name, value) {
		var uniformLocation = _uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].uniform1f(uniformLocation, value);
	}
	
	this.load4DVector = function(name, vector) {
		var uniformLocation = _uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].uniform4f(uniformLocation, vector.x, vector.y, vector.z, vector.w);
	}
	
	this.load3DVector = function(name, vector) {
		var uniformLocation = _uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	}
	
	this.load2DVector = function(name, vector) {
		var uniformLocation = _uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].uniform2f(uniformLocation, vector.x, vector.y);
	}
	
	this.loadMatrix = function(name, matrix) {
		var uniformLocation = _uniforms[name];
		var matrixBuffer = [];
		matrix.store(matrixBuffer);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].uniformMatrix4fv(uniformLocation, false, matrixBuffer);
	}
	
	this.bindAttributes = function() {}
	
	this.bindAttribute = function(attribute, name) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].bindAttribLocation(_programObject, attribute, name);
	}
	
	this.bindFragOutput = function(attribute, name) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].bindFragDataLocation(_programObject, attribute, name);
	}
}




/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "// VETEX SHADER - Entity\r\n#define MAX_LIGHTS 10\r\n// > in <\r\nattribute vec3 in_position;\r\nattribute vec2 in_textureCoords;\r\nattribute vec3 in_normals;\r\n\r\n// > out <\r\nvarying vec3 toLightVector[MAX_LIGHTS];\r\nvarying vec3 toCameraVector;\r\nvarying vec3 surfaceNormal;\r\n\r\n// > uniforms <\r\n// matrices\r\nuniform mat4 modelMatrix;\r\nuniform mat4 viewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform mat4 inverseViewMatrix;\r\n\r\n// lights\r\nuniform vec3 lightPosition[MAX_LIGHTS];\r\n// > main <\r\nvoid main(void) {\r\n\t\r\n\tmat4 mvpMatrix = projectionMatrix * viewMatrix;\r\n\tvec4 worldPosition = vec4(in_position, 1.0);\r\n\t\r\n\t// normal\r\n\tsurfaceNormal = in_normals;\r\n\r\n\t// lights\r\n\tfor(int i = 0; i < MAX_LIGHTS; i++) {\r\n\t\ttoLightVector[i] = lightPosition[i] - worldPosition.xyz;\r\n\t}\r\n\r\n\ttoCameraVector = (inverseViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz - worldPosition.xyz;\r\n\r\n\t// position\r\n\tgl_Position = mvpMatrix * worldPosition;\r\n}\r\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "// FRAGMENT SHADER - Entity\r\n#define MAX_LIGHTS 10\r\nprecision mediump float;\r\n\r\n// > in <\r\nvarying vec3 toLightVector[MAX_LIGHTS];\r\nvarying vec3 surfaceNormal;\r\nvarying vec3 toCameraVector;\r\n\r\n// > uniforms <\r\n// lights\r\nuniform vec3 lightColor[MAX_LIGHTS];\r\nuniform vec3 lightAttenuation[MAX_LIGHTS];\r\nuniform float shininess;\r\nuniform float reflectivity;\r\n\r\nvoid main(void) {\r\n\t\r\n\tvec3 unitNormal = normalize(surfaceNormal);\r\n\tvec3 unitVectorToCamera = normalize(toCameraVector);\r\n\r\n\tvec3 totalDiffuse = vec3(0.0);\r\n\tvec3 totalSpecular = vec3(0.0);\r\n\r\n\t// lights influence\r\n\tfor(int i = 0; i < MAX_LIGHTS; i++) {\r\n\t\tfloat distance = length(toLightVector[i]);\r\n\t\tfloat attFactor = lightAttenuation[1].x +\r\n\t\t\t\t(lightAttenuation[i].y * distance) +\r\n\t\t\t\t(lightAttenuation[i].z * distance * distance);\r\n\r\n\t\tvec3 unitLightVector = normalize(toLightVector[i]);\r\n\t\tfloat nDot1 = dot(unitNormal, unitLightVector);\r\n\t\tfloat brightness = max(nDot1, 0.0);\r\n\t\tvec3 lightDirection = -unitLightVector;\r\n\t\tvec3 reflectedLightDirection = reflect(lightDirection, unitNormal);\r\n\t\tfloat specularFactor = dot(reflectedLightDirection, unitVectorToCamera);\r\n\t\tspecularFactor = max(specularFactor, 0.0);\r\n\t\tfloat dampedFactor = pow(specularFactor, shininess);\r\n\t\ttotalDiffuse = totalDiffuse + (brightness * lightColor[i]) / attFactor;\r\n\t\ttotalSpecular = totalSpecular + (dampedFactor * reflectivity * lightColor[i]) / attFactor;\r\n\t}\r\n\r\n\t// fragment color\r\n\tvec4 out_Color = vec4(1.0, 0.0, 0.0, 1.0);\r\n\tout_Color = vec4(totalDiffuse, 1.0) * out_Color + vec4(totalSpecular, 1.0);\r\n\t\r\n\tgl_FragColor = out_Color;\r\n}\r\n"

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_camera_Camera__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_ObjectManager__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__object_entity_Entity__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__object_light_Light__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__primitive_Model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__primitive_Mesh__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__primitive_Material__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_vector_Vector3f__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__primitive_VAO__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_Loop__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loader_objectLoader_OBJLoader__ = __webpack_require__(25);












/**
 * Engine scene controll function.
 * 
 */
function Scene() {
	// initialization
	var _camera = new __WEBPACK_IMPORTED_MODULE_0__object_camera_Camera__["a" /* Camera */]("MyCamera");
	var _sun = null;
	var _entities = new __WEBPACK_IMPORTED_MODULE_1__manager_ObjectManager__["a" /* ObjectManager */]();
	var _lights = new __WEBPACK_IMPORTED_MODULE_1__manager_ObjectManager__["a" /* ObjectManager */]();
	
	// prepare entities
	var loader = new __WEBPACK_IMPORTED_MODULE_10__loader_objectLoader_OBJLoader__["a" /* OBJLoader */]();
	var meshes = loader.load("", "spartan", null);
	var material = new __WEBPACK_IMPORTED_MODULE_6__primitive_Material__["a" /* Material */]("entityMaterial");
	var model = new __WEBPACK_IMPORTED_MODULE_4__primitive_Model__["a" /* Model */]("entityModel", meshes, material);
	var entity = new __WEBPACK_IMPORTED_MODULE_2__object_entity_Entity__["a" /* Entity */]("entity", model, new __WEBPACK_IMPORTED_MODULE_7__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0));
	
	_entities.add(entity);
	
	// prepare lights
	var sun = new __WEBPACK_IMPORTED_MODULE_3__object_light_Light__["a" /* Light */](
			new __WEBPACK_IMPORTED_MODULE_7__math_vector_Vector3f__["a" /* Vector3f */](1000, 5000, 1000), 
			new __WEBPACK_IMPORTED_MODULE_7__math_vector_Vector3f__["a" /* Vector3f */](1.3, 1.3, 1.3)
		);
	
	_lights.add(sun);

	// methods
	this.getCamera = function() {
		return _camera;
	}
	
	this.getEntities = function() {
		return _entities;
	}
	
	this.getLights = function() {
		return _lights;
	}
	
	this.getSun = function() {
		return _sun;
	}
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectManager; });
/**
 * Manages scene objects.
 * 
 */
function ObjectManager() {
	var _elements = [];
	
	this.add = function(element) {
		_elements.push(element);
	}
	
	this.get = function(index) {
		return _elements[index];
	}
	
	this.length = function() {
		return _elements.length;
	}
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__ = __webpack_require__(0);


/**
 * Engine scene object as entity.
 * 
 * @param name - entity name
 * @param model - entity model
 * @param position - entity position
 */
function Entity(name, model, position) {
	// initialization
	var _name = name;
	var _position = position;
	var _rotation = new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */]( 0, 0, 0 );
	var _models = [];
	var _scale = 1;
	var _isVisible = false;
	var _isMoved = false;
	var _isChosen = false;
	var _position = position || new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */]( 0, 0, 0 );
	
	_models.push(model);
	
	/**
	 * Increases entity position due to arguments. 
	 */
	this.increasePosition = function(x, y, z) {
		_position.x += x;
		_position.y += y;
		_position.z += z;
	}
	
	/**
	 * Increases entity rotation due to arguments.
	 */
	this.increaseRotation = function(x, y, z) {
		_rotation.x += x;
		_rotation.y += y;
		_rotation.z += z;
	}
	
	this.getName = function() {
		return _name;
	}
	
	this.getPosition = function() {
		return _position;
	}
	
	this.getRotation = function() {
		return _rotation;
	}
	
	this.getModels = function() {
		return _models;
	}
	
	this.getScale = function() {
		return _scale;
	}
	
	this.isVisible = function() {
		return _isVisible;
	}
	
	this.isMoved = function() {
		return _isMoved;
	}
	
	this.isChosen = function() {
		return _isChosen;
	}
	
}



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Light; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__ = __webpack_require__(0);


function Light(position, color, attenuation) {
	var _position = position || new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0);
	var _color = color || new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](1, 1, 0);  		// yellow
	var _attenuation = attenuation || new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](1, 0, 0); 
	
	this.getPosition = function() {
		return _position;
	}
		
	this.setPosition = function(position) {
		_position = position;
	}
	
	this.increasePosition = function(dx, dy, dz) {
		_position.x += dx;
		_position.y += dy;
		_position.z += dz;
	}

	this.getColor = function() {
		return _color;
	}
	
	this.setColor = function(color) {
		_color = color;
	}
	
	this.getAttenuation = function() {
		return _attenuation;
	}
	
	this.setAttenuation = function(attenuation) {
		_attenuation = attenuation;
	}
		
}



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/**
 * Object model contatining object mesh and material
 * information.
 *  
 * @param name - model name 
 * @param mesh - mesh for current model
 * @param material - material for current model
 */
function Model(name, meshes, material) {
	var _name = name;
	var _meshes = meshes;
	var _material = material;
	
	this.getMeshes = function() {
		return _meshes;
	}
	
	this.getMaterial = function() {
		return _material;
	}
}



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material; });
/**
 * Object material containing textures and color informations.
 * 
 * @param name - material name
 */
function Material(name) {
	// initialization
	var _name = name;
	// map
	var _diffuseMap = null;
	var _normalMap = null;
	var _displaceMap = null;
	var _ambientMap = null;
	var _specularMap = null;
	var _alphaMap = null;
	// params
	var _diffuseColor = null;
	var _shininess = 1;
	var _reflectivity = 0;
	var _reflectiveFactor = 0;
	var _refractiveFactor = 0;
	var _refractiveIndex = 0;
	var _emission = 0;
	
	var _useFakeLighting = false;
	
	this.getDiffuseMap = function() {
		return _diffuseMap;
	}
	
	this.setDiffuseMap = function(diffuseMap) {
		_diffuseMap = diffuseMap;
	}
	
	this.getNormalMap = function() {
		return _normalMap;
	}
	
	this.setNormalMap = function(normalMap) {
		_normalMap = normalMap;
	}
	
	this.getDisplaceMap = function() {
		return _displaceMap;
	}
	
	this.setDisplaceMap = function(displaceMap) {
		_displaceMap = displaceMap;
	}
	
	this.getAmbientMap = function() {
		return _ambientMap;
	}
	
	this.setAmbientMap = function(ambientMap) {
		_ambientMap = ambientMap;
	}
	
	this.getSpecularMap = function() {
		return _specularMap;
	}
	
	this.setSpecularMap = function(specularMap) {
		_specularMap = specularMap;
	}
	
	this.getAlphaMap = function() {
		return _alphaMap;
	}
	
	this.seAlphaMap = function(alphaMap) {
		_alphaMap = alphaMap
	}
	
	this.getDiffuseColor = function() {
		return _diffuseColor;
	}
	
	this.setDiffuseColor = function(color) {
		_diffuseColor = diffuseColor;
	}
	
	this.getShininess = function() {
		return _shininess;
	}
	
	this.setShininess = function(shininess) {
		_shininess = shininess;
	}
	
	this.getReflectivity = function() {
		return _reflectivity;
	}
	
	this.setReflectivity = function(reflectivity) {
		_reflectivity = reflectivity;
	}
	
	this.getReflectiveFactor = function() {
		return _reflectiveFactor;
	}
	
	this.setReflectiveFactor = function(factor) {
		_reflectiveFactor = factor;
	}
	
	this.getRefractiveFactor = function()  {
		return _refractiveFactor;
	}
	
	this.setRefractiveFactor = function(factor) {
		_refractiveFactor = factor;
	}
	
	this.getRefractiveIndex = function() {
		return _refractiveIndex;
	}
	
	this.setRefractiveIndex = function(index) {
		_refractiveIndex = index;
	}
	
	this.getEmission = function() {
		return _emission;
	}
	
	this.setEmission = function(emission) {
		_emission = emission;
	}
}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VBO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);


/**
 * Vertex buffer object linink for webgl object array.
 * 
 * @param type - Number type of current buffer object 
 */
function VBO(type) {
	// initialization
	var _object = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].createBuffer();
	var _type = type;
	var _size = 0;
	var _dimentions = 0;
	
	// methods
	/**
	 * Binds vertex buffer object for current
	 * webgl context.
	 */
	this.bind = function() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].bindBuffer(_type, _object);
	}
	
	/**
	 * Unbinds all vertex buffer objects from current
	 * webgl context. 
	 */
	this.unbind = function() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].bindBuffer(_type, null);
	}
	
	/**
	 * Stores data into video buffer.
	 */
	this.storeData = function(values, dimentions) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].bufferData(type, new Float32Array(values),
				__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].STATIC_DRAW);
		_size = values.length / dimentions;
		_dimentions = dimentions;
	}
	
	/**
	 * Stores indices into video buffer.
	 */
	this.storeIndexData = function(values) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].bufferData(type, new Uint16Array(values),
				__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].STATIC_DRAW);
		_size = values.length;
	}
	
	/**
	 * Releases current vertex array object.
	 */
	this.clean = function() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].deleteBuffer(_object);
	}
	
	this.getObject = function() {
		return _object;
	}
	
	this.getSize = function() {
		return _size;
	}
	
	this.getDimentions = function() {
		return _dimentions;
	}
	
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OBJLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Loop__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_Mesh__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_vector_Vector2f__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Vertex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Polygon__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PolygonGroup__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SmoothingGroup__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Face__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MeshObject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LoaderUtil__ = __webpack_require__(9);












// TODO: refactor this
/**
 * Model loader for .obj and .mtl files.
 * 
 * @param generateTangents - boolean argument to define if 
 * 							the loader will generate tangents
 */
function OBJLoader(generateTangents) {
	// intializaiton;
	var _vertices = [];
	var _normals = [];
	var _texCoords = [];

	var _objects = [];
	var _materials = new Map();
	var _currentSmoothingGroup = 0;
	var _materialName;
	
	var _generateNormals = true;
	var _genTangents = generateTangents || false;
	

	_objects.peekLast = new __WEBPACK_IMPORTED_MODULE_10__LoaderUtil__["a" /* LoaderUtil */]().peekLast.bind(_objects);
	
	/**
	 * Loads meshes from folder path, objFile and mtlFile name arguments.
	 * 
	 * @param path - files folder path to search file in
	 * @param objFile - name of .obj file
	 * @param mtlFile - name of .mtl file 
	 */
	this.load = function(path, objFile, mtlFile) {
		var time = new Date();
		var util = new __WEBPACK_IMPORTED_MODULE_10__LoaderUtil__["a" /* LoaderUtil */];
		var request = new XMLHttpRequest();
		
		if(mtlFile) {
			// loading mtl file
			request.open('GET', './meshes/'+ path + mtlFile + '.mtl', true);
			request.send(null);
			// TODO: Dangerous code!
			while(!request.status == 4) {}
			var mtl = request.responseText;
			
			// parsing .mtl
			if(!mtl) {
				try {						
					let lines = mtl.split["\r\n"];						
					var currentMtl = "";
					  
					for(var i = 0; i < lines.length; i++) {
						let tokens = lines[i].split(" ");
						tokens = util.removeEmptyStrings(tokens);
						
						if(!tokens.length) {
							continue;
						}
						
						if(tokens[0] == "newmtl") {
							let material = new Material(tokens[1]);
							materials.set(tokens[1], material);
							currentMtl = tokens[1];
						}
						
						if(tokens[0] == "Kd") {
							if(tokens.length > 1) {
								let color = new __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__["a" /* Vector3f */](+tokens[1], +tokens[2], +tokens[3]);
								materials.get(currentMtl).setColor(color);
							}
						}
						
						if(tokens[0] == "map_Kd") {
							if(tokens.length > 1){
								materials.get(currentMtl).setDiffuseMap(new Texture2D("diffuseMap", path + "/" + tokens[1]));
							}
						}
						
						if(tokens[0] == "map_Ks") {
							if(tokens.length > 1){
								materials.get(currentMtl).setSpecularMap(new Texture2D("specularMap", path + "/" + tokens[1]));
							}
						}
						
						if(tokens[0] == "map_bump") {
							if(tokens.length > 1) {
								materials.get(currentMtl).setNormalMap(new Texture2D("normalMap", path + "/" + tokens[1]));
							}
						}
						
						if(tokens[0] == "illum") {
							if(tokens.length > 1)
								materials.get(currentMtl).setEmission(Float.valueOf(tokens[1]));
						}
						
						if(tokens[0] == "Ns") {
							if(tokens.length > 1)
								materials.get(currentMtl).setShininess(Float.valueOf(tokens[1]));
						}
					}
					
					mtlReader.close();
				} catch(error) {
					console.log(error.stack);
				}
			}
		}
		
		// loading .obj file
		try {
			__webpack_require__(32)("./"+ path + objFile + '.obj');
			request.open('GET', './meshes/'+ path + objFile + '.obj', false);
			request.send(null);
			// TODO: Dangerous code!
			while(!request.status == 4) {}
			
			if(!request.status == 200) {
				throw "obj loading failed!";
			}
			var obj = request.responseText;
			
			// parsing obj
			if(!obj) {
				throw "obj file is empty!";
			}
			let lines = obj.split("\r\n");		
			
			for(let i = 0; i < lines.length; i++) {
				let tokens = lines[i].split(" ");
				tokens = util.removeEmptyStrings(tokens);
				
				if(!tokens.length || tokens[0] == "#") {
					continue;
				}
				
				if(tokens[0] == "v") {
					_vertices.push(
						new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](
							new __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__["a" /* Vector3f */](+tokens[1], +tokens[2], +tokens[3])
						)
					);
				}
				
				if(tokens[0] == "vn") {
					_normals.push(
						new __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__["a" /* Vector3f */](+tokens[1], +tokens[2], +tokens[3])
					);
				}
				
				if(tokens[0] ==  "vt") {
					_texCoords.push(
						new __WEBPACK_IMPORTED_MODULE_2__math_vector_Vector2f__["a" /* Vector2f */](+tokens[1], +tokens[2])
					);
				}
				
				if(tokens[0] == "o") {
					let object = new __WEBPACK_IMPORTED_MODULE_9__MeshObject__["a" /* MeshObject */]();
					object.setName(tokens[1]);
					_objects.push(new __WEBPACK_IMPORTED_MODULE_9__MeshObject__["a" /* MeshObject */]());
				}
				
				if(tokens[0] == "g") {
					let polygonGroup = new __WEBPACK_IMPORTED_MODULE_6__PolygonGroup__["a" /* PolygonGroup */]();	
					if (tokens.length > 1) {
						polygonGroup.setName(tokens[1]);
					}
					
					if (_objects.length == 0) {
						_objects.push(new __WEBPACK_IMPORTED_MODULE_9__MeshObject__["a" /* MeshObject */]());
					}
					_objects.peekLast().getPolygonGroups().push(polygonGroup);
				}
				
				if(tokens[0] == "usemtl") {
					let polygon = new __WEBPACK_IMPORTED_MODULE_5__Polygon__["a" /* Polygon */]();
					_materialName = tokens[1];
					polygon.setMaterial(tokens[1]);
					if(_objects.peekLast().getPolygonGroups().length == 0) {
						_objects.peekLast().getPolygonGroups().push(new __WEBPACK_IMPORTED_MODULE_6__PolygonGroup__["a" /* PolygonGroup */]());
					}
					_objects.peekLast().getPolygonGroups().peekLast().getPolygons().push(polygon);
				}
				
				if(tokens[0] == "s") {
					if(_objects.peekLast().getPolygonGroups().length == 0) {
						_objects.peekLast().getPolygonGroups().push(new __WEBPACK_IMPORTED_MODULE_6__PolygonGroup__["a" /* PolygonGroup */]());
					}
					
					if(tokens[1] == "off" || tokens[1] == "0") {
						_currentSmoothingGroup = 0;
						
						if(!_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().has(0)) {
							_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(_currentSmoothingGroup, new __WEBPACK_IMPORTED_MODULE_7__SmoothingGroup__["a" /* SmoothingGroup */]());
						}
					} else {
						_currentSmoothingGroup = +tokens[1];
						if(!_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().has(_currentSmoothingGroup)) {
							_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(_currentSmoothingGroup, new __WEBPACK_IMPORTED_MODULE_7__SmoothingGroup__["a" /* SmoothingGroup */]());
						}
					}
				}
				
				if(tokens[0] == "f") {
					if(_objects.peekLast().getPolygonGroups().length == 0) {
						_objects.peekLast().getPolygonGroups().push(new __WEBPACK_IMPORTED_MODULE_6__PolygonGroup__["a" /* PolygonGroup */]());
					}
					
					if(_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().length == 0) {
						_currentSmoothingGroup = 1;
						_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(_currentSmoothingGroup, new __WEBPACK_IMPORTED_MODULE_7__SmoothingGroup__["a" /* SmoothingGroup */]());
					}
					
					if(_objects.peekLast().getPolygonGroups().peekLast().getPolygons().length == 0) {
						_objects.peekLast().getPolygonGroups().peekLast().getPolygons().push(new __WEBPACK_IMPORTED_MODULE_5__Polygon__["a" /* Polygon */]());
					}
	
					if(tokens.length == 4) {
						parseTriangleFace(tokens);
					}
					
					if(tokens.length == 5) {
						parseQuadFace(tokens);
					}
				}
				
			}
		} catch(error) {
			console.log( err.stack );
		}
		
		if(_normals.length == 0 && _generateNormals) {
			for(let i = 0; i < _objects.length; i++) {
				let polygonGroups = _object[i].getPolygonGroups();
				for(let j = 0; j < polygonGroups.length; j++) {
					let keys = polygonGroups[j].keys();
					for(let k = 0; k < keys.length; k++) {
						let key = keys[k];
						if(frontface == Frontface.CW) {
							util.generateNormalsCW(polygonGroups[j].getSmoothingGroups().get(key));
						} else {
							util.generateNormalsCCW(polygonGroups[j].getSmoothingGroups().get(key));
						}
					}
				}
			}
		}
			
		var meshes = [];
		
		for(let i = 0; i < _objects.length; i++) {
			let polygonGroups = _objects[i].getPolygonGroups();
			for(let j = 0; j < polygonGroups.length; j++) {
				let polygons = polygonGroups[j].getPolygons();
				for(let k = 0; k < polygons.length; k++) {
					generatePolygon(polygonGroups[j].getSmoothingGroups(), polygons[k]);
					let vao = convert(polygons[k]);
					meshes.push(new __WEBPACK_IMPORTED_MODULE_1__primitive_Mesh__["a" /* Mesh */]("mesh" + k, vao));
				}
			}
		}
		
		return meshes;
	}
	
	var parseTriangleFace = function(tokens) {
		// vertex//normal
		if(tokens[1].includes("//")) {
			let vertexIndices = [
				+tokens[1].split("//")[0] - 1,
				+tokens[2].split("//")[0] - 1,
				+tokens[3].split("//")[0] - 1
			];
			
			let normalIndices = [
				+tokens[1].split("//")[1] - 1,
				+tokens[2].split("//")[1] - 1,
				+tokens[3].split("//")[1] - 1
			];
			
			let v0 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[0]].getPosition());
			let v1 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[1]].getPosition());
			let v2 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[2]].getPosition());
			v0.setNormal(_normals[normalIndices[0]]);
			v1.setNormal(_normals[normalIndices[1]]);
			v2.setNormal(_normals[normalIndices[2]]);
			
			if(_genTangents) {
				generateTangents(v0, v1, v2);
			}
			
			addToSmoothingGroup(
				_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
				v0, v1, v2
			);
			
		} else if(tokens[1].includes("/")) {				// vertex/textureCoord/normal
			
			if(tokens[1].split("/").length == 3) {
				let vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1
				];
				
				let texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1
				];
				
				let normalIndices = [
					+tokens[1].split("/")[2] - 1,
					+tokens[2].split("/")[2] - 1,
					+tokens[3].split("/")[2] - 1
				];
				
				let v0 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[0]].getPosition());
				let v1 =  new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[1]].getPosition());
				let v2 =  new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[2]].getPosition());
				v0.setNormal(_normals[normalIndices[0]]);
				v1.setNormal(_normals[normalIndices[1]]);
				v2.setNormal(_normals[normalIndices[2]]);
				v0.setTextureCoord(_texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(_texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(_texCoords[texCoordIndices[2]]);
				
				if(_genTangents) {
					generateTangents(v0, v1, v2);
				}
				
				addToSmoothingGroup(
					_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
					v0, v1, v2
				);
			
			} else {									// vertex/textureCoord
				let vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1
				];
				
				let texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1
				];
				
				let v0 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[0]].getPosition());
				let v1 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[1]].getPosition());
				let v2 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[2]].getPosition());
				v0.setTextureCoord(_texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(_texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(_texCoords[texCoordIndices[2]]);
				
				if(_genTangents) {
					generateTangents(v0, v1, v2);
				}				
				
				addToSmoothingGroup(
					_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
					v0, v1, v2
				);
			}		
		} else {									// vertex
			
			let vertexIndices = [
				+tokens[1] - 1,
				+tokens[2] - 1,
				+tokens[3] - 1
			];
			
			let v0 = _vertices[vertexIndices[0]];
			let v1 = _vertices[vertexIndices[1]];
			let v2 = _vertices[vertexIndices[2]];
			
			if(_genTangents) {
				generateTangents(v0, v1, v2);
			}
			
			addToSmoothingGroup(
				_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
				v0, v1, v2
			);
		}
	}
	
	var parseQuadFace = function(tokens) {
		// vertex//normal
		if(tokens[1].includes("//")) {
			
			let vertexIndices = [
				+tokens[1].split("//")[0] - 1,
				+tokens[2].split("//")[0] - 1,
				+tokens[3].split("//")[0] - 1,
				+tokens[4].split("//")[0] - 1
			];
			
			let normalIndices = [
				+tokens[1].split("//")[1] - 1,
				+tokens[2].split("//")[1] - 1,
				+tokens[3].split("//")[1] - 1,
				+tokens[4].split("//")[1] - 1
			];
			
			let v0 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[0]].getPosition());
			let v1 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[1]].getPosition());
			let v2 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[2]].getPosition());
			let v3 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[3]].getPosition());
			v0.setNormal(_normals[normalIndices[0]]);
			v1.setNormal(_normals[normalIndices[1]]);
			v2.setNormal(_normals[normalIndices[2]]);
			v3.setNormal(_normals[normalIndices[3]]);
			
			if(_genTangents) {
				generateTangents(v0, v1, v2);
				generateTangents(v2, v1, v3);
			}			
			addToSmoothingGroup(
				_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
				v0, v1, v2, v3
			);
		}
		
		else if(tokens[1].includes("/")) {	
		
			// vertex/textureCoord/normal
			if(tokens[1].split("/").length == 3) {

				let vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1,
					+tokens[4].split("/")[0] - 1
				];
				
				let texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1,
					+tokens[4].split("/")[1] - 1
				];
				
				let normalIndices = [
					+tokens[1].split("/")[2] - 1,
					+tokens[2].split("/")[2] - 1,
					+tokens[3].split("/")[2] - 1,
					+tokens[4].split("/")[2] - 1
				];
				
				let v0 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[0]].getPosition());
				let v1 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[1]].getPosition());
				let v2 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[2]].getPosition());
				let v3 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[3]].getPosition());
				v0.setNormal(_normals[normalIndices[0]]);
				v1.setNormal(_normals[normalIndices[1]]);
				v2.setNormal(_normals[normalIndices[2]]);
				v3.setNormal(_normals[normalIndices[3]]);			
				v0.setTextureCoord(_texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(_texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(_texCoords[texCoordIndices[2]]);
				v3.setTextureCoord(_texCoords[texCoordIndices[3]]);
				
				if(_genTangents) {
					generateTangents(v0, v1, v2);
					generateTangents(v2, v1, v3);
				}
				
				addToSmoothingGroup(
					_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
					v0, v1, v2, v3
				);
			}
			
			// vertex/textureCoord
			else {

				let vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1,
					+tokens[4].split("/")[0] - 1
				];
				
				let texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1,
					+tokens[4].split("/")[1] - 1
				];
				
				let v0 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[0]].getPosition());
				let v1 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[1]].getPosition());
				let v2 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[2]].getPosition());
				let v3 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[3]].getPosition());
				v0.setTextureCoord(_texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(_texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(_texCoords[texCoordIndices[2]]);
				v3.setTextureCoord(_texCoords[texCoordIndices[3]]);
				
				if(_genTangents) {
					generateTangents(v0, v1, v2);
					generateTangents(v2, v1, v3);
				}
				
				addToSmoothingGroup(
					_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
					v0, v1, v2, v3
				);
			}		
		}
	
		// vertex
		else {
			
			let vertexIndices = [
				+tokens[1] - 1,
				+tokens[2] - 1,
				+tokens[3] - 1,
				+tokens[4] - 1
			];
			
			let v0 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[0]].getPosition());
			let v1 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[1]].getPosition());
			let v2 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[2]].getPosition());
			let v3 = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */](_vertices[vertexIndices[3]].getPosition());
			if(_genTangents) {
				generateTangents(v0, v1, v2);
				generateTangents(v2, v1, v3);
			}
			
			addToSmoothingGroup(
				_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
				v0, v1, v2, v3
			);
		}
	}
	
	var addToSmoothingGroup = function(smoothingGroup, v0, v1, v2, v3) {
		let index0 = processVertex(smoothingGroup, v0);
		let index1 = processVertex(smoothingGroup, v1);
		let index2 = processVertex(smoothingGroup, v2);
		
		let face0 = new __WEBPACK_IMPORTED_MODULE_8__Face__["a" /* Face */]();
		face0.getIndices()[0] = index0;
		face0.getIndices()[1] = index1;
		face0.getIndices()[2] = index2;
		face0.setMaterial(_materialName);
		smoothingGroup.getFaces().push(face0);
		// if v3 defined - add new face
		if(v3) {
			let index3 = processVertex(smoothingGroup, v3);
			
			let face1 = new __WEBPACK_IMPORTED_MODULE_8__Face__["a" /* Face */]();
			face1.getIndices()[0] = index0;
			face1.getIndices()[1] = index2;
			face1.getIndices()[2] = index3;
			face1.setMaterial(_materialName);
			
			smoothingGroup.getFaces().push(face1);
		}

	}
	
	let processVertex = function(smoothingGroup, previousVertex) {
		if(smoothingGroup.getVertices().includes(previousVertex)) {
			let index = smoothingGroup.getVertices().indexOf(previousVertex);
			let nextVertex = smoothingGroup.getVertices()[index];
			if(!hasSameNormalAndTexture(previousVertex, nextVertex)) {		
				if(nextVertex.getDublicateVertex() != null) {
					return processVertex(smoothingGroup, nextVertex.getDublicateVertex());
				} else {
					let newVertex = new __WEBPACK_IMPORTED_MODULE_4__Vertex__["a" /* Vertex */]();
					newVertex.setPos(previousVertex.getPosition());
					newVertex.setNormal(previousVertex.getNormal());
					newVertex.setTextureCoord(previousVertex.getTextureCoord());
					previousVertex.setDubilcateVertex(newVertex);
					smoothingGroup.getVertices().push(newVertex);
					return smoothingGroup.getVertices().indexOf(newVertex);
				}
			}
		}
		smoothingGroup.getVertices().push(previousVertex);
		return smoothingGroup.getVertices().indexOf(previousVertex);
	}
	
	var hasSameNormalAndTexture = function(v1, v2) {
		return (v1.getNormal().equals(v2.getNormal()) && v1.getTextureCoord().equals(v2.getTextureCoord()));
	}
	
	var generatePolygon = function(smoothingGroups, polygon) {
		for(let key of smoothingGroups.keys()) {
			for(let face of smoothingGroups.get(key).getFaces()) {
				if(face.getMaterial() == polygon.getMaterial()) {
					if(!polygon.getVertices().includes(smoothingGroups.get(key).getVertices()[face.getIndices()[0]])) {
						polygon.getVertices().push(smoothingGroups.get(key).getVertices()[face.getIndices()[0]]);						
					}
					
					if(!polygon.getVertices().includes(smoothingGroups.get(key).getVertices()[face.getIndices()[1]])) {
						polygon.getVertices().push(smoothingGroups.get(key).getVertices()[face.getIndices()[1]]);
					}
					
					if(!polygon.getVertices().includes(smoothingGroups.get(key).getVertices()[face.getIndices()[2]])) {
						polygon.getVertices().push(smoothingGroups.get(key).getVertices()[face.getIndices()[2]]);
					}
					
					polygon.getIndices().push(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices()[face.getIndices()[0]]));
					polygon.getIndices().push(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices()[face.getIndices()[1]]));
					polygon.getIndices().push(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices()[face.getIndices()[2]]));
				}
			}
		}
	}
	
	var generateTangents = function(v0, v1, v2) {
		let delatPos1 = __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__["a" /* Vector3f */].sub(v1.getPosition(), v0.getPosition());
		let delatPos2 = __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__["a" /* Vector3f */].sub(v2.getPosition(), v0.getPosition());
		let uv0 = v0.getTextureCoord();
		let uv1 = v1.getTextureCoord();
		let uv2 = v2.getTextureCoord();
		let deltaUv1 = __WEBPACK_IMPORTED_MODULE_2__math_vector_Vector2f__["a" /* Vector2f */].sub(uv1, uv0);
		let deltaUv2 = __WEBPACK_IMPORTED_MODULE_2__math_vector_Vector2f__["a" /* Vector2f */].sub(uv2, uv0);

		let r = 1.0 / (deltaUv1.x * deltaUv2.y - deltaUv1.y * deltaUv2.x);
		delatPos1.scale(deltaUv2.y);
		delatPos2.scale(deltaUv1.y);
		let tangent = __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__["a" /* Vector3f */].sub(delatPos1, delatPos2);
		tangent.scale(r);
		v0.setTangent(tangent);
		v1.setTangent(tangent);
		v2.setTangent(tangent);
	}
	
	var convert = function(polygon) {
		let indices = polygon.getIndices().slice();
		let vertices = polygon.getVertices().slice();
		let positions = [];
		let normals = [];
		let textureCoords = [];
		
		for(let i = 0; i < vertices.length; i++) {
			positions.push(vertices[i].getPosition().x);
			positions.push(vertices[i].getPosition().y);
			positions.push(vertices[i].getPosition().z);
		}
		
		for(let i = 0; i < vertices.length; i++) {
			normals.push(vertices[i].getNormal().x);
			normals.push(vertices[i].getNormal().y);
			normals.push(vertices[i].getNormal().z);
		}
		
		for(let i = 0; i < vertices.length; i++) {
			textureCoords.push(vertices[i].getTextureCoord().x);
			textureCoords.push(1 - vertices[i].getTextureCoord().y);
		}
		
		let tangents = null;
		
		let vao = null;
		
		if(_genTangents) {
			tangents = vertices.forEach((vertex, index, arr) => {
				arr.splice(index, 1, vertex.getTangent().x, vertex.getTangent().y, vertex.getTangent().z);
			});
			
			vao = __WEBPACK_IMPORTED_MODULE_0__core_Loop__["b" /* buffers */].createVAO(indices, positions, textureCoords, normals, tangents);
		} else {
			vao = __WEBPACK_IMPORTED_MODULE_0__core_Loop__["b" /* buffers */].createVAO(indices, positions, textureCoords, normals);	
		}
		
		return vao;
	}
	
	this.clean = function() {
		_vertices.length = 0;
		_normals.length = 0;
		_texCoords.length = 0;
	}
}



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vertex; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector2f__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector_Vector3f__ = __webpack_require__(0);



function Vertex(position, texture) {	
	var _position = position;
	var _normal = new __WEBPACK_IMPORTED_MODULE_1__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0);
	var _textureCoord = texture || new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector2f__["a" /* Vector2f */](0, 0);
	var _tangent = null;
	var _bitangent = null;
	var _dublicateVertex = null;

	this.getPosition = function() {
		return _position;
	}

	this.setPosition = function(position) {
		_position = position;
	}

	this.getTextureCoord = function() {
		return _textureCoord;
	}

	this.setTextureCoord = function(textureCoord) {
		_textureCoord = textureCoord;
	}


	this.getNormal = function() {
		return _normal;
	}

	this.setNormal = function(normal) {
		_normal = normal;
	}
	
	this.setDubilcateVertex = function(vertex) {
		_dublicateVertex = vertex;
	}
	
	this.getDublicateVertex = function() {
		return _dublicateVertex;
	}

	this.getTangent = function() {
		return _tangent;
	}

	this.setTangent = function(tangent) {
		_tangent = tangent;
	}

	this.getBitangent = function() {
		return _bitangent;
	}

	this.setBitangent = function(bitangent) {
		_bitangent = bitangent;
	}
	
}



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Polygon; });
function Polygon() {
	
	var _material;
	var _vertices = [];
	var _indices = [];
	
	this.getMaterial = function() {
		return _material;
	}
	
	this.setMaterial = function(material) {
		_material = material;
	}
	
	this.getVertices = function() {
		return _vertices;
	}
	
	this.setVertices = function(vertices) {
		_vertices = vertices.slice();
	}
	
	this.getIndices = function() {
		return _indices;
	}
	
	this.setIndices = function(indices) {
		_indices = indices;
	}
}



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolygonGroup; });
function PolygonGroup() {
	var _polygons = [];
	var _smoothingGroups = new Map();
	var _name = "";
	
	this.getPolygons = function() {
		return _polygons;
	}
	
	this.setPolygons = function(polygons) {
		_polygons = polygons;
	}
	
	this.getName = function() {
		return _name;
	}
	
	this.setName = function(name) {
		_name = name;
	}
	
	this.getSmoothingGroups = function() {
		return _smoothingGroups;
	}
	
	this.setSmoothingGroups = function(smoothingGroups) {
		_smoothingGroups = smoothingGroups;
	}
}



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothingGroup; });
function SmoothingGroup() {
	var _faces = [];
	var _vertices = [];
	
	this.getVertices = function() {
		return _vertices;
	}
	
	this.setVertices = function() {
		_vertices = vertices;
	}
	
	this.getFaces = function() {
		return _faces;
	}
	
	this.setFaces = function() {
		_faces = faces;
	}
}



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Face; });
function Face() {

	var _indices = [];
	var _material;

	this.getIndices = function() {
		return _indices;
	}

	this.setIndices = function(indices) {
		_indices = indices;
	}

	this.getMaterial = function() {
		return _material;
	}

	this.setMaterial = function(material) {
		_material = material;
	}
}



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoaderUtil__ = __webpack_require__(9);


function MeshObject() {
	var _polygonGroups = [];
	var _name = "";
	
	// bind properties
	_polygonGroups.peekLast = new __WEBPACK_IMPORTED_MODULE_0__LoaderUtil__["a" /* LoaderUtil */]().peekLast.bind(_polygonGroups);
	
	this.getPolygonGroups = function() {
		return _polygonGroups;
	}
	
	this.setPolygonGroups = function(polygonGroups) {
		_polygonGroups = polygonGroups;
	}
	
	this.getName = function() {
		return _name;
	}
	
	this.setName = function(name) {
		_name = name;
	}
}



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cube.obj": 33,
	"./spartan.obj": 34
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 32;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| # Blender v2.77 (sub 0) OBJ File: ''\r\n| # www.blender.org\r\n| mtllib cube.mtl\r");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| # 3ds Max Wavefront OBJ Exporter v0.94b - (c)2007 guruware\r\n| # File Created: 15.01.2017 14:00:40\r\n| \r");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VAOManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_VAO__ = __webpack_require__(7);


function VAOManager() {
	// initialization
	var _vaos = [];
	var _vbos = [];
	
	// methods
	this.createVAO = function(indices, vertices, textures, normals) {
		var vao = new __WEBPACK_IMPORTED_MODULE_0__primitive_VAO__["a" /* VAO */]();
		vao.bind();
		vao.createIndexBuffer(indices);
		vao.createAttribute(0, 3, vertices);
		if(textures) {
			vao.createAttribute(1, 2, textures);
		}
		
		if(normals) {
			vao.createAttribute(2, 3, normals);
		}
		vao.unbind();
		_vaos.push(vao);
		return vao;
	} 
	
	
	this.clean = function() {
		if(_vaos.length) {
			_vaos = [];
		}
		if(_vbos.length) {
			_vbos = [];
		}
	}
}



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inputs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Mouse__ = __webpack_require__(37);
 

function Inputs(scene) {
	var _scene = scene;
	var _camera = scene.getCamera();
	var _mouse = new __WEBPACK_IMPORTED_MODULE_0__Mouse__["a" /* Mouse */](400, 300);
	
	// camera move
	const moveSpeed = 0.1;
	
	var move = function(event) {
		if(event.keyCode == 65) { // a
			_camera.addSpeed(0, -moveSpeed);
		}
		
		if(event.keyCode == 68) { // d
			_camera.addSpeed(0, moveSpeed)
		}
		
		if(event.keyCode == 87) { // w
			_camera.addSpeed(-moveSpeed);
		}
		
		if(event.keyCode == 83) { // s
			_camera.addSpeed(moveSpeed);
		}
		
		if(event.keyCode == 32) { // space
			_camera.increasePosition(0, 5, 0);
		}
		
		if(event.keyCode == 67) { // c
			_camera.increasePosition(0, -5, 0);
		}
	};
	
	var activateCamRotation = function() {
		_camera.setCanRotate(true);
	};
	
	var deactivateCamRotation = function() {
		_camera.setCanRotate(false);
	}
	
	document.addEventListener("keydown", move);
	document.addEventListener("mousedown", activateCamRotation);
	document.addEventListener("mouseup", deactivateCamRotation);
	
	this.update = function() {
		_camera.addTurnSpeed(_mouse.getDX(), _mouse.getDY());
		_mouse.update();
	}
	
	this.getMouse = function() {
		return _mouse;
	}
}



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mouse; });
function Mouse(widthCenter, heightCenter) {
	
	var _x = widthCenter  || 0;
	var _y = heightCenter || 0;
	var _dX = 0;
	var _dY = 0;
	
	this.update = function() {
		_dX = 0;
		_dY = 0;
	}
	
	var moveUpdate = function(event) {
		_dX = _x - event.clientX;
		_dY = _y - event.clientY;
		_x = event.clientX;
		_y = event.clientY;
	}
	
	this.getDX = function() {
		return _dX;
	}
	
	this.getDY = function() {
		return _dY;
	}
	
	document.addEventListener("mousemove", moveUpdate);
	
};



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initExtentions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);


function initExtentions() {
	applyExtention("OES_vertex_array_object"); // VAO
};

function applyExtention(name) {
	  var ext = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].getExtension(name);
	  if (!ext) {
	    return false;
	  }
	  var suffix = name.split("_")[0];
	  var prefix = suffix + '_';
	  var suffixRE = new RegExp(suffix + '$');
	  var prefixRE = new RegExp('^' + prefix);
	  for (var key in ext) {
	    var val = ext[key];
	    if(typeof(val) === 'function') {
	    	// delete suffix and attach new functions for gl context
	    	var unsuffixedKey = key.replace(suffixRE, '');
	    	__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */][unsuffixedKey] = ext[key].bind(ext);
	    }
	  }
	  return true;
};



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initTools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Maths__ = __webpack_require__(4);


function initTools() {
	// add new math functions
	var maths = new __WEBPACK_IMPORTED_MODULE_0__math_Maths__["a" /* Maths */]();
	for(var key in maths) {
		Math[key] = maths[key].bind(maths); 
	}
}



/***/ })
/******/ ]);