/**
 * Object mesh containing buffer object information.
 * 
 * @param name - mesh name
 * @param vao - vertex array object
 */
function Mesh(name, vao) {
	var name = name;
	var vao = vao;
	
	this.getName = function() {
		return name;
	}
	
	this.getVAO = function() {
		return vao;
	}
}

export {Mesh};