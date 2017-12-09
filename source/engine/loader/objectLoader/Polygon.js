function Polygon() {
	
	var _material;
	var _vertices = [];
	var _indices = [];
	
	this.getMaterial = function() {
		return _material;
	}
	
	this.setMaterial = function(material) {
		_material = material;
	}
	
	this.getVertices = function() {
		return _vertices;
	}
	
	this.setVertices = function(vertices) {
		_vertices = vertices.slice();
	}
	
	this.getIndices = function() {
		return _indices;
	}
	
	this.setIndices = function(indices) {
		_indices = indices;
	}
}

export {Polygon};