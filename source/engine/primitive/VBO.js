import {gl} from  "./../../index.js";

/**
 * Vertex buffer object linink for webgl object array.
 * 
 * @param type - Number type of current buffer object 
 */
function VBO(type) {
	// initialization
	var _object = gl.createBuffer();
	var _type = type;
	var _size = 0;
	var _dimentions = 0;
	
	// methods
	/**
	 * Binds vertex buffer object for current
	 * webgl context.
	 */
	this.bind = function() {
		gl.bindBuffer(_type, _object);
	}
	
	/**
	 * Unbinds all vertex buffer objects from current
	 * webgl context. 
	 */
	this.unbind = function() {
		gl.bindBuffer(_type, null);
	}
	
	/**
	 * Stores data into video buffer.
	 */
	this.storeData = function(values, dimentions) {
		gl.bufferData(type, new Float32Array(values),
				gl.STATIC_DRAW);
		_size = values.length / dimentions;
		_dimentions = dimentions;
	}
	
	/**
	 * Stores indices into video buffer.
	 */
	this.storeIndexData = function(values) {
		gl.bufferData(type, new Uint16Array(values),
				gl.STATIC_DRAW);
		_size = values.length;
	}
	
	/**
	 * Releases current vertex array object.
	 */
	this.clean = function() {
		gl.deleteBuffer(_object);
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

export {VBO};