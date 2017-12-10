import {Vector3f} from './../../math/vector/Vector3f';
import {Matrix4f} from './../../math/matrix/Matrix4f';

function Camera(name) {
	var _name = name;
	var _position = new Vector3f(0, 0, 0); 
	var _pitch = 20;
	var _yaw = 0;
	var _roll = 0;
	var _target = null;
	var _targetAngle = 0;
	var _targetDistance = 0;
	var _currentTurnSpeed = 0;
	var _currentPitchSpeed = 0;
	var _currentForwardSpeed = 0;
	var _currentStrafeSpeed = 0;
	
	this.move = function() {
		var yawAngle = _currentTurnSpeed * 20;
		var pitchAngle = _currentPitchSpeed * 20;
		var forwardDistance = _currentForwardSpeed * 20;
		var strafeDistance = _currentStrafeSpeed * 20;
		
		this.increaseRotation(0, yawAngle, pitchAngle);
		
		var dx = forwardDistance * Math.sin(Math.toRadians(-_yaw)) +
			strafeDistance * Math.sin(Math.toRadians(-_yaw + 90));
		var dy = forwardDistance * Math.sin(Math.toRadians(_pitch)) +
			strafeDistance * Math.cos(Math.toRadians(_pitch + 90));
		var dz = forwardDistance * Math.cos(Math.toRadians(-_yaw)) +
			strafeDistance * Math.cos(Math.toRadians(-_yaw + 90));
		
		this.increasePosition(dx, dy, dz);
		
		_currentTurnSpeed = 0;
		_currentPitchSpeed = 0;
		_currentForwardSpeed = 0;
		_currentStrafeSpeed = 0;
	}
	
	this.addSpeed = function(forward, slide) {
		if(forward) {
			_currentForwardSpeed += forward;
		}
		if(slide) {
			_currentStrafeSpeed += slide;
		}
	}
	
	this.addTurnSpeed = function(turn, pitch) {
		if(turn) {
			_currentTurnSpeed += turn;
		}
		if(pitch) {
			_currentPitchSpeed += pitch;
		}
	}
	
	this.attachTarget = function(target) {
		_target = target;
	}
	
	this.getViewMatrix = function() {		
		return Math.createViewMatrix(this);
	}
	
	this.increasePosition = function(x, y, z) {
		_position.x += x;
		_position.y += y;
		_position.z += z;		
	}
	
	this.increaseRotation = function(x, y, z) {
		_roll += x;
		_yaw += y;
		_pitch += z;
	}
	
	this.increaseTargetAngle = function(angle) {
		_targetAngle += angle;
	}
	
	this.increaseTargetDistance = function(distance) {
		_targetDistance += distance;
	}
	
	this.getName = function(name) {
		return _name;
	}
	
	this.getPosition = function() {
		return _position;
	}
	
	this.getPitch = function() {
		return _pitch;
	}
	
	this.getYaw = function() {
		return _yaw;
	}
	
	this.getRoll = function() {
		return _roll;
	}
}

export {Camera};