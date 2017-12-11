import {ShaderProgram} from './../ShaderProgram';
import {Vector3f} from './../../math/vector/Vector3f';

function EntityShader() {
	// pre-initialization
	this.__proto__ = new ShaderProgram();
	
	const MAX_LIGHTS = 10;
	
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
	const UNIFORM_INVERSE_VIEW_MATRIX = 'inverseViewMatrix';
	// color
	const UNIFORM_DIFFUSE_COLOR = 'diffuseColor';
	// light
	const UNIFORM_LIGHT_POSITION = 'lightPosition';
	const UNIFORM_LIGHT_COLOR = 'lightColor';
	const UNIFORM_LIGHT_ATTENUATION = 'lightAttenuation';
	const UNIFORM_SHININESS = 'shininess';
	const UNIFORM_REFLECTIVITY = 'reflectivity';
	
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
		this.addUniform(UNIFORM_INVERSE_VIEW_MATRIX);
		// color
		this.addUniform(UNIFORM_DIFFUSE_COLOR);
		// light
		this.addUniform(UNIFORM_SHININESS);
		this.addUniform(UNIFORM_REFLECTIVITY);
		for(let i = 0; i < MAX_LIGHTS; i++) {
			this.addUniform(UNIFORM_LIGHT_POSITION + "[" + i + "]");
			this.addUniform(UNIFORM_LIGHT_COLOR + "[" + i + "]");
			this.addUniform(UNIFORM_LIGHT_ATTENUATION + "[" + i + "]");
		}
	}
	
	this.loadProjectionMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_RPOJECTION_MATRIX, matrix);
	}
	
	this.loadViewMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_VIEW_MATRIX, matrix);
		this.loadMatrix(UNIFORM_INVERSE_VIEW_MATRIX, matrix.invert());
	}
	
	this.loadModelMatrix = function(matrix) {
		this.loadMatrix(UNIFORM_MODEL_MATRIX, matrix);
	}
	
	this.loadDiffuseColor = function(color) {
		this.load3DVector(UNIFORM_DIFFUSE_COLOR, color);
	}
	
	this.loadShineVariables = function(shininess, reflectivity) {
		this.loadFloat(UNIFORM_SHININESS, shininess);
		this.loadFloat(UNIFORM_REFLECTIVITY, reflectivity);
	}
	
	this.loadLights = function(lights) {
		for(let i = 0; i < MAX_LIGHTS; i++) {
			if(i < lights.length()) {
				this.load3DVector(
					UNIFORM_LIGHT_POSITION + "[" + i + "]", 
					lights.get(i).getPosition()
				);
				
				this.load3DVector(
					UNIFORM_LIGHT_COLOR + "[" + i + "]", 
					lights.get(i).getColor()
				);
				
				this.load3DVector(
					UNIFORM_LIGHT_ATTENUATION + "[" + i + "]", 
					lights.get(i).getAttenuation()
				);				
			} else {
				this.load3DVector(
					UNIFORM_LIGHT_POSITION + "[" + i + "]", 
					new Vector3f(0, 0, 0)
				);
					
				this.load3DVector(
					UNIFORM_LIGHT_COLOR + "[" + i + "]", 
					new Vector3f(0, 0, 0)
				);
					
				this.load3DVector(
					UNIFORM_LIGHT_ATTENUATION + "[" + i + "]", 
					new Vector3f(1, 0, 0)
				);
			}
		}
	}
	
	// initialization
	this.addVertexShader(VERTEX_FILE);
	this.addFragmentShader(FRAGMENT_FILE);
	this.compileShaders();	
}

export {EntityShader};