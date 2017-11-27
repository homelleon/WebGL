export function Maths() {
	const PI = 3.14;
	
	this.toRadians = function (angle) {
		return (angle / 180) * PI;
	}
	
}