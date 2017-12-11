function Mouse(widthCenter, heightCenter) {
	
	var _x = widthCenter  || 0;
	var _y = heightCenter || 0;
	var _dX = 0;
	var _dY = 0;
	
	this.update = function() {
		_dX = 0;
		_dY = 0;
	}
	
	var moveUpdate = function(event) {
		_dX = _x - event.clientX;
		_dY = _y - event.clientY;
		_x = event.clientX;
		_y = event.clientY;
	}
	
	this.getDX = function() {
		return _dX;
	}
	
	this.getDY = function() {
		return _dY;
	}
	
	document.addEventListener("mousemove", moveUpdate);
	
};

export {Mouse};