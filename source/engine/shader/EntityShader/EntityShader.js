import {ShaderProgram} from './../ShaderProgram';

function EntityShader(projectionMatrix) {
	// initialization
	this.__proto__ = new ShaderProgram();
	this.projectionMatrix = projectionMatrix;
	
	//----programs
	const VERTEX_FILE = 'entity-vs';
	const FRAGMENT_FILE = 'entity-fs';
	//----attributes
	const ATTRIBUTE_POSITION = 'in_position';
	const ATTRIBUTE_TEXTURE_COORDS = 'in_textureCoords';
	const ATTRIBUTE_NORMAL = 'in_normals';
	//----uniforms
	// matrices
	const UNIFORM_RPOJECTION_MATRIX = 'projectionMatrix';
	const UNIFORM_VIEW_MATRIX = 'viewMatrix';
	const UNIFORM_MODEL_MATRIX = 'modelMatrix';
	
	// functions
	// @override
	this.bindAttributes = function findAttributes() {
		this.bindAttribute(0, ATTRIBUTE_POSITION);
		this.bindAttribute(1, ATTRIBUTE_TEXTURE_COORDS);
		this.bindAttribute(2, ATTRIBUTE_NORMAL);
	}
	
	// @override
	
	this.loadProjectionMatrix = function loadProjectionMatrix(matrix) {
		this.loadMatrix(UNIFORM_RPOJECTION_MATRIX, matrix);
	}
	
	this.loadViewMatrix = function loadViewMatrix(matrix) {
		this.loadMatrix(UNIFORM_VIEW_MATRIX, matrix);
	}
	
	this.loadModelMatrix = function loadModelMatrix(matrix) {
		this.loadMatrix(UNIFORM_MODEL_MATRIX, matrix);
	}
}

export {EntityShader};