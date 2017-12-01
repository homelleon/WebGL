import {Vector3f} from './../../math/vector/Vector3f';

/**
 * Engine scene object as entity.
 * 
 * @param name - entity name
 * @param model - entity model
 * @param position - entity position
 */
function Entity(name, model, position) {
	// initialization
	this.name = name;
	this.position = position;
	this.rotation = new Vector3f( 0, 0, 0 );
	this.models = [];
	this.scale = 1;
	this.isVisible = false;
	this.isMoved = false;
	this.isChosen = false;
	this.position = position | new Vector3f( 0, 0, 0 );
	
	this.models.push(model);
	
	/**
	 * Increases entity position due to arguments. 
	 */
	this.increasePosition = function increasePosition(x, y, z) {
		this.position.x += x;
		this.position.y += y;
		this.position.z += z;
	}
	
	/**
	 * Increases entity rotation due to arguments.
	 */
	this.increaseRotation = function increaseRotation(x, y, z) {
		this.rotation.x += x;
		this.rotation.y += y;
		this.rotation.z += z;
	}
	
}

export {Entity};