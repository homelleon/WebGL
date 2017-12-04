/**
 * Object material containing textures and color informations.
 * 
 * @param name - material name
 */
function Material(name) {
	// initialization
	var _name = name;
	// map
	var _diffuseMap = null;
	var _normalMap = null;
	var _displaceMap = null;
	var _ambientMap = null;
	var _specularMap = null;
	var _alphaMap = null;
	// params
	var _diffuseColor = null;
	var _shininess = 1;
	var _reflectivity = 0;
	var _reflecriveFactor = 0;
	var _refractiveFactor = 0;
	var _refractiveIndex = 0;
	var _emission = 0;
	
	var _useFakeLighting = false;
}

export {Material};