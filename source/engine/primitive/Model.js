/**
 * Object model contatining object mesh and material
 * information.
 *  
 * @param name - model name 
 * @param mesh - mesh for current model
 * @param material - material for current model
 */
function Model(name, mesh, material) {
	var _name = name;
	var _mesh = mesh;
	var _material = material;
	
	this.getMesh = function() {
		return _mesh;
	}
	
	this.getMaterial = function() {
		return _material;
	}
}

export {Model};