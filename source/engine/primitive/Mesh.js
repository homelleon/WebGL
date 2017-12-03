/**
 * Object mesh containing buffer object information.
 * 
 * @param name - mesh name
 * @param vao - vertex array object
 */
function Mesh(name, vao) {
	var __name = name;
	var __vao = vao;
	
	this.getName = function() {
		return __name;
	}
	
	this.getVAO = function() {
		return __vao;
	}
}

export {Mesh};