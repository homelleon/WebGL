function Inputs(scene) {	
	var _scene = scene;
	var _camera = scene.getCamera();
	// camera move
	const moveSpeed = 0.1;
	
	var move = function(event) {
		if(event.keyCode == 65) {
			_camera.addSpeed(-moveSpeed);
		}
		
		if(event.keyCode == 68) {
			_camera.addSpeed(moveSpeed)
		}
		
		if(event.keyCode == 87) {
			_camera.addSpeed(0, -moveSpeed);
		}
		
		if(event.keyCode == 83) {
			_camera.addSpeed(0, moveSpeed);
		}
		
		if(event.keyCode == 32) {
			_scene.getCamera().increasePosition(0, moveSpeed, 0);
		}
		
		if(event.keyCode == 67) {
			_scene.getCamera().increasePosition(0, -moveSpeed, 0);
		}
	};
	
	var x = 400;
	var y = 300;
	
	const turnSpeed = 0.02;
	// camera rotation
	var rotate = function(event) {
		var xOffset = x - event.clientX;
		var yOffset = y - event.clientY;
		
		if(xOffset) {
			_camera.addTurnSpeed(turnSpeed);
		}
		
		if(yOffset) {
			_camera.addTurnSpeed(0, turnSpeed);
		}
	}
	
	document.addEventListener("keydown", move);
	document.getElementById('gl').addEventListener("mousemove", rotate);
}

export {Inputs};