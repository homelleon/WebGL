function Face() {

	var __indices = [];
	var __material;

	this.getIndices = function() {
		return __indices;
	}

	this.setIndices = function(indices) {
		__indices = indices;
	}

	this.getMaterial = function() {
		return __material;
	}

	this.setMaterial = function(material) {
		__material = material;
	}
}

export {Face};