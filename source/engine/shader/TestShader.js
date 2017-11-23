import {ShaderProgram} from './ShaderProgram';

export function TestShader() {
	this.__proto__ = new ShaderProgram();
	//----programs
	const VERTEX_FILE = 'shader-vs';	
	const FRAGMENT_FILE = 'shader-fs';
	//----attributes
	const ATTRIBUTE_POSITION = "aVertexPosition";
	
	// functions
	// @override
	this.bindAttributes = function bindAttributes() {
		this.bindAttribute(0, ATTRIBUTE_POSITION);
	}
	
	// initialize
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compileShaders();
}