import {gl} from  "./../../index.js";

/**
 * Vertex buffer object linink for webgl object array.
 * 
 * @param type - Number type of current buffer object 
 */
function VBO(type) {
	// initialization
	var __object = gl.createBuffer();
	var __type = type;
	var __size = 0;
	var __dimentions = 0;
	
	// methods
	/**
	 * Binds vertex buffer object for current
	 * webgl context.
	 */
	this.bind = function() {
		gl.bindBuffer(__type, __object);
	}
	
	/**
	 * Unbinds all vertex buffer objects from current
	 * webgl context. 
	 */
	this.unbind = function() {
		gl.bindBuffer(__type, null);
	}
	
	/**
	 * Stores data into video buffer.
	 */
	this.storeData = function(values, dimentions) {
		gl.bufferData(type, new Float32Array(values),
				gl.STATIC_DRAW);
		__size = values.length / dimentions;
		__dimentions = dimentions;
	}
	
	/**
	 * Stores indices into video buffer.
	 */
	this.storeIndexData = function(values) {
		gl.bufferData(type, new Uint16Array(values),
				gl.STATIC_DRAW);
		__size = values.length;
	}
	
	/**
	 * Releases current vertex array object.
	 */
	this.clean = function() {
		gl.deleteBuffer(__object);
	}
	
	this.getObject = function() {
		return __object;
	}
	
	this.getSize = function() {
		return __size;
	}
	
	this.getDimentions = function() {
		return __dimentions;
	}
	
}

export {VBO};