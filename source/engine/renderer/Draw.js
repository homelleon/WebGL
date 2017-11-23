import {gl} from  "./../../index.js";

export function draw(shaderProgram) {
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
			vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.drawArrays(gl.TRIANGLES, 0, vertexBuffer.numberOfItems);
}