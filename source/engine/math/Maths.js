import {Matrix4f} from './matrix/Matrix4f';
import {Vector3f} from './vector/Vector3f';
import {gl} from './../../index';

function Maths() {
	const PI = 3.14;
	
	this.toRadians = function (angle) {
		return (angle / 180) * PI;
	}
	
	this.createProjectionMatrix = function createProjectionMatrix(nearPlane, farPlane, FOV) {
		var projectionMatrix = new Matrix4f();
		var aspectRatio = gl.viewportWidth / gl.viewportHeight;
		var yScale = 1 / Math.tan(Math.toRadians(FOV / 2));
		var xScale = yScale / aspectRatio;
		var frustumLength = farPlane - nearPlane;
		
		projectionMatrix.setIdentity();
		
		projectionMatrix.m[0][0] = xScale;
		projectionMatrix.m[1][1] = yScale;
		projectionMatrix.m[2][2] = -((farPlane + nearPlane) / frustumLength); 
		projectionMatrix.m[2][3] = -1;
		projectionMatrix.m[3][2] = -((2 * nearPlane * farPlane) / frustumLength);
		projectionMatrix.m[3][3] = 0; 
		
		return projectionMatrix;
		
	}
	
	this.createViewMatrix = function createViewMatrix(camera) {
		var viewMatrix = new Matrix4f();
		viewMatrix.setIdentity();
		viewMatrix.rotate(Math.toRadians(camera.pitch), new Vector3f(1, 0, 0));
		viewMatrix.rotate(Math.toRadians(camera.yaw), new Vector3f(0, 1, 0));
		viewMatrix.rotate(Math.toRadians(camera.roll), new Vector3f(0, 0, 1));
		var negativeCameraPosition = new Vector3f(
				-camera.position.x, -camera.position.y, -camera.position.z);
		viewMatrix.translate3f(negativeCameraPosition);
		
		return viewMatrix;
	}
	
	
}

export {Maths};