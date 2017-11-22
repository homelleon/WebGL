import {ShaderProgram} from './ShaderProgram';

export default function TestShader(gl) {
	this.__proto__ = new ShaderProgram(gl);
	//----programs
	const VERTEX_FILE = "attribute vec2 position "+
	"void main() { "+
	"gl_Position = vec4(position, 0, 1); " +
	"} ";	
	const FRAGMENT_FILE = "void main() { " +
	"gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); " +
	"} ";
	
	this.bindAttributes();
	
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compile();
	
	this.bindAttributes = function bindAttributes() {
		this.bindAttribute(0, position);
	}
}