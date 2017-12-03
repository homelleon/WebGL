function Vertex(position, texture) {

	const BYTES = 14 * Float.BYTES;
	const FLOATS = 14;
	
	var __position = position;
	var __normal = new Vector3f(0, 0, 0);
	var __textureCoord = texture || new Vector2f(0, 0);
	var __tangent;
	var __bitangent;
	var __dublicateVertex = null;

	this.getPosition = function() {
		return __position;
	}

	this.setPosition = function(position) {
		__position = position;
	}

	this.getTextureCoord = function() {
		return textureCoord;
	}

	this.setTextureCoord = function(textureCoord) {
		__textureCoord = textureCoord;
	}


	this.getNormal = function() {
		return __normal;
	}

	this.setNormal = function(normal) {
		__normal = normal;
	}
	
	this.setDubilcateVertex = function(vertex) {
		__dublicateVertex = vertex;
	}
	
	this.getDublicateVertex = function() {
		return __dublicateVertex;
	}

	this.getTangent = function() {
		return __tangent;
	}

	this.setTangent = function(tangent) {
		__tangent = tangent;
	}

	this.getBitangent = function() {
		return __bitangent;
	}

	this.setBitangent = function(bitangent) {
		__bitangent = bitangent;
	}
	
}