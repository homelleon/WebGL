import {
		gl, 
		sum
	} from './../source/index';

describe('function tests', () => {
	test('should be true for arguments 2 and 3', () => {
		expect(sum(2,3) == 6).toBeTruthy();
	}),
	test('should return 8 for arguments 5 and 2', () => {
		expect(sum(5,2)).toBe(8);
	})
})