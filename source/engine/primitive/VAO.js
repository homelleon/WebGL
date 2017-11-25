import {gl} from  "./../../index.js";
import {VBO} from './../primitive/VBO';

export function VAO() {
	// initialization
	if(!gl.haveVAOs) {
		console.log("You don't have extentions!");
	} else {
		this.object = gl.createVertexArray();
    }
	this.vbos = [];
	this.indexBudffer = null;
    	      
	// methods
	this.bind = function bind() {
		gl.bindVertexArray(this.object);
	}
	
	this.attachBuffer = function attachBuffer(values, dimentions) {
		var vbo = new VBO(gl.ARRAY_BUFFER);
		vbo.bind();
		vbo.setArrayData(values, dimentions);
		vbo.unbind();
		this.vbos.push(vbo);
	}
	
	this.attachIndex = function attachIndex(values) {
		var indexVBO = new VBO(gl.ELEMENT_ARRAY_BUFFER);
		indexVBO.bind();
		indexVBO.setIndexData(values);
		indexVBO.unbind();
		this.indexBuffer = indexVBO; 
	}
	
	this.unbind = function unbind() {
		gl.bindVertexArray(null);
	}
}