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
	var _renderer = new MainRenderer();
	buffers = new VAOManager();
	var _scene = new Scene();
	
	// methods
	this.update = function() {
		_renderer.render(_scene);
	}
	
	this.stop = function() {
		_renderer.clean();
		buffers.clean();
	}
}

export {Loop, buffers};