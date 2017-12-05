import {gl} from  "./../../index.js";
import {EntityRenderer} from './EntityRenderer';

/**
 * Main enigine rendering function. 
 */
function MainRenderer() {
	const FOV = 120;
	const NEAR_PLANE = 0.1;
	const FAR_PLANE = 10000;
	
	// initialization
	var _projectionMatrix = Math.createProjectionMatrix(NEAR_PLANE, FAR_PLANE, FOV);
	var _entityRenderer = new EntityRenderer(_projectionMatrix);
	
	// methods
	/**
	 * Renders scene objects.
	 * @param scene - engine scene
	 */
	this.render = function(scene) {
		gl.clearColor(0.0, 1.0, 1.0, 0.5);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		_entityRenderer.render(scene);
	}
	
	/**
	 * Clears rendering engine.
	 */
	this.clean = function() {
		_entityRenderer.clean();
	}
	
}

export {MainRenderer};