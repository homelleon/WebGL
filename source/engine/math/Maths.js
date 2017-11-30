import {Matrix4f} from './matrix/Matrix4f';

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
	
}

export {Maths};