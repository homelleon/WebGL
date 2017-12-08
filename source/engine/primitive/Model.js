/**
 * Object model contatining object mesh and material
 * information.
 *  
 * @param name - model name 
 * @param mesh - mesh for current model
 * @param material - material for current model
 */
function Model(name, meshes, material) {
	var _name = name;
	var _meshes = meshes;
	var _material = material;
	
	this.getMeshes = function() {
		return _meshes;
	}
	
	this.getMaterial = function() {
		return _material;
	}
}

export {Model};