import {TestShader} from './../shader/TestShader';
import {VAO} from './../primitive/VAO';
import {VBO} from './../primitive/VBO';
import {gl} from  "./../../index.js";

export function TestRenderer() {	
	// initialization
	this.shader = new TestShader();
	
	var triangleVertices = [
		0.0, 0.5, 0.0,
		-0.5, -0.5, 0.0,
		0.5, -0.5, 0,0
	];
	
//	this.vao = new VAO();
//	this.vao.bind();
//	console.dir(this.vao);
	
	this.vbo = new VBO(gl.ARRAY_BUFFER);
	this.vbo.bind();
	this.vbo.setData(triangleVertices, 3);
	
	// methods
	this.render = function render() {
		this.shader.start();
		gl.enableVertexAttribArray(0);
		gl.vertexAttribPointer(0,
				this.vbo.dimentions, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLES, 0, this.vbo.size);
		this.shader.stop();
	}
	
	this.clean = function clean() {
		this.shader.stop();
		this.shader.clean();
	}
}