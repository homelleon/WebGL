import {Maths} from './../../../../source/engine/math/Maths';

function testMath() {
	describe('Maths class test', () => {
		var maths;
		const PI = 3.14;
		maths = new Maths();
		console.log(maths.toRadians(90));
		describe('Maths function tests', () => {
			test('should return 1 * PI for 90 degrees angle', () => {
				expect(maths.toRadians(90)).toBe(0.5 * PI);
			})
		})
	})
}

export {testMath};