import {Maths} from './../../../../source/engine/math/Maths';
import {Matrix4f} from './../../../../source/engine/math/matrix/Matrix4f';

function testMath() {	
	describe('Maths class test', () => {
		// initialize test variables
		const PI = 3.14;
		var maths = new Maths(); // object to test
		describe('Maths \'toRadiants\' method test', () => {
			// arguments to test
			var angleArray = [
				0, 10, 45, 90, 180, 270, 360, - 10
			];
			
			for(var i = 0; i < angleArray.length; i++) {
				// initialize suites variables
				var angle = angleArray[i];
				var result = angleArray[i] / 180 * PI;
				it('should return ' + result + ' for ' + angle + ' degrees angle', () => {
					expect(maths.toRadians(angle)).toBe(result);
				})
			}
		})
		describe('Maths \'createProjectionMatrix\' method test', () => {
			// arguments to test
			var args = [
				// nearPlane, farPlane, FOV
				[0.1, 1000, 70],
				[0.2, 10000, 120],
				[1, 500, 30],
				[20, 2000, 115],
				[17.2, 505, 90],
				[0, 10000, 12]
			];
			
			// initialize common test variables
			var width = 800;
			var height = 600;
			var aspectRation = width / height;
			
			var gl = jest.fn();
			gl.viewportWidth = width;
			gl.viewportHeight = height;
			
			for(var i = 0; i < args.length; i++) {
				// initialize suites variables
				var nearPlane = args[i][0];
				var farPlane = args[i][1];
				var FOV = args[i][2];
				
				var projectionMatrix = new Matrix4f();
				var yScale = 1 / Math.tan(maths.toRadians(FOV / 2));
				var xScale = yScale / aspectRation;
				var frustumLength = farPlane - nearPlane;
				
				projectionMatrix.setIdentity();
				
				projectionMatrix.m[0][0] = xScale;
				projectionMatrix.m[1][1] = yScale;
				projectionMatrix.m[2][2] = -((farPlane + nearPlane) / frustumLength); 
				projectionMatrix.m[2][3] = -1;
				projectionMatrix.m[3][2] = -((2 * nearPlane * farPlane) / frustumLength);
				projectionMatrix.m[3][3] = 0;
				
				it('should return same object for arguments: ' + nearPlane + ', ' + farPlane + ', ' + FOV, () => {
					expect(maths.createProjectionMatrix(nearPlane, farPlane, FOV).equal(projectionMatrix)).toBeTruthly();
				})				
			}
			
		})
	})
}

export {testMath};