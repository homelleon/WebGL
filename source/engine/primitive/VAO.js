import {gl} from  "./../../index.js";

export function VAO() {
	// initialization
	if(!gl.haveVAOs) {
		console.log("You don't have extentions!");
	} else {
		this.object = gl.createVertexArray();
    }
    	      
	// methods
	this.bind = function bind() {
		gl.bindVertexArray(this.object);
	}
	
	this.unbind = function unbind() {
		gl.bindVertexArray(null);
	}
}