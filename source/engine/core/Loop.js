import {MainRenderer} from './../renderer/MainRenderer';
import {Scene} from './../scene/Scene';
import {VAOManager} from './../manager/VAOManager';
import {Inputs} from './../control/Inputs';

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
	var _inputs = new Inputs(_scene);
	
	// methods
	this.update = function() {
		_renderer.render(_scene);
		_scene.getCamera().move();
	}
	
	this.stop = function() {
		_renderer.clean();
		buffers.clean();
	}
};

export {Loop, buffers};