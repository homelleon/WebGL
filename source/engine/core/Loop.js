import {MainRenderer} from './../renderer/MainRenderer';

export function Loop() {
	// initialization
	var renderer = new MainRenderer();
	
	// methods
	this.update = function update() {
		renderer.render();
	}
	
	this.stop = function stop() {
		renderer.clean();
	}
}