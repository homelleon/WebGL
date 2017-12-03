/**
 * Object model contatining object mesh and material
 * information.
 *  
 * @param name - model name 
 * @param mesh - mesh for current model
 * @param material - material for current model
 */
function Model(name, mesh, material) {
	var name = name;
	var mesh = mesh;
	var material = material;
	
	this.getMesh = function() {
		return mesh;
	}
	
	this.getMaterial = function() {
		return material;
	}
}

export {Model};