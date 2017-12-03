/**
 * Object model contatining object mesh and material
 * information.
 *  
 * @param name - model name 
 * @param mesh - mesh for current model
 * @param material - material for current model
 */
function Model(name, mesh, material) {
	var __name = name;
	var __mesh = mesh;
	var __material = material;
	
	this.getMesh = function() {
		return __mesh;
	}
	
	this.getMaterial = function() {
		return __material;
	}
}

export {Model};