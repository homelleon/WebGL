import {TestShader} from './../shader/TestShader';
import {gl} from  "./../../index.js";

export function TestRenderer() {	
	// initialization
	this.shader = new TestShader();
	
	this.vertexBuffer = gl.createBuffer();
	
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	var triangleVertices = [
		0.0, 0.5, 0.0,
		-0.5, -0.5, 0.0,
		0.5, -0.5, 0,0
	];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices),
			gl.STATIC_DRAW);
	this.vertexBuffer.itemSize = 3;
	this.vertexBuffer.numberOfItems = 3;
	
	// methods
	this.render = function render() {
		this.shader.start();
		gl.enableVertexAttribArray(this.shader.vertexPositionAttribute);
		gl.vertexAttribPointer(this.shader.vertexPositionAttribute,
				this.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLES, 0, this.vertexBuffer.numberOfItems);
		this.shader.stop();
	}
	
	this.clean = function clean() {
		this.shader.stop();
		this.shader.clean();
	}
}