/**
 * Object material containing textures and color informations.
 * 
 * @param name - material name
 */
function Material(name) {
	// initialization
	var __name = name;
	// map
	var __diffuseMap = null;
	var __normalMap = null;
	var __displaceMap = null;
	var __ambientMap = null;
	var __specularMap = null;
	var __alphaMap = null;
	// params
	var __diffuseColor = null;
	var __shininess = 1;
	var __reflectivity = 0;
	var __reflecriveFactor = 0;
	var __refractiveFactor = 0;
	var __refractiveIndex = 0;
	var __emission = 0;
	
	var __useFakeLighting = false;
}

export {Material};