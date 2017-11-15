import initializeWebGL from './engine/core/WebGL';

window.onload = function() {
	var gl = new initializeWebGL("600px","800px");
	gl.viewport(0,0,600,800);
};
