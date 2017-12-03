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
	var __shader = new EntityShader();
	var __projectionMatrix = projectionMatrix;
	
	// initialize some shader uniforms
	__shader.start();
	__shader.loadProjectionMatrix(projectionMatrix);
	__shader.stop();
	
	// methods
	/**
	 * Renders entity objects.
	 */
	this.render = function(scene) {
		__shader.start();
		var vao = scene.getEntities().get(0).getModels()[0].getMesh().getVAO();
		vao.bindAttrib([ 0, 1, 2 ]);
		__shader.loadViewMatrix(scene.getCamera().getViewMatrix());
		__shader.loadDiffuseColor(new Vector3f( 1, 0, 1 ));
		gl.drawElements(gl.LINES, vao.getIndexBuffer().getSize(), gl.UNSIGNED_SHORT, 0);
		vao.unbindAttrib([ 0, 1, 2 ]);
		__shader.stop();
	}
	
	/**
	 * Finalize and clear current rendering tools.
	 */
	this.clean = function() {
		__shader.stop();
		__shader.clean();
	}
}

export {EntityRenderer};