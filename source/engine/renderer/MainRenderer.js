import {gl} from  "./../../index.js";
import {TestRenderer} from './TestRenderer';

export function MainRenderer() {
	// initialization
	this.testRenderer = new TestRenderer();
	
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