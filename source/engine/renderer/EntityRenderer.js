import {EntityShader} from './../shader/entityShader/EntityShader';
import {gl} from  './../../index.js';
import {Matrix4f} from './../math/matrix/Matrix4f';
import {Vector3f} from './../math/vector/Vector3f';
import {Camera} from './../object/camera/Camera';

/**
 * Part of rendering engine for entity objects.
 * 
 * @param projectionMatrix - perspective tranformation matrix for scene objects
 */
function EntityRenderer(projectionMatrix) {	
	// constructor
	var _shader = new EntityShader();
	var _projectionMatrix = projectionMatrix;
	
	// initialize some shader uniforms
	_shader.start();
	_shader.loadProjectionMatrix(projectionMatrix);
	_shader.connectTextureUnits();
	_shader.stop();
	
	// methods
	/**
	 * Binds textures from object material.
	 * 
	 * @param material - material object
	 */
	var prepareMaterial = function(material) {
		material.getDiffuseMap().bind(0);
	}
	
	/**
	 * Renders entity objects.
	 */
	this.render = function(scene) {
		gl.disable(gl.CULL_FACE);
		_shader.start();
		let entity = scene.getEntities().get(0);
		let model = entity.getModels()[0];
		let material = model.getMaterial();
		let vao = model.getMeshes()[0].getVAO();
		vao.bindAttrib([ 0, 1, 2 ]);
		prepareMaterial(material);
		_shader.loadViewMatrix(scene.getCamera().getViewMatrix());
		_shader.loadDiffuseColor(new Vector3f( 1, 0, 1 ));
		_shader.loadLights(scene.getLights());
		_shader.loadShineVariables(material.getShininess(), material.getReflectivity());
		gl.drawElements(gl.TRIANGLES, vao.getIndexBuffer().getSize(), gl.UNSIGNED_SHORT, 0);
		vao.unbindAttrib([ 0, 1, 2 ]);
		material.getDiffuseMap().unbind();
		_shader.stop();
		gl.enable(gl.CULL_FACE);
	}
	
	/**
	 * Finalize and clear current rendering tools.
	 */
	this.clean = function() {
		_shader.stop();
		_shader.clean();
	}
}

export {EntityRenderer};