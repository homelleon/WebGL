import {Maths} from './../math/Maths';

function initTools() {
	// add new math functions
	var maths = new Maths();
	for(var key in maths) {
		Math[key] = maths[key].bind(maths); 
	}
}

export {initTools};