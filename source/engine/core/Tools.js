import {Maths} from './../math/Maths';

const shaderArray = [
	'./../shader/EntityShader/entity_VS.glsl',
	'./../shader/EntityShader/entity_FS.glsl',
	'./../shader/TestShader/test_VS.glsl',
	'./../shader/TestShader/test_FS.glsl'
	];

function initTools() {
	// add new math functions
	var maths = new Maths();
	for(var key in maths) {
		Math[key] = maths[key].bind(maths); 
	}
}

function initShaders() {
	var shaders = document.getElementById('shaders');
	for(var i = 0; i < shaderArray.length(); i++) {
	}
	
}

export {initTools};