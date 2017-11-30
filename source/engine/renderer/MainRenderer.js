import {gl} from  "./../../index.js";
import {TestRenderer} from './TestRenderer';

function MainRenderer() {
	const FOV = 70;
	const farPlane = 10000;
	const nearPlane = 0.1;
	// initialization
	this.projectionMatrix = Math.createProjectionMatrix(nearPlane, farPlane, FOV);
	
	this.testRenderer = new TestRenderer(this.projectionMatrix);
	
	// methods
	this.render = function render() {
		gl.clearColor(1.0, 0.0, 0.0, 0.5);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		this.testRenderer.render();
	}
	
	this.clean = function clean() {
		this.testRenderer.clean();
	}
	
}

export {MainRenderer};