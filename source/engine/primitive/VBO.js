import {gl} from  "./../../index.js";

/**
 * Vertex buffer object linink for webgl object array.
 * 
 * @param type - Number type of current buffer object 
 */
function VBO(type) {
	// initialization
	this.object = gl.createBuffer();
	this.type = type;
	
	// methods
	/**
	 * Binds vertex buffer object for current
	 * webgl context.
	 */
	this.bind = function bind() {
		gl.bindBuffer(this.type, this.object);
	}
	
	/**
	 * Unbinds all vertex buffer objects from current
	 * webgl context. 
	 */
	this.unbind = function unbind() {
		gl.bindBuffer(this.type, null);
	}
	
	/**
	 * Stores data into video buffer.
	 */
	this.storeData = function storeData(values, dimentions) {
		gl.bufferData(this.type, new Float32Array(values),
				gl.STATIC_DRAW);
		this.size = values.length / dimentions;
		this.dimentions = dimentions;
	}
	
	/**
	 * Stores indices into video buffer.
	 */
	this.storeIndexData = function storeIndexData(values) {
		gl.bufferData(this.type, new Uint16Array(values),
				gl.STATIC_DRAW);
		this.size = values.length;
	}
	
	/**
	 * Releases current vertex array object.
	 */
	this.clean = function clean() {
		gl.deleteBuffer(this.object);
	}
	
	
}

export {VBO};