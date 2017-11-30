import {gl} from  "./../../index.js";

function VBO(type) {
	// initialization
	this.object = gl.createBuffer();
	this.type = type;
	
	// methods
	this.bind = function bind() {
		gl.bindBuffer(this.type, this.object);
	}
	
	this.unbind = function unbind() {
		gl.bindBuffer(this.type, null);
	}
	
	this.storeData = function storeData(values, dimentions) {
		gl.bufferData(this.type, new Float32Array(values),
				gl.STATIC_DRAW);
		this.size = values.length / dimentions;
		this.dimentions = dimentions;
	}
	
	this.storeIndexData = function storeIndexData(values) {
		gl.bufferData(this.type, new Uint16Array(values),
				gl.STATIC_DRAW);
		this.size = values.length;
	}
	
	this.clean = function clean() {
		gl.deleteBuffer(this.object);
	}
	
	
}

export {VBO};