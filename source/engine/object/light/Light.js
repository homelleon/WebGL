import {Vecto3f} from './../math/vector/Vector3f';

function Light(position) {
	this.position = position | new Vector3f(0, 0, 0);
}

export {Light};