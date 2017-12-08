function PolygonGroup() {
	var _polygons = [];
	var _smoothingGroups = new Map();
	var _name = "";
	
	this.getPolygons = function() {
		return _polygons;
	}
	
	this.setPolygons = function(polygons) {
		_polygons = polygons;
	}
	
	this.getName = function() {
		return _name;
	}
	
	this.setName = function(name) {
		_name = name;
	}
	
	this.getSmoothingGroups = function() {
		return _smoothingGroups;
	}
	
	this.setSmoothingGroups = function(smoothingGroups) {
		_smoothingGroups = smoothingGroups;
	}
}

export {PolygonGroup};