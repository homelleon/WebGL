import TestShader from './../shader/TestShader';

export default function TestRenderer(gl) {
	this.shader = new TestShader(gl);
	
	var vetices = [
		-0.5, 0,
		0.0, 1.0,
		0.5, 0
	];
	
	this.render = function render() {
		console.dir(this.shader);
		this.shader.start();
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3)
		this.shader.stop();
	}
	
	this.clean = function clean() {
		this.shader.stop();
		this.shader.clean();
	}
}