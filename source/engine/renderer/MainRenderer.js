import TestRenderer from './TestRenderer';

export default function MainRenderer(gl) {	
	this.testRenderer = new TestRenderer(gl);
	
	this.render = function render() {
		this.testRenderer.render();
	}
	
	this.clean = function clean() {
		this.testRenderer.clean();
	}
	
}