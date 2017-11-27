import {Maths} from './../math/Maths';

export var maths;

export function initTools() {
	
	// add new math functions
	maths = new Maths();
	for(var key in maths) {
		Math[key] = maths[key].bind(maths); 
	}
}