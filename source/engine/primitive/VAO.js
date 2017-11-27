import {gl} from  "./../../index.js";
import {VBO} from './../primitive/VBO';

export function VAO() {
	// initialization
	this.object = gl.createVertexArray();
	
	this.vbos = [];
	this.indexBudffer = null;
    	      
	// methods
	this.bind = function bind() {
		gl.bindVertexArray(this.object);
	}
	
	this.unbind = function unbind() {
		gl.bindVertexArray(null);
	}
	
	this.bindAttrib = function bindAttrib(attributes) {
		this.bind();
		for(var attribute in attributes) {
			gl.enableVertexAttribArray(attribute);
		}
	}
	
	this.unbindAttrib = function unbindAttrib(attributes) {
		for(var attribute in attributes) {
			gl.disableVertexAttribArray(attribute);
		}
		this.unbind();
	}
	
	this.createAttribute = function createAttribute(attribute, dimentions, values) {
		var vbo = new VBO(gl.ARRAY_BUFFER);
		vbo.bind();
		vbo.storeData(values, dimentions);
		gl.vertexAttribPointer(attribute, dimentions, gl.FLOAT, false, 4 * dimentions, 0);
		vbo.unbind();
		this.vbos.push(vbo);
	}
	
	this.createIndexBuffer = function createIndexBuffer(values) {
		var indexVBO = new VBO(gl.ELEMENT_ARRAY_BUFFER);
		indexVBO.bind();
		indexVBO.storeIndexData(values);
		this.indexBuffer = indexVBO; 
	}
	
	this.clean = function clean() {
		for(let vbo in this.vbos) {
			gl.deleteBuffer(vbo.object);
		}
		gl.deleteVertexArray(this.object);
	}
}