import {ShaderProgram} from './ShaderProgram';

export function TestShader() {
	this.__proto__ = new ShaderProgram();
	//----programs
	const VERTEX_FILE = 'shader-vs';	
	const FRAGMENT_FILE = 'shader-fs';
	//----attributes
	const ATTRIBUTE_POSITION = "in_position";
	//----uniforms
	// matrices
	const UNIFORM_PROJECTION_MATRIX = "projectionMatrix";
	const UNIFORM_VIEW_MATRIX = "viewMatrix";
	
	// functions
	// @override
	this.bindAttributes = function bindAttributes() {
		this.bindAttribute(0, ATTRIBUTE_POSITION);
	}
	
	this.loadProjectionMatrix = function loadProjectionMatrix(matrix) {
		this.loadMatrix(UNIFORM_PROJECTION_MATRIX, matrix);
	}
	
	this.loadViewMatrix = function loadViewMatrix(matrix) {
		this.loadMatrix(UNIFORM_VIEW_MATRIX, matrix);
	}
	
	// initialize
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compileShaders();
}