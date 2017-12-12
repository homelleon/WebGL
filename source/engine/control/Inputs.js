import {Mouse} from './Mouse'; 

function Inputs(scene) {
	var _scene = scene;
	var _camera = scene.getCamera();
	var _mouse = new Mouse(400, 300);
	
	// camera move
	const moveSpeed = 0.1;
	
	var move = function(event) {
		if(event.keyCode == 65) { // a
			_camera.addSpeed(0, -moveSpeed);
		}
		
		if(event.keyCode == 68) { // d
			_camera.addSpeed(0, moveSpeed)
		}
		
		if(event.keyCode == 87) { // w
			_camera.addSpeed(-moveSpeed);
		}
		
		if(event.keyCode == 83) { // s
			_camera.addSpeed(moveSpeed);
		}
		
		if(event.keyCode == 32) { // space
			_camera.increasePosition(0, 5, 0);
		}
		
		if(event.keyCode == 67) { // c
			_camera.increasePosition(0, -5, 0);
		}
	};
	
	var activateCamRotation = function() {
		_camera.setCanRotate(true);
	};
	
	var deactivateCamRotation = function() {
		_camera.setCanRotate(false);
	}
	
	document.addEventListener("keydown", move);
	document.addEventListener("mousedown", activateCamRotation);
	document.addEventListener("mouseup", deactivateCamRotation);
	
	this.update = function() {
		_camera.addTurnSpeed(_mouse.getDX(), _mouse.getDY());
		_mouse.update();
	}
	
	this.getMouse = function() {
		return _mouse;
	}
}

export {Inputs};