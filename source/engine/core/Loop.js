import MainRenderer from './../renderer/MainRenderer';

export default function Loop(gl) {
	var renderer = new MainRenderer(gl);
	
	this.update = function update() {
		renderer.render();
	}
	
	this.stop = function stop() {
		renderer.stop();
	}
}