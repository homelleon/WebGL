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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_core_Loop__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_core_Extentions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_core_Tools__ = __webpack_require__(24);




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
	catch(e) {}
	
	if(!gl) {
		var err = "WebGL is not supported by your browser";
		console.log(err);
		canvas.innerHTML = err;
	}
	
	if(gl) {
		gl.viewportHeight = canvas.height;
		gl.viewportWidth = canvas.width;
		Object(__WEBPACK_IMPORTED_MODULE_1__engine_core_Extentions__["a" /* initExtentions */])();
		Object(__WEBPACK_IMPORTED_MODULE_2__engine_core_Tools__["a" /* initTools */])();
	// start engine	
		var loop = new __WEBPACK_IMPORTED_MODULE_0__engine_core_Loop__["a" /* Loop */]();
		for(var i = 0; i < 100; i++) {
			loop.update();
		}
		loop.stop();
	}
})();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector3f; });
function Vector3f(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
} 



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
		var determinant = src.determinant();

		if (!determinant) {
			/*
			 * m00 m01 m02 m03
			 * m10 m11 m12 m13
			 * m20 m21 m22 m23
			 * m30 m31 m32 m33
			 */
			if (!dest)
				dest = new Matrix4f();
			var determinant_inv = 1 / determinant;

			// first row
			var t00 =  determinant3x3(src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t01 = -determinant3x3(src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t02 =  determinant3x3(src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t03 = -determinant3x3(src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// second row
			var t10 = -determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t11 =  determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t12 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t13 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// third row
			var t20 =  determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t21 = -determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t22 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t23 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// fourth row
			var t30 = -determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3]);
			var t31 =  determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3]);
			var t32 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3]);
			var t33 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2]);

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
	
	this.invert = function(matrix) {
		return this.invert(matrix, null);
	}
	
	this.invert = function() {
		return this.invert(this, null);
	}
	
	this.quals = function(m) {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maths; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix_Matrix4f__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector_Vector3f__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(0);




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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return buffers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer_MainRenderer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_Scene__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_VAOManager__ = __webpack_require__(22);




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
	// methods
	this.update = function() {
		_renderer.render(_scene);
	}
	
	this.stop = function() {
		_renderer.clean();
		buffers.clean();
	}
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_matrix_Matrix4f__ = __webpack_require__(2);



function Camera(name) {
	var _name = name;
	var _position = new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0); 
	var _pitch = 20;
	var _yaw = 0;
	var _roll = 0;
	
	this.getViewMatrix = function() {		
		return Math.createViewMatrix(this);
	}
	
	this.increasePosition = function(x, y, z) {
		_position.x += x;
		_position.y += y;
		_position.z += z;		
	}
	
	this.increaseRotation = function(x, y, z) {
		_roll += x;
		_yaw += y;
		_pitch += z;
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
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VAO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_VBO__ = __webpack_require__(21);



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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_math_testMaths__ = __webpack_require__(8);


new __WEBPACK_IMPORTED_MODULE_0__engine_math_testMaths__["a" /* testMath */]();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testMath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_engine_math_Maths__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_engine_math_matrix_Matrix4f__ = __webpack_require__(2);



function testMath() {	
	describe('Maths class test', () => {
		// initialize test variables
		const PI = 3.14;
		var maths = new __WEBPACK_IMPORTED_MODULE_0__source_engine_math_Maths__["a" /* Maths */](); // object to test
		describe('Maths \'toRadiants\' method test', () => {
			// arguments to test
			var angleArray = [
				0, 10, 45, 90, 180, 270, 360, - 10
			];
			
			for(var i = 0; i < angleArray.length; i++) {
				// initialize suites variables
				var angle = angleArray[i];
				var result = angleArray[i] / 180 * PI;
				it('should return ' + result + ' for ' + angle + ' degrees angle', () => {
					expect(maths.toRadians(angle)).toBe(result);
				})
			}
		})
		describe('Maths \'createProjectionMatrix\' method test', () => {
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
			
			var gl = jest.fn();
			gl.viewportWidth = width;
			gl.viewportHeight = height;
			
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityRenderer__ = __webpack_require__(10);



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
	
	// methods
	/**
	 * Renders scene objects.
	 * @param scene - engine scene
	 */
	this.render = function(scene) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].clearColor(1.0, 0.0, 0.0, 0.5);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* gl */].COLOR_BUFFER_BIT);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_entityShader_EntityShader__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_matrix_Matrix4f__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__ = __webpack_require__(1);
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
		var vao = scene.getEntities().get(0).getModels()[0].getMesh().getVAO();
		vao.bindAttrib([ 0, 1, 2 ]);
		_shader.loadViewMatrix(scene.getCamera().getViewMatrix());
		_shader.loadDiffuseColor(new __WEBPACK_IMPORTED_MODULE_3__math_vector_Vector3f__["a" /* Vector3f */]( 1, 0, 1 ));
		__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* gl */].drawElements(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* gl */].LINES, vao.getIndexBuffer().getSize(), __WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* gl */].UNSIGNED_SHORT, 0);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityShader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__ = __webpack_require__(12);


function EntityShader() {
	// pre-initialization
	this.__proto__ = new __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__["a" /* ShaderProgram */]();
	
	//----programs
	const VERTEX_FILE = __webpack_require__(13);
	const FRAGMENT_FILE = __webpack_require__(14);
	//----attributes
	const ATTRIBUTE_POSITION = 'in_position';
	const ATTRIBUTE_TEXTURE_COORDS = 'in_textureCoords';
	const ATTRIBUTE_NORMAL = 'in_normals';
	//----uniforms
	// matrices
	const UNIFORM_RPOJECTION_MATRIX = 'projectionMatrix';
	const UNIFORM_VIEW_MATRIX = 'viewMatrix';
	const UNIFORM_MODEL_MATRIX = 'modelMatrix';
	// color
	const UNIFORM_DIFFUSE_COLOR = 'diffuseColor';
	
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
		// color
		this.addUniform(UNIFORM_DIFFUSE_COLOR);
	}
	
	this.loadProjectionMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_RPOJECTION_MATRIX, matrix);
	}
	
	this.loadViewMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_VIEW_MATRIX, matrix);
	}
	
	this.loadModelMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_MODEL_MATRIX, matrix);
	}
	
	this.loadDiffuseColor = function(color) {
		this.load3DVector(UNIFORM_DIFFUSE_COLOR, color);
	}
	
	// initialization
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compileShaders();	
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderProgram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


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
/* 13 */
/***/ (function(module, exports) {

module.exports = "// VETEX SHADER - Entity\r\nattribute vec3 in_position;\r\nattribute vec2 in_textureCoords;\r\nattribute vec3 in_normals;\r\n\r\nuniform mat4 modelMatrix;\r\nuniform mat4 viewMatrix;\r\nuniform mat4 projectionMatrix;\r\n\r\nvoid main(void) {\r\n\t\r\n\tmat4 mvpMatrix = modelMatrix * viewMatrix * projectionMatrix;\r\n\t\r\n\tgl_Position = mvpMatrix * vec4(in_position, 1.0);\r\n}"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "// FRAGMENT SHADER - Entity\r\n\r\nvoid main(void) {\r\n\t\r\n\tgl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\r\n\t\r\n}"

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_camera_Camera__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_ObjectManager__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__object_entity_Entity__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__primitive_Model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__primitive_Mesh__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__primitive_Material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_vector_Vector3f__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__primitive_VAO__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_Loop__ = __webpack_require__(4);










/**
 * Engine scene controll function.
 * 
 */
function Scene() {
	var _camera = new __WEBPACK_IMPORTED_MODULE_0__object_camera_Camera__["a" /* Camera */]("MyCamera");	
	var _entities = new __WEBPACK_IMPORTED_MODULE_1__manager_ObjectManager__["a" /* ObjectManager */]();
	
	// entity creation	
	var vertices = [
        // face
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,
         0.5, 0.5, 0.5,
         0.5, -0.5, 0.5,
        // back 
        -0.5, -0.5, -0.5,
        -0.5, 0.5, -0.5,
         0.5, 0.5, -0.5,
         0.5, -0.5, -0.5
	];
	
	var textureCoords = [
        // face
         0.0, 0.0,
         0.5, 0.5,
         0.5, 0.5,
         0.5, -0.5,
        // back 
        -0.5, -0.5,
        -0.5, 0.5,
         0.5, 0.5,
         0.5, -0.5
	];
	
	var normals = [
        // face
         0, 1, 0,
         0, 1, 0,
         0, 1, 0,
         0, 1, 0,
        // back 
         0, -1, 0,
         0, -1, 0,
         0, -1, 0,
         0, -1, 0
	];
	
	var indices = [
		0, 1, 1, 2, 
		2, 3, 3, 0, 
		0, 4, 4, 5, 
		5, 6, 6, 7, 
		7, 4, 1, 5, 
		2, 6, 3, 7
	];
	
	var vao = __WEBPACK_IMPORTED_MODULE_8__core_Loop__["b" /* buffers */].createVAO(indices, vertices, textureCoords, normals);
		
	var mesh = new __WEBPACK_IMPORTED_MODULE_4__primitive_Mesh__["a" /* Mesh */]("entityMesh", vao);
	var material = new __WEBPACK_IMPORTED_MODULE_5__primitive_Material__["a" /* Material */]("entityMaterial");
	var model = new __WEBPACK_IMPORTED_MODULE_3__primitive_Model__["a" /* Model */]("entityModel", mesh, material);	
	var entity = new __WEBPACK_IMPORTED_MODULE_2__object_entity_Entity__["a" /* Entity */]("entity", model, new __WEBPACK_IMPORTED_MODULE_6__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0));
	
	_entities.add(entity);
	
	// methods
	this.getCamera = function() {
		return _camera;
	}
	
	this.getEntities = function() {
		return _entities;
	}
}



/***/ }),
/* 16 */
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
}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__ = __webpack_require__(1);


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
/* 18 */
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
function Model(name, mesh, material) {
	var _name = name;
	var _mesh = mesh;
	var _material = material;
	
	this.getMesh = function() {
		return _mesh;
	}
	
	this.getMaterial = function() {
		return _material;
	}
}



/***/ }),
/* 19 */
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
/* 20 */
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
	var _reflecriveFactor = 0;
	var _refractiveFactor = 0;
	var _refractiveIndex = 0;
	var _emission = 0;
	
	var _useFakeLighting = false;
}



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VBO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VAOManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitive_VAO__ = __webpack_require__(6);


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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initExtentions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initTools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Maths__ = __webpack_require__(3);


function initTools() {
	// add new math functions
	var maths = new __WEBPACK_IMPORTED_MODULE_0__math_Maths__["a" /* Maths */]();
	for(var key in maths) {
		Math[key] = maths[key].bind(maths); 
	}
}



/***/ })
/******/ ]);