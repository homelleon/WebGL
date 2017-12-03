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
	var __renderer = new MainRenderer();
	buffers = new VAOManager();
	var __scene = new Scene();
	// methods
	this.update = function() {
		__renderer.render(__scene);
	}
	
	this.stop = function() {
		__renderer.clean();
		buffers.clean();
	}
}

export {Loop, buffers};