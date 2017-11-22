import ShaderProgram from './ShaderProgram';

export default function TestShader(gl) {
	//----programs
	const VERTEX_FILE = "#version 200 core" +
	"attribute vec2 position"+
	"void main() {"+
	"gl_Position = vec4(position, 0, 1);" +
	"}";	
	const FRAGMENT_FILE = "void main() {" +
	"gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);" +
	"}";
	
	this.__proto__ = new ShaderProgram(gl);
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compile();
}