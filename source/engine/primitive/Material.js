/**
 * Object material containing textures and color informations.
 * 
 * @param name - material name
 */
function Material(name) {
	// initialization
	var name = name;
	// map
	var diffuseMap = null;
	var normalMap = null;
	var displaceMap = null;
	var ambientMap = null;
	var specularMap = null;
	var alphaMap = null;
	// params
	var diffuseColor = null;
	var shininess = 1;
	var reflectivity = 0;
	var reflecriveFactor = 0;
	var refractiveFactor = 0;
	var refractiveIndex = 0;
	var emission = 0;
	
	var useFakeLighting = false;
}

export {Material};