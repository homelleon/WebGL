import TestRenderer from './TestRenderer';

export default function MainRenderer(gl) {	
	var testRenderer = new TestRenderer(gl);
	
	this.render = function render() {
		testRenderer.render();
	}
	
	this.clean = function clean() {
		testRenderer.clean();
	}
	
}