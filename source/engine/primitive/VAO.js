import {gl} from  "./../../index.js";
import {VBO} from './../primitive/VBO';

/**
 * Vertex array object for managing
 * vertex buffer objects to store them
 * into video buffer.
 */
function VAO() {
	// initialization
	var object = gl.createVertexArray();	
	var vbos = [];
	var indexBuffer = null;
    	      
	// methods
	/**
	 * Binds current vertex array object for webgl context. 
	 */
	this.bind = function() {
		gl.bindVertexArray(object);
	}
	
	/**
	 * Unbinds all vertex array objects from webgl context.
	 */
	this.unbind = function() {
		gl.bindVertexArray(null);
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
			gl.enableVertexAttribArray(attribute);
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
			gl.disableVertexAttribArray(attribute);
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
		var vbo = new VBO(gl.ARRAY_BUFFER);
		vbo.bind();
		vbo.storeData(values, dimentions);
		gl.vertexAttribPointer(
				attribute, dimentions, gl.FLOAT, false, 4 * dimentions, 0);
		vbo.unbind();
		vbos.push(vbo);
	}
	
	/**
	 * Creates and loads indices data for new element array
	 * buffer object attribute of current vertex array buffer.  
	 */
	this.createIndexBuffer = function(values) {
		var indexVBO = new VBO(gl.ELEMENT_ARRAY_BUFFER);
		indexVBO.bind();
		indexVBO.storeIndexData(values);
		indexBuffer = indexVBO; 
	}
	
	/**
	 * Releases all vertex buffer objects of current vertex 
	 * array object from webgl context.
	 */
	this.clean = function() {
		for(let vbo in vbos) {
			gl.deleteBuffer(vbo.object);
		}
		gl.deleteVertexArray(object);
	}
	
	this.getObject = function() {
		return object;
	}
	
	this.getVbos = function() {
		return vbos;
	}
	
	this.getIndexBuffer = function() {
		return indexBuffer;
	}
}

export {VAO};