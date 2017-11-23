import {gl} from  "./../../index.js";

export function VBO(type) {
	// initialization
	this.id = gl.createBuffer();
	this.type = type;
	
	// methods
	this.bind = function bind() {
		gl.bindBuffer(this.type, this.id);
	}
	
	this.unbind = function unbind() {
		gl.bindBuffer(this.type, this.id);
	}
	
	this.setData = function setData(values, dimentions) {
		gl.bufferData(this.type, new Float32Array(values),
				gl.STATIC_DRAW);
		this.size = values.length / dimentions;
	}
	
	this.clean = function clean() {
		gl.deleteBuffer(this.id);
	}
	
	
}