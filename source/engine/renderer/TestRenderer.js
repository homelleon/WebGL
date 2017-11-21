import TestShader from './../shader/TestShader';

export default function TestRenderer(gl) {
	var shader = new TestShader(gl);
	var vetices = [
		-0.5, 0,
		0.0, 1.0,
		0.5, 0
	];
	
	this.render = function render() {
		shader.start();
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3)
		shader.stop();
	}
	
	this.clean = function clean() {
		shader.stop();
		shader.clean();
	}
}