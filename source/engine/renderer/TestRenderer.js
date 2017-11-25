import {TestShader} from './../shader/TestShader';
import {VAO} from './../primitive/VAO';
import {gl} from  "./../../index.js";

export function TestRenderer() {	
	// initialization
	this.shader = new TestShader();
	
	var vertices = [
        // face
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,
         0.5, 0.5, 0.5,
         0.5, -0.5, 0.5,
        // back 
        -0.5, -0.5, -0.5,
        -0.5, 0.5, -0.5,
         0.5, 0.5, -0.5,
         0.5, -0.5, -0.5
	];
	
	var indices = [
		0, 1, 1, 2, 
		2, 3, 3, 0, 
		0, 4, 4, 5, 
		5, 6, 6, 7, 
		7, 4, 1, 5, 
		2, 6, 3, 7
	];
	
	this.vao = new VAO();
	this.vao.attachIndex(indices);
	this.vao.attachBuffer(vertices, 3);
	
	// methods
	this.render = function render() {
		this.shader.start();
		this.vao.indexBuffer.bind();
		this.vao.vbos[0].bind();
		gl.enableVertexAttribArray(0);
		gl.vertexAttribPointer(0,
				this.vao.vbos[0].dimentions, gl.FLOAT, false, 0, 0);
		gl.drawElements(gl.LINES, this.vao.indexBuffer.size, gl.UNSIGNED_SHORT, 0);
		this.shader.stop();
	}
	
	this.clean = function clean() {
		this.shader.stop();
		this.shader.clean();
	}
}