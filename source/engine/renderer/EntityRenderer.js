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
	// initialization
	var shader = new EntityShader();
	var projectionMatrix = projectionMatrix;
	
	// initialize some shader uniforms
	shader.start();
	shader.loadProjectionMatrix(projectionMatrix);
	shader.stop();
	
	// methods
	/**
	 * Renders entity objects.
	 */
	this.render = function render(scene) {
		shader.start();
		var vao = scene.entities.get(0).models[0].mesh.vao;
		vao.bindAttrib([ 0, 1, 2 ]);
		shader.loadViewMatrix(scene.camera.getViewMatrix());
		shader.loadDiffuseColor(new Vector3f( 1, 0, 1 ));
		gl.drawElements(gl.LINES, vao.indexBuffer.size, gl.UNSIGNED_SHORT, 0);
		vao.unbindAttrib([ 0, 1, 2 ]);
		shader.stop();
	}
	
	/**
	 * Finalize and clear current rendering tools.
	 */
	this.clean = function clean() {
		shader.stop();
		shader.clean();
	}
}

export {EntityRenderer};