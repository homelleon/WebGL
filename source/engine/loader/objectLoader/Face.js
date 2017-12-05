function Face() {

	var _indices = [];
	var _material;

	this.getIndices = function() {
		return _indices;
	}

	this.setIndices = function(indices) {
		_indices = indices;
	}

	this.getMaterial = function() {
		return _material;
	}

	this.setMaterial = function(material) {
		_material = material;
	}
}

export {Face};