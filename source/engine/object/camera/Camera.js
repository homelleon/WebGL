import {Vector3f} from './../../math/vector/Vector3f';
import {Matrix4f} from './../../math/matrix/Matrix4f';

function Camera(name) {
	var __name = name;
	var __position = new Vector3f(0, 0, 0); 
	var __pitch = 20;
	var __yaw = 0;
	var __roll = 0;
	
	this.getViewMatrix = function() {		
		return Math.createViewMatrix(this);
	}
	
	this.increasePosition = function(x, y, z) {
		__position.x += x;
		__position.y += y;
		__position.z += z;		
	}
	
	this.increaseRotation = function(x, y, z) {
		__roll += x;
		__yaw += y;
		__pitch += z;
	}
	
	this.getName = function(name) {
		return __name;
	}
	
	this.getPosition = function() {
		return __position;
	}
	
	this.getPitch = function() {
		return __pitch;
	}
	
	this.getYaw = function() {
		return __yaw;
	}
	
	this.getRoll = function() {
		return __roll;
	}
}

export {Camera};