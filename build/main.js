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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_core_Loop__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_core_Extentions__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_core_Tools__ = __webpack_require__(14);




var gl;

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
		gl.viewportHeight = canvas.height;
		gl.viewportWidth = canvas.width;
		Object(__WEBPACK_IMPORTED_MODULE_1__engine_core_Extentions__["a" /* initExtentions */])();
		Object(__WEBPACK_IMPORTED_MODULE_2__engine_core_Tools__["a" /* initTools */])();
		// start engine	
		var loop = new __WEBPACK_IMPORTED_MODULE_0__engine_core_Loop__["a" /* Loop */]();
		for (var i = 0; i < 100; i++) {
			loop.update();
		}
		loop.stop();
	}
}();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrix4f; });
function Matrix4f() {
	this.m = [];
	this.setIdentity;

	this.zero = function zero() {
		this.m[0] = [];
		this.m[1] = [];
		this.m[2] = [];
		this.m[3] = [];
		this.m[0][0] = 0;this.m[0][1] = 0;this.m[0][2] = 0;this.m[0][3] = 0;
		this.m[1][0] = 0;this.m[1][1] = 0;this.m[1][2] = 0;this.m[1][3] = 0;
		this.m[2][0] = 0;this.m[2][1] = 0;this.m[2][2] = 0;this.m[2][3] = 0;
		this.m[3][0] = 0;this.m[3][1] = 0;this.m[3][2] = 0;this.m[3][3] = 0;

		return this;
	};

	this.setIdentity = function setIdentity() {
		this.m[0] = [];
		this.m[1] = [];
		this.m[2] = [];
		this.m[3] = [];
		this.m[0][0] = 1;this.m[0][1] = 0;this.m[0][2] = 0;this.m[0][3] = 0;
		this.m[1][0] = 0;this.m[1][1] = 1;this.m[1][2] = 0;this.m[1][3] = 0;
		this.m[2][0] = 0;this.m[2][1] = 0;this.m[2][2] = 1;this.m[2][3] = 0;
		this.m[3][0] = 0;this.m[3][1] = 0;this.m[3][2] = 0;this.m[3][3] = 1;

		return this;
	};

	this.orthographic2D = function Orthographic2D(width, height) {
		this.m[0][0] = 2 / width;this.m[0][1] = 0;this.m[0][2] = 0;this.m[0][3] = -1;
		this.m[1][0] = 0;this.m[1][1] = 2 / height;this.m[1][2] = 0;this.m[1][3] = -1;
		this.m[2][0] = 0;this.m[2][1] = 0;this.m[2][2] = 1;this.m[2][3] = 0;
		this.m[3][0] = 0;this.m[3][1] = 0;this.m[3][2] = 0;this.m[3][3] = 1;

		return this;
	};

	/**
  * Translates current matrix by argument of Vector3f translation object.
  */
	this.translate3f = function translate3f(translation) {
		this.m[3][0] += this.m[0][0] * translation.x + this.m[1][0] * translation.y + this.m[2][0] * translation.z;
		this.m[3][1] += this.m[0][1] * translation.x + this.m[1][1] * translation.y + this.m[2][1] * translation.z;
		this.m[3][2] += this.m[0][2] * translation.x + this.m[1][2] * translation.y + this.m[2][2] * translation.z;
		this.m[3][3] += this.m[0][3] * translation.x + this.m[1][3] * translation.y + this.m[2][3] * translation.z;

		return this;
	};

	/**
  * Translates current matrix by argument of Vector2f translation object.
  */
	this.translate2f = function translate2f(translation) {
		this.m[3][0] += this.m[0][0] * translation.x + this.m[1][0] * translation.y;
		this.m[3][1] += this.m[0][1] * translation.x + this.m[1][1] * translation.y;
		this.m[3][2] += this.m[0][2] * translation.x + this.m[1][2] * translation.y;
		this.m[3][3] += this.m[0][3] * translation.x + this.m[1][3] * translation.y;

		return this;
	};

	/**
  * Creates tranformation plane from current matrix by argument of Vector4f plane object.
  */
	this.transform = function transform(plane) {
		var x = this.m[0][0] * plane.x + this.m[1][0] * plane.y + this.m[2][0] * plane.z + this.m[3][0] * plane.w;
		var y = this.m[0][1] * plane.x + this.m[1][1] * plane.y + this.m[2][1] * plane.z + this.m[3][1] * plane.w;
		var z = this.m[0][2] * plane.x + this.m[1][2] * plane.y + this.m[2][2] * plane.z + this.m[3][2] * plane.w;
		var w = this.m[0][3] * plane.x + this.m[1][3] * plane.y + this.m[2][3] * plane.z + this.m[3][3] * plane.w;

		return new Vector4f(x, y, z, w);
	};

	//TODO: need to be static
	this.transform = function transform(matrix, plane) {
		var x = matrix.m[0][0] * plane.x + matrix.m[1][0] * plane.y + matrix.m[2][0] * plane.z + matrix.m[3][0] * plane.w;
		var y = matrix.m[0][1] * plane.x + matrix.m[1][1] * plane.y + matrix.m[2][1] * plane.z + matrix.m[3][1] * plane.w;
		var z = matrix.m[0][2] * plane.x + matrix.m[1][2] * plane.y + matrix.m[2][2] * plane.z + matrix.m[3][2] * plane.w;
		var w = matrix.m[0][3] * plane.x + matrix.m[1][3] * plane.y + matrix.m[2][3] * plane.z + matrix.m[3][3] * plane.w;

		return new Vector4f(x, y, z, w);
	};

	/**
  * Rotates by argument of vector3f rotation object.
  */
	this.rotate = function rotate(rotation) {
		var rx = new Matrix4f();
		var ry = new Matrix4f();
		var rz = new Matrix4f();

		//TODO: toRadiants - is there such a function in JS?
		var x = Math.toRadians(rotation.getX());
		var y = Math.toRadians(rotation.getY());
		var z = Math.toRadians(rotation.getZ());

		rz.m[0][0] = Math.cos(z);rz.m[0][1] = -Math.sin(z);rz.m[0][2] = 0;rz.m[0][3] = 0;
		rz.m[1][0] = Math.sin(z);rz.m[1][1] = Math.cos(z);rz.m[1][2] = 0;rz.m[1][3] = 0;
		rz.m[2][0] = 0;rz.m[2][1] = 0;rz.m[2][2] = 1;rz.m[2][3] = 0;
		rz.m[3][0] = 0;rz.m[3][1] = 0;rz.m[3][2] = 0;rz.m[3][3] = 1;

		rx.m[0][0] = 1;rx.m[0][1] = 0;rx.m[0][2] = 0;rx.m[0][3] = 0;
		rx.m[1][0] = 0;rx.m[1][1] = Math.cos(x);rx.m[1][2] = -Math.sin(x);rx.m[1][3] = 0;
		rx.m[2][0] = 0;rx.m[2][1] = Math.sin(x);rx.m[2][2] = Math.cos(x);rx.m[2][3] = 0;
		rx.m[3][0] = 0;rx.m[3][1] = 0;rx.m[3][2] = 0;rx.m[3][3] = 1;

		ry.m[0][0] = Math.cos(y);ry.m[0][1] = 0;ry.m[0][2] = Math.sin(y);ry.m[0][3] = 0;
		ry.m[1][0] = 0;ry.m[1][1] = 1;ry.m[1][2] = 0;ry.m[1][3] = 0;
		ry.m[2][0] = -Math.sin(y);ry.m[2][1] = 0;ry.m[2][2] = Math.cos(y);ry.m[2][3] = 0;
		ry.m[3][0] = 0;ry.m[3][1] = 0;ry.m[3][2] = 0;ry.m[3][3] = 1;

		this.m = rz.mul(ry.mul(rx)).getM();

		return this;
	};

	/**
  * Rotates current matrix by arguments of rotation angle and axis.
  */
	this.rotate = function rotate(angle, axis) {
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
	};

	/**
  * Scales current matrix by argument Vector2f object
  */
	this.scale = function scale(scaling) {
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
	};

	/**
  * Multiplies current matrix by argument matrix.
  */
	this.mul = function mul(matrix) {

		return this.load(this.mul(this, matrix));
	};

	//TODO: need to be static
	/**
  * Gets result of multiplication of two matrices.
  */
	this.mul = function mul(left, right) {
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
	};

	this.traspose = function transpose() {
		var result = new Matrix4f();

		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				result.set(i, j, get(j, i));
			}
		}
		return result;
	};

	this.invert = function invert(src, dest) {
		var determinant = src.determinant();

		if (!determinant) {
			/*
    * m00 m01 m02 m03
    * m10 m11 m12 m13
    * m20 m21 m22 m23
    * m30 m31 m32 m33
    */
			if (!dest) dest = new Matrix4f();
			var determinant_inv = 1 / determinant;

			// first row
			var t00 = determinant3x3(src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t01 = -determinant3x3(src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t02 = determinant3x3(src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t03 = -determinant3x3(src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// second row
			var t10 = -determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t11 = determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t12 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t13 = determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// third row
			var t20 = determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t21 = -determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t22 = determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t23 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// fourth row
			var t30 = -determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3]);
			var t31 = determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3]);
			var t32 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3]);
			var t33 = determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2]);

			// transpose and divide by the determinant
			dest.m[0][0] = t00 * determinant_inv;
			dest.m[1][1] = t11 * determinant_inv;
			dest.m[2][2] = t22 * determinant_inv;
			dest.m[3][3] = t33 * determinant_inv;
			dest.m[0][1] = t10 * determinant_inv;
			dest.m[1][0] = t01 * determinant_inv;
			dest.m[2][0] = t02 * determinant_inv;
			dest.m[0][2] = t20 * determinant_inv;
			dest.m[1][2] = t21 * determinant_inv;
			dest.m[2][1] = t12 * determinant_inv;
			dest.m[0][3] = t30 * determinant_inv;
			dest.m[3][0] = t03 * determinant_inv;
			dest.m[1][3] = t31 * determinant_inv;
			dest.m[3][1] = t13 * determinant_inv;
			dest.m[3][2] = t23 * determinant_inv;
			dest.m[2][3] = t32 * determinant_inv;
			return dest;
		} else return null;
	};

	this.determinant3x3 = function determinant3x3(t00, t01, t02, t10, t11, t12, t20, t21, t22) {
		return t00 * (t11 * t22 - t12 * t21) + t01 * (t12 * t20 - t10 * t22) + t02 * (t10 * t21 - t11 * t20);
	};

	this.determinant = function determinant() {
		var f = this.m[0][0] * (this.m[1][1] * this.m[2][2] * this.m[3][3] + this.m[1][2] * this.m[2][3] * this.m[3][1] + this.m[1][3] * this.m[2][1] * this.m[3][2] - this.m[1][3] * this.m[2][2] * this.m[3][1] - this.m[1][1] * this.m[2][3] * this.m[3][2] - this.m[1][2] * this.m[2][1] * this.m[3][3]);
		f -= this.m[0][1] * (this.m[1][0] * this.m[2][2] * this.m[3][3] + this.m[1][2] * this.m[2][3] * this.m[3][0] + this.m[1][3] * this.m[2][0] * this.m[3][2] - this.m[1][3] * this.m[2][2] * this.m[3][0] - this.m[1][0] * this.m[2][3] * this.m[3][2] - this.m[1][2] * this.m[2][0] * this.m[3][3]);
		f += this.m[0][2] * (this.m[1][0] * this.m[2][1] * this.m[3][3] + this.m[1][1] * this.m[2][3] * this.m[3][0] + this.m[1][3] * this.m[2][0] * this.m[3][1] - this.m[1][3] * this.m[2][1] * this.m[3][0] - this.m[1][0] * this.m[2][3] * this.m[3][1] - this.m[1][1] * this.m[2][0] * this.m[3][3]);
		f -= this.m[0][3] * (this.m[1][0] * this.m[2][1] * this.m[3][2] + this.m[1][1] * this.m[2][2] * this.m[3][0] + this.m[1][2] * this.m[2][0] * this.m[3][1] - this.m[1][2] * this.m[2][1] * this.m[3][0] - this.m[1][0] * this.m[2][2] * this.m[3][1] - this.m[1][1] * this.m[2][0] * this.m[3][2]);
		return f;
	};

	this.invert = function invert(matrix) {
		return this.invert(matrix, null);
	};

	this.invert = function invert() {
		return this.invert(this, null);
	};

	this.quals = function equals(m) {
		if (this.m[0][0] == m.getM()[0][0] && this.m[0][1] == m.getM()[0][1] && this.m[0][2] == m.getM()[0][2] && this.m[0][3] == m.getM()[0][3] && this.m[1][0] == m.getM()[1][0] && this.m[1][1] == m.getM()[1][1] && this.m[1][2] == m.getM()[1][2] && this.m[1][3] == m.getM()[1][3] && this.m[2][0] == m.getM()[2][0] && this.m[2][1] == m.getM()[2][1] && this.m[2][2] == m.getM()[2][2] && this.m[2][3] == m.getM()[2][3] && this.m[3][0] == m.getM()[3][0] && this.m[3][1] == m.getM()[3][1] && this.m[3][2] == m.getM()[3][2] && this.m[3][3] == m.getM()[3][3]) return true;else return false;
	};

	this.set = function set(x, y, value) {
		this.m[x][y] = value;
	};

	this.get = function get(x, y) {
		return this.m[x][y];
	};

	this.getM = function getM() {
		return this.m;
	};

	/**
  * Load from a float buffer. The buffer stores the matrix in column major
  * (OpenGL) order.
  *
  * @param buf A float buffer to read from
  * @return this
  */
	this.loadBuffer = function loadBuffer(buf) {

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
	};

	this.load = function load(matrix) {
		this.m = matrix;
	};

	/**
  * Store this matrix in a float buffer. The matrix is stored in column
  * major (openGL) order.
  * @param buf The buffer to store this matrix in
  */
	this.store = function store(buf) {
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
	};

	/**
  * Verticle visualization
  */
	this.toString = function toString() {

		return "|" + this.m[0][0] + " " + this.m[1][0] + " " + this.m[2][0] + " " + this.m[3][0] + "|\n" + "|" + this.m[0][1] + " " + this.m[1][1] + " " + this.m[2][1] + " " + this.m[3][1] + "|\n" + "|" + this.m[0][2] + " " + this.m[1][2] + " " + this.m[2][2] + " " + this.m[3][2] + "|\n" + "|" + this.m[0][3] + " " + this.m[1][3] + " " + this.m[2][3] + " " + this.m[3][3] + "|";
	};
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Loop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer_MainRenderer__ = __webpack_require__(3);


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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TestRenderer__ = __webpack_require__(4);



function MainRenderer() {
	const FOV = 70;
	const farPlane = 10000;
	const nearPlane = 0.1;
	// initialization
	this.projectionMatrix = Math.createProjectionMatrix(nearPlane, farPlane, FOV);

	this.testRenderer = new __WEBPACK_IMPORTED_MODULE_1__TestRenderer__["a" /* TestRenderer */](this.projectionMatrix);

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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TestRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_TestShader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_VAO__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_matrix_Matrix4f__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object_camera_Camera__ = __webpack_require__(11);






function TestRenderer() {
	// initialization
	this.shader = new __WEBPACK_IMPORTED_MODULE_0__shader_TestShader__["a" /* TestShader */]();

	var vertices = [
	// face
	-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5,
	// back 
	-0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5];

	var indices = [0, 1, 1, 2, 2, 3, 3, 0, 0, 4, 4, 5, 5, 6, 6, 7, 7, 4, 1, 5, 2, 6, 3, 7];

	// vao
	this.vao = new __WEBPACK_IMPORTED_MODULE_1__primitive_VAO__["a" /* VAO */]();
	this.vao.bind();
	this.vao.createIndexBuffer(indices);
	this.vao.createAttribute(0, 3, vertices);
	this.vao.unbind();

	// matrices

	// projection matrix
	this.projectionMatrix = new __WEBPACK_IMPORTED_MODULE_3__math_matrix_Matrix4f__["a" /* Matrix4f */]();
	var aspectRatio = __WEBPACK_IMPORTED_MODULE_2__index_js__["gl"].viewportWidth / __WEBPACK_IMPORTED_MODULE_2__index_js__["gl"].viewportHeight;
	const FOV = 120;
	var yScale = 1 / Math.tan(Math.toRadians(FOV / 2));
	var xScale = yScale / aspectRatio;
	var farPlane = 10000;
	var nearPlane = 0.1;
	var frustumLength = farPlane - nearPlane;
	this.projectionMatrix.setIdentity();
	this.projectionMatrix.m[0][0] = xScale;
	this.projectionMatrix.m[1][1] = yScale;
	this.projectionMatrix.m[2][2] = -((farPlane + nearPlane) / frustumLength);
	this.projectionMatrix.m[2][3] = -1;
	this.projectionMatrix.m[3][2] = -(2 * nearPlane * farPlane / frustumLength);
	this.projectionMatrix.m[3][3] = 0;

	// camara
	this.camera = new __WEBPACK_IMPORTED_MODULE_4__object_camera_Camera__["a" /* Camera */]();

	// initialize some shader uniforms
	this.shader.start();
	this.shader.loadProjectionMatrix(this.projectionMatrix);
	this.shader.stop();

	// methods
	this.render = function render() {
		this.shader.start();
		this.vao.bindAttrib([0]);
		this.shader.loadViewMatrix(this.camera.getViewMatrix());
		__WEBPACK_IMPORTED_MODULE_2__index_js__["gl"].drawElements(__WEBPACK_IMPORTED_MODULE_2__index_js__["gl"].LINES, this.vao.indexBuffer.size, __WEBPACK_IMPORTED_MODULE_2__index_js__["gl"].UNSIGNED_SHORT, 0);
		this.vao.unbindAttrib([0]);
		this.shader.stop();
	};

	this.clean = function clean() {
		this.shader.stop();
		this.shader.clean();
		this.vao.clean();
	};
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestShader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__ = __webpack_require__(6);


function TestShader(projectionMatrix) {
	// initialization
	this.__proto__ = new __WEBPACK_IMPORTED_MODULE_0__ShaderProgram__["a" /* ShaderProgram */]();
	this.projectionMatrix = projectionMatrix;

	//----programs
	const VERTEX_FILE = __webpack_require__(7);
	const FRAGMENT_FILE = __webpack_require__(8);
	//----attributes
	const ATTRIBUTE_POSITION = "in_position";
	//----uniforms
	// matrices
	const UNIFORM_PROJECTION_MATRIX = "projectionMatrix";
	const UNIFORM_VIEW_MATRIX = "viewMatrix";

	// functions
	// @override
	this.bindAttributes = function bindAttributes() {
		this.bindAttribute(0, ATTRIBUTE_POSITION);
	};

	// @override
	this.loadUniformLocations = function loadUniformLocations() {
		this.addUniform(UNIFORM_PROJECTION_MATRIX);
		this.addUniform(UNIFORM_VIEW_MATRIX);
	};

	this.loadProjectionMatrix = function loadProjectionMatrix(matrix) {
		this.loadMatrix(UNIFORM_PROJECTION_MATRIX, matrix);
	};

	this.loadViewMatrix = function loadViewMatrix(matrix) {
		this.loadMatrix(UNIFORM_VIEW_MATRIX, matrix);
	};

	// initialize
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compileShaders();
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderProgram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


function ShaderProgram() {
	// initialization	
	this.programID = __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].createProgram();
	this.uniforms = [];

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

	this.loadShader = function loadShader(source, type) {
		var shaderID = __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].createShader(type);
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

	this.getUniformLocation = function getUniformLocation(name) {
		return __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].getUniformLocation(this.programID, name);
	};

	this.loadInt = function loadInt(name, value) {
		var uniformLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform1f(uniformLocation, value);
	};

	this.loadFloat = function loadFloat(name, value) {
		var uniformLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform1f(uniformLocation, value);
	};

	this.load4DVector = function load4DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform4f(uniformLocation, vector.x, vector.y, vector.z, vector.w);
	};

	this.load3DVector = function load3DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform3f(uniformLocation, vector.x, vector.y, vector.z);
	};

	this.load2DVector = function load2DVector(name, vector) {
		var uniformLocation = this.uniforms[name];
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniform2f(uniformLocation, vector.x, vector.y);
	};

	this.loadMatrix = function loadMatrix(name, matrix) {
		var uniformLocation = this.uniforms[name];
		var matrixBuffer = [];
		matrix.store(matrixBuffer);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].uniformMatrix4fv(uniformLocation, false, matrixBuffer);
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
/* 7 */
/***/ (function(module, exports) {

module.exports = "attribute vec3 in_position; \r\n\r\nuniform mat4 projectionMatrix; \r\nuniform mat4 viewMatrix;\r\n\r\nvoid main(void) { \r\n\t\r\n\tgl_Position = viewMatrix * projectionMatrix * vec4(in_position, 1.0);\r\n\t\r\n}"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "void main(void) { \r\n\t\r\n\tgl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\r\n\t\r\n}"

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VAO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__primitive_VBO__ = __webpack_require__(10);



function VAO() {
	// initialization
	this.object = __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].createVertexArray();

	this.vbos = [];
	this.indexBudffer = null;

	// methods
	this.bind = function bind() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindVertexArray(this.object);
	};

	this.unbind = function unbind() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindVertexArray(null);
	};

	this.bindAttrib = function bindAttrib(attributes) {
		this.bind();
		for (var attribute in attributes) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].enableVertexAttribArray(attribute);
		}
	};

	this.unbindAttrib = function unbindAttrib(attributes) {
		for (var attribute in attributes) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].disableVertexAttribArray(attribute);
		}
		this.unbind();
	};

	this.createAttribute = function createAttribute(attribute, dimentions, values) {
		var vbo = new __WEBPACK_IMPORTED_MODULE_1__primitive_VBO__["a" /* VBO */](__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].ARRAY_BUFFER);
		vbo.bind();
		vbo.storeData(values, dimentions);
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].vertexAttribPointer(attribute, dimentions, __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].FLOAT, false, 4 * dimentions, 0);
		vbo.unbind();
		this.vbos.push(vbo);
	};

	this.createIndexBuffer = function createIndexBuffer(values) {
		var indexVBO = new __WEBPACK_IMPORTED_MODULE_1__primitive_VBO__["a" /* VBO */](__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].ELEMENT_ARRAY_BUFFER);
		indexVBO.bind();
		indexVBO.storeIndexData(values);
		this.indexBuffer = indexVBO;
	};

	this.clean = function clean() {
		for (let vbo in this.vbos) {
			__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].deleteBuffer(vbo.object);
		}
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].deleteVertexArray(this.object);
	};
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VBO; });
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
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bindBuffer(this.type, null);
	};

	this.storeData = function storeData(values, dimentions) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bufferData(this.type, new Float32Array(values), __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].STATIC_DRAW);
		this.size = values.length / dimentions;
		this.dimentions = dimentions;
	};

	this.storeIndexData = function storeIndexData(values) {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].bufferData(this.type, new Uint16Array(values), __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].STATIC_DRAW);
		this.size = values.length;
	};

	this.clean = function clean() {
		__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].deleteBuffer(this.object);
	};
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_matrix_Matrix4f__ = __webpack_require__(1);



function Camera() {
	this.position = new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 0);
	this.pitch = 20;
	this.yaw = 0;
	this.roll = 0;

	this.getViewMatrix = function getViewMatrix() {
		var viewMatrix = new __WEBPACK_IMPORTED_MODULE_1__math_matrix_Matrix4f__["a" /* Matrix4f */]();
		viewMatrix.setIdentity();
		viewMatrix.rotate(Math.toRadians(this.pitch), new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](1, 0, 0));
		viewMatrix.rotate(Math.toRadians(this.yaw), new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](0, 1, 0));
		viewMatrix.rotate(Math.toRadians(this.roll), new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](0, 0, 1));
		var negativeCameraPosition = new __WEBPACK_IMPORTED_MODULE_0__math_vector_Vector3f__["a" /* Vector3f */](-this.position.x, -this.position.y, -this.position.z);
		viewMatrix.translate3f(negativeCameraPosition);

		return viewMatrix;
	};
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector3f;
function Vector3f(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initExtentions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


function initExtentions() {
	applyExtention("OES_vertex_array_object"); // VAO
};

function applyExtention(name) {
	var ext = __WEBPACK_IMPORTED_MODULE_0__index_js__["gl"].getExtension(name);
	if (!ext) {
		return false;
	}
	var suffix = name.split("_")[0];
	var prefix = suffix + '_';
	var suffixRE = new RegExp(suffix + '$');
	var prefixRE = new RegExp('^' + prefix);
	for (var key in ext) {
		var val = ext[key];
		if (typeof val === 'function') {
			// delete suffix and attach new functions for gl context
			var unsuffixedKey = key.replace(suffixRE, '');
			__WEBPACK_IMPORTED_MODULE_0__index_js__["gl"][unsuffixedKey] = ext[key].bind(ext);
		}
	}
	return true;
};



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initTools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Maths__ = __webpack_require__(15);


const shaderArray = ['./../shader/EntityShader/entity_VS.glsl', './../shader/EntityShader/entity_FS.glsl', './../shader/TestShader/test_VS.glsl', './../shader/TestShader/test_FS.glsl'];

function initTools() {
	// add new math functions
	var maths = new __WEBPACK_IMPORTED_MODULE_0__math_Maths__["a" /* Maths */]();
	for (var key in maths) {
		Math[key] = maths[key].bind(maths);
	}
}

function initShaders() {
	var shaders = document.getElementById('shaders');
	for (var i = 0; i < shaderArray.length(); i++) {}
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maths; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix_Matrix4f__ = __webpack_require__(1);


function Maths() {
	const PI = 3.14;

	this.toRadians = function (angle) {
		return angle / 180 * PI;
	};

	this.createProjectionMatrix = function createProjectionMatrix(nearPlane, farPlane, FOV) {
		var projectionMatrix = new __WEBPACK_IMPORTED_MODULE_0__matrix_Matrix4f__["a" /* Matrix4f */]();
		var aspectRatio = gl.viewportWidth / gl.viewportHeight;
		var yScale = 1 / Math.tan(Math.toRadians(FOV / 2));
		var xScale = yScale / aspectRatio;
		var frustumLength = farPlane - nearPlane;

		projectionMatrix.setIdentity();

		projectionMatrix.m[0][0] = xScale;
		projectionMatrix.m[1][1] = yScale;
		projectionMatrix.m[2][2] = -((farPlane + nearPlane) / frustumLength);
		projectionMatrix.m[2][3] = -1;
		projectionMatrix.m[3][2] = -(2 * nearPlane * farPlane / frustumLength);
		projectionMatrix.m[3][3] = 0;

		return projectionMatrix;
	};
}



/***/ })
/******/ ]);