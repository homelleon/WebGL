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
	var _name = name;
	var _position = position;
	var _rotation = new Vector3f( 0, 0, 0 );
	var _models = [];
	var _scale = 1;
	var _isVisible = false;
	var _isMoved = false;
	var _isChosen = false;
	var _position = position || new Vector3f( 0, 0, 0 );
	
	_models.push(model);
	
	/**
	 * Increases entity position due to arguments. 
	 */
	this.increasePosition = function(x, y, z) {
		_position.x += x;
		_position.y += y;
		_position.z += z;
	}
	
	/**
	 * Increases entity rotation due to arguments.
	 */
	this.increaseRotation = function(x, y, z) {
		_rotation.x += x;
		_rotation.y += y;
		_rotation.z += z;
	}
	
	this.getName = function() {
		return _name;
	}
	
	this.getPosition = function() {
		return _position;
	}
	
	this.getRotation = function() {
		return _rotation;
	}
	
	this.getModels = function() {
		return _models;
	}
	
	this.getScale = function() {
		return _scale;
	}
	
	this.isVisible = function() {
		return _isVisible;
	}
	
	this.isMoved = function() {
		return _isMoved;
	}
	
	this.isChosen = function() {
		return _isChosen;
	}
	
}

export {Entity};