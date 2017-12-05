import {Matrix4f} from './matrix/Matrix4f';
import {Vector3f} from './vector/Vector3f';
import {gl} from './../../index';

/**
 * Utility maths calculataion class.
 */
function Maths() {
	const PI = 3.14;
	
	/**
	 * Shifts angle into radian. 
	 */
	this.toRadians = function(angle) {
		return (angle / 180) * PI;
	}
	
	/**
	 * Creates perspective transformation (projection) matrix from arguments.
	 * 
	 * @param nearPlane - Vector4f-type object argument of nearest clipping plane
	 * @param farPlane - Vector4f-type object argument of farthest clipping plane
	 * @param FOV - Number-type argument of field of view
	 *  
	 * @return Matrix4f-type object of projection Matrix
	 */
	this.createProjectionMatrix = function(nearPlane, farPlane, FOV) {
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
	
	/**
	 * Creates camera view transformation (view) matrix from camera object.
	 * 
	 * @param camera - Camera-type object argument
	 * 
	 * @return Matrix4f-type object of view matrix
	 */
	this.createViewMatrix = function(camera) {
		var viewMatrix = new Matrix4f();
		viewMatrix.setIdentity();
		viewMatrix.rotate(Math.toRadians(camera.getPitch()), new Vector3f(1, 0, 0));
		viewMatrix.rotate(Math.toRadians(camera.getYaw()), new Vector3f(0, 1, 0));
		viewMatrix.rotate(Math.toRadians(camera.getRoll()), new Vector3f(0, 0, 1));
		var negativeCameraPosition = new Vector3f(
				-camera.getPosition().x, -camera.getPosition().y, -camera.getPosition().z);
		viewMatrix.translate3f(negativeCameraPosition);
		
		return viewMatrix;
	}
	
	
}

export {Maths};