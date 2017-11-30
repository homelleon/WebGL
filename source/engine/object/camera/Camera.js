import {Vector3f} from './../../math/vector/Vector3f';
import {Matrix4f} from './../../math/matrix/Matrix4f';

function Camera() {
	this.position = new Vector3f(0, 0, 0); 
	this.pitch = 20;
	this.yaw = 0;
	this.roll = 0;
	
	this.getViewMatrix = function getViewMatrix() {
		var viewMatrix = new Matrix4f();
		viewMatrix.setIdentity();
		viewMatrix.rotate(Math.toRadians(this.pitch), new Vector3f(1, 0, 0));
		viewMatrix.rotate(Math.toRadians(this.yaw), new Vector3f(0, 1, 0));
		viewMatrix.rotate(Math.toRadians(this.roll), new Vector3f(0, 0, 1));
		var negativeCameraPosition = new Vector3f(-this.position.x, -this.position.y, -this.position.z);
		viewMatrix.translate3f(negativeCameraPosition);
		
		return viewMatrix;
	}
}

export {Camera};