export default function display(canvas) {
	var display = function() {
		this.canvas = canvas;
		this.height = canvas.height;
		this.width = canvas.width;
	}
	return display;
};