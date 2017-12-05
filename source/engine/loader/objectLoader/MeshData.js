function MeshData(vertices, indices) {
	var _vertices = vertices;
	var _indices = indices;
	var _instances;
	var _isTangentSpace = false;
	var _isInstanced = false;
	
	this.getVertices = function() {
		return _vertices;
	}
	
	this.setVertices = function(vertices) {
		_vertices = vertices;
	}
	
	this.getIndices = function() {
		return _indices;
	}
	
	this.setIndices = function() {
		_indices = indices;
	}
	
	this.isInstanced = function() {
		return _isInstanced;
	}
	
	this.setInstanced = function(instanced) {
		_isInstanced = instaced;
	}
	
	this.getInstances = function() {
		return _instances;
	}
	
	this.setInstances = function(instances) {
		_instances = instances;
	}
	
	this.isTangentSpace = function() {
		return _isTangentSpace;
	}
	
	this.setTangentSpace = function(isTangentSpace) {
		_isTangentSpace = isTangentSpace;
	}
	
}

export {MeshData};