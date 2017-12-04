import {Test} from './../../../source/engine/math/Maths';

function MathsTest() {
	describe('Maths class test', () => {
		var maths;
		const PI = 3.14;
		beforeEach(maths = new Maths());
		describe('Maths function tests', () => {
			test('should return 1 * PI for 90 degrees angle', () => {
				expect(Maths.toRadiants(90)).toBe(1 * PI);
			})
		})
	})
}

export {MathsTest};