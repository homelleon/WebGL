/**
 * Object material containing textures and color informations.
 * 
 * @param name - material name
 */
function Material(name) {
	// initialization
	this.name = name;
	// map
	this.diffuseMap = null;
	this.normalMap = null;
	this.displaceMap = null;
	this.ambientMap = null;
	this.specularMap = null;
	this.alphaMap = null;
	// params
	this.diffuseColor = null;
	this.shininess = 1;
	this.reflectivity = 0;
	this.reflecriveFactor = 0;
	this.refractiveFactor = 0;
	this.refractiveIndex = 0;
	this.emission = 0;
	
	this.useFakeLighting = false;
}

export {Material};