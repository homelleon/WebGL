/**
 * Object model contatining object mesh and material
 * information.
 *  
 * @param name - model name 
 * @param mesh - mesh for current model
 * @param material - material for current model
 */
function Model(name, mesh, material) {
	this.name = name;
	this.mesh = mesh;
	this.material = material;
}

export {Model};