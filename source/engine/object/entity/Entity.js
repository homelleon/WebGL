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
	var name = name;
	var position = position;
	var rotation = new Vector3f( 0, 0, 0 );
	var models = [];
	var scale = 1;
	var isVisible = false;
	var isMoved = false;
	var isChosen = false;
	var position = position || new Vector3f( 0, 0, 0 );
	
	models.push(model);
	
	/**
	 * Increases entity position due to arguments. 
	 */
	this.increasePosition = function(x, y, z) {
		position.x += x;
		position.y += y;
		position.z += z;
	}
	
	/**
	 * Increases entity rotation due to arguments.
	 */
	this.increaseRotation = function(x, y, z) {
		rotation.x += x;
		rotation.y += y;
		rotation.z += z;
	}
	
	this.getName = function() {
		return name;
	}
	
	this.getPosition = function() {
		return position;
	}
	
	this.getRotation = function() {
		return rotation;
	}
	
	this.getModels = function() {
		return models;
	}
	
	this.getScale = function() {
		return scale;
	}
	
	this.isVisible = function() {
		return isVisible;
	}
	
	this.isMoved = function() {
		return isMoved;
	}
	
	this.isChosen = function() {
		return isChosen;
	}
	
}

export {Entity};