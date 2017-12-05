function MeshObject() {
	var _polygonGroups = [];
	var _name = "";
	
	this.getPolygonGroups = function() {
		return _polygonGroups;
	}
	
	this.setPolygonGroups = function(polygonGroups) {
		_polygonGroups = polygonGroups;
	}
	
	this.getName = function() {
		return _name;
	}
	
	this.setName = function(name) {
		_name = name;
	}
}

export {MeshObject};