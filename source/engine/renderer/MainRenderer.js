import {gl} from  "./../../index.js";
import {EntityRenderer} from './EntityRenderer';

/**
 * Main enigine rendering function. 
 */
function MainRenderer() {
	const FOV = 120;
	const nearPlane = 0.1;
	const farPlane = 10000;
	
	// initialization
	var __projectionMatrix = Math.createProjectionMatrix(nearPlane, farPlane, FOV);
	var __entityRenderer = new EntityRenderer(__projectionMatrix);
	
	// methods
	/**
	 * Renders scene objects.
	 * @param scene - engine scene
	 */
	this.render = function(scene) {
		gl.clearColor(1.0, 0.0, 0.0, 0.5);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		__entityRenderer.render(scene);
	}
	
	/**
	 * Clears rendering engine.
	 */
	this.clean = function() {
		__entityRenderer.clean();
	}
	
}

export {MainRenderer};