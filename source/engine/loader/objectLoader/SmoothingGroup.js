function SmoothingGroup() {
	var _faces = [];
	var _vertices = [];
	
	this.getVertices = function() {
		return _vertices;
	}
	
	this.setVertices = function() {
		_vertices = vertices;
	}
	
	this.getFaces = function() {
		return _faces;
	}
	
	this.setFaces = function() {
		_faces = faces;
	}
}

export {SmoothingGroup};