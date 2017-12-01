import {Vector3f} from './../../math/vector/Vector3f';
import {Matrix4f} from './../../math/matrix/Matrix4f';

function Camera(name) {
	this.name = name;
	this.position = new Vector3f(0, 0, 0); 
	this.pitch = 20;
	this.yaw = 0;
	this.roll = 0;
	
	this.getViewMatrix = function getViewMatrix() {		
		return Math.createViewMatrix(this);
	}
	
	this.increasePosition = function increasePosition(x, y, z) {
		this.position.x += x;
		this.position.y += y;
		this.position.z += z;		
	}
	
	this.increaseRotation = function increaseRotation(x, y, z) {
		this.roll += x;
		this.yaw += y;
		this.pitch += z;
	}
}

export {Camera};