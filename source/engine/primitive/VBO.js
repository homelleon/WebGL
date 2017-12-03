import {gl} from  "./../../index.js";

/**
 * Vertex buffer object linink for webgl object array.
 * 
 * @param type - Number type of current buffer object 
 */
function VBO(type) {
	// initialization
	var object = gl.createBuffer();
	var type = type;
	var size = 0;
	var dimentions = 0;
	
	// methods
	/**
	 * Binds vertex buffer object for current
	 * webgl context.
	 */
	this.bind = function() {
		gl.bindBuffer(type, object);
	}
	
	/**
	 * Unbinds all vertex buffer objects from current
	 * webgl context. 
	 */
	this.unbind = function() {
		gl.bindBuffer(type, null);
	}
	
	/**
	 * Stores data into video buffer.
	 */
	this.storeData = function(values, dimentions) {
		gl.bufferData(type, new Float32Array(values),
				gl.STATIC_DRAW);
		size = values.length / dimentions;
		dimentions = dimentions;
	}
	
	/**
	 * Stores indices into video buffer.
	 */
	this.storeIndexData = function(values) {
		gl.bufferData(type, new Uint16Array(values),
				gl.STATIC_DRAW);
		size = values.length;
	}
	
	/**
	 * Releases current vertex array object.
	 */
	this.clean = function() {
		gl.deleteBuffer(object);
	}
	
	this.getObject = function() {
		return object;
	}
	
	this.getSize = function() {
		return size;
	}
	
	this.getDimentions = function() {
		return dimentions;
	}
	
}

export {VBO};