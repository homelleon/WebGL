/**
 * Object mesh containing buffer object information.
 * 
 * @param name - mesh name
 * @param vao - vertex array object
 */
function Mesh(name, vao) {
	this.name = name;
	this.vao = vao;
}

export {Mesh};