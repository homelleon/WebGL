/**
 * Object mesh containing buffer object information.
 * 
 * @param name - mesh name
 * @param vao - vertex array object
 */
function Mesh(name, vao) {
	var _name = name;
	var _vao = vao;
	
	this.getName = function() {
		return _name;
	}
	
	this.getVAO = function() {
		return _vao;
	}
}

export {Mesh};