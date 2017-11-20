import initializeWebGL from './engine/core/WebGL';
import TestShader from './engine/shader/TestShader';

window.onload = function() {
	var gl = new initializeWebGL("800px","1000px");
	gl.viewport(0, 0, 600, 800);
	var vertexShader = "#version 200 core" +
			"in vec2 position"+
			"void main() {"+
			"gl_Position = vec4(position, 0, 1);" +
			"}";
	var fragmentShader = "#version 200 core" +
			"void main() {" +
			"gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);" +
			"}"; 
	
	var testShader = new TestShader("testShader", gl, vertexShader, fragmentShader);
	testShader.prototype.start();
};
