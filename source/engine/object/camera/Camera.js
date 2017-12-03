import {Vector3f} from './../../math/vector/Vector3f';
import {Matrix4f} from './../../math/matrix/Matrix4f';

function Camera(name) {
	var name = name;
	var position = new Vector3f(0, 0, 0); 
	var pitch = 20;
	var yaw = 0;
	var roll = 0;
	
	this.getViewMatrix = function() {		
		return Math.createViewMatrix(this);
	}
	
	this.increasePosition = function(x, y, z) {
		position.x += x;
		position.y += y;
		position.z += z;		
	}
	
	this.increaseRotation = function(x, y, z) {
		roll += x;
		yaw += y;
		pitch += z;
	}
	
	this.getName = function(name) {
		return name;
	}
	
	this.getPosition = function() {
		return position;
	}
	
	this.getPitch = function() {
		return pitch;
	}
	
	this.getYaw = function() {
		return yaw;
	}
	
	this.getRoll = function() {
		return roll;
	}
}

export {Camera};