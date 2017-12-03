import {ShaderProgram} from './../ShaderProgram';

function EntityShader() {
	// pre-initialization
	this.__proto__ = new ShaderProgram();
	
	//----programs
	const VERTEX_FILE = require('./entity_VS.glsl');
	const FRAGMENT_FILE = require('./entity_FS.glsl');
	//----attributes
	const ATTRIBUTE_POSITION = 'in_position';
	const ATTRIBUTE_TEXTURE_COORDS = 'in_textureCoords';
	const ATTRIBUTE_NORMAL = 'in_normals';
	//----uniforms
	// matrices
	const UNIFORM_RPOJECTION_MATRIX = 'projectionMatrix';
	const UNIFORM_VIEW_MATRIX = 'viewMatrix';
	const UNIFORM_MODEL_MATRIX = 'modelMatrix';
	// color
	const UNIFORM_DIFFUSE_COLOR = 'diffuseColor';
	
	// methods
	// @override
	this.bindAttributes = function() {
		this.bindAttribute(0, ATTRIBUTE_POSITION);
		this.bindAttribute(1, ATTRIBUTE_TEXTURE_COORDS);
		this.bindAttribute(2, ATTRIBUTE_NORMAL);
	}
	
	// @override
	this.loadUniformLocations = function() {
		// matrices
		this.addUniform(UNIFORM_RPOJECTION_MATRIX);
		this.addUniform(UNIFORM_VIEW_MATRIX);
		this.addUniform(UNIFORM_MODEL_MATRIX);
		// color
		this.addUniform(UNIFORM_DIFFUSE_COLOR);
	}
	
	this.loadProjectionMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_RPOJECTION_MATRIX, matrix);
	}
	
	this.loadViewMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_VIEW_MATRIX, matrix);
	}
	
	this.loadModelMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_MODEL_MATRIX, matrix);
	}
	
	this.loadDiffuseColor = function(color) {
		this.load3DVector(UNIFORM_DIFFUSE_COLOR, color);
	}
	
	// initialization
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compileShaders();	
}

export {EntityShader};