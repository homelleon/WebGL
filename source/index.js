import initializeWebGL from './engine/core/WebGL';
import Loop from './engine/core/Loop';

var gl;
var loop;

window.onload = init();

function init() {
	gl = new initializeWebGL("800px","1000px");
	gl.viewport(0, 0, 600, 800);
	loop = new Loop(gl);
	while(true) {
		loop.update();
	}
	loop.stop();
};