import {Vector3f} from './../../math/vector/Vector3f';

function Light(position, color, attenuation) {
	var _position = position || new Vector3f(0, 0, 0);
	var _color = color || new Vector3f(1, 1, 0);  		// yellow
	var _attenuation = attenuation || new Vector3f(1, 0, 0); 
	
	this.getPosition = function() {
		return _position;
	}
		
	this.setPosition = function(position) {
		_position = position;
	}
	
	this.increasePosition = function(dx, dy, dz) {
		_position.x += dx;
		_position.y += dy;
		_position.z += dz;
	}

	this.getColor = function() {
		return _color;
	}
	
	this.setColor = function(color) {
		_color = color;
	}
	
	this.getAttenuation = function() {
		return _attenuation;
	}
	
	this.setAttenuation = function(attenuation) {
		_attenuation = attenuation;
	}
		
}

export {Light};