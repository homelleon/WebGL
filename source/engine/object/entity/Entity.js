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
	var __name = name;
	var __position = position;
	var __rotation = new Vector3f( 0, 0, 0 );
	var __models = [];
	var __scale = 1;
	var __isVisible = false;
	var __isMoved = false;
	var __isChosen = false;
	var __position = position || new Vector3f( 0, 0, 0 );
	
	__models.push(model);
	
	/**
	 * Increases entity position due to arguments. 
	 */
	this.increasePosition = function(x, y, z) {
		__position.x += x;
		__position.y += y;
		__position.z += z;
	}
	
	/**
	 * Increases entity rotation due to arguments.
	 */
	this.increaseRotation = function(x, y, z) {
		__rotation.x += x;
		__rotation.y += y;
		__rotation.z += z;
	}
	
	this.getName = function() {
		return __name;
	}
	
	this.getPosition = function() {
		return __position;
	}
	
	this.getRotation = function() {
		return __rotation;
	}
	
	this.getModels = function() {
		return __models;
	}
	
	this.getScale = function() {
		return __scale;
	}
	
	this.isVisible = function() {
		return __isVisible;
	}
	
	this.isMoved = function() {
		return __isMoved;
	}
	
	this.isChosen = function() {
		return __isChosen;
	}
	
}

export {Entity};