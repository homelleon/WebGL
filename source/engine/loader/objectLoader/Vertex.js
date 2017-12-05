function Vertex(position, texture) {

	const BYTES = 14 * Float.BYTES;
	const FLOATS = 14;
	
	var _position = position;
	var _normal = new Vector3f(0, 0, 0);
	var _textureCoord = texture || new Vector2f(0, 0);
	var _tangent;
	var _bitangent;
	var _dublicateVertex = null;

	this.getPosition = function() {
		return _position;
	}

	this.setPosition = function(position) {
		_position = position;
	}

	this.getTextureCoord = function() {
		return textureCoord;
	}

	this.setTextureCoord = function(textureCoord) {
		_textureCoord = textureCoord;
	}


	this.getNormal = function() {
		return _normal;
	}

	this.setNormal = function(normal) {
		_normal = normal;
	}
	
	this.setDubilcateVertex = function(vertex) {
		_dublicateVertex = vertex;
	}
	
	this.getDublicateVertex = function() {
		return _dublicateVertex;
	}

	this.getTangent = function() {
		return _tangent;
	}

	this.setTangent = function(tangent) {
		_tangent = tangent;
	}

	this.getBitangent = function() {
		return _bitangent;
	}

	this.setBitangent = function(bitangent) {
		_bitangent = bitangent;
	}
	
}