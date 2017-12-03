import {MainRenderer} from './../renderer/MainRenderer';
import {Scene} from './../scene/Scene';
import {VAOManager} from './../manager/VAOManager';

var buffers = null;

/**
 * Engine loop.
 * 
 */
function Loop() {
	// initialization	
	var renderer = new MainRenderer();
	buffers = new VAOManager();
	var scene = new Scene();
	// methods
	this.update = function() {
		renderer.render(scene);
	}
	
	this.stop = function() {
		renderer.clean();
		buffers.clean();
	}
}

export {Loop, buffers};