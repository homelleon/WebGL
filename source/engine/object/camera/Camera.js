import {Vector3f} from './../../math/vector/Vector3f';
import {Matrix4f} from './../../math/matrix/Matrix4f';

function Camera(name) {
	var _name = name;
	var _position = new Vector3f(0, 0, 0); 
	var _pitch = 20;
	var _yaw = 0;
	var _roll = 0;
	
	this.getViewMatrix = function() {		
		return Math.createViewMatrix(this);
	}
	
	this.increasePosition = function(x, y, z) {
		_position.x += x;
		_position.y += y;
		_position.z += z;		
	}
	
	this.increaseRotation = function(x, y, z) {
		_roll += x;
		_yaw += y;
		_pitch += z;
	}
	
	this.getName = function(name) {
		return _name;
	}
	
	this.getPosition = function() {
		return _position;
	}
	
	this.getPitch = function() {
		return _pitch;
	}
	
	this.getYaw = function() {
		return _yaw;
	}
	
	this.getRoll = function() {
		return _roll;
	}
}

export {Camera};