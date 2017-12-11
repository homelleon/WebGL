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
	var _reflectiveFactor = 0;
	var _refractiveFactor = 0;
	var _refractiveIndex = 0;
	var _emission = 0;
	
	var _useFakeLighting = false;
	
	this.getDiffuseMap = function() {
		return _diffuseMap;
	}
	
	this.setDiffuseMap = function(diffuseMap) {
		_diffuseMap = diffuseMap;
	}
	
	this.getNormalMap = function() {
		return _normalMap;
	}
	
	this.setNormalMap = function(normalMap) {
		_normalMap = normalMap;
	}
	
	this.getDisplaceMap = function() {
		return _displaceMap;
	}
	
	this.setDisplaceMap = function(displaceMap) {
		_displaceMap = displaceMap;
	}
	
	this.getAmbientMap = function() {
		return _ambientMap;
	}
	
	this.setAmbientMap = function(ambientMap) {
		_ambientMap = ambientMap;
	}
	
	this.getSpecularMap = function() {
		return _specularMap;
	}
	
	this.setSpecularMap = function(specularMap) {
		_specularMap = specularMap;
	}
	
	this.getAlphaMap = function() {
		return _alphaMap;
	}
	
	this.seAlphaMap = function(alphaMap) {
		_alphaMap = alphaMap
	}
	
	this.getDiffuseColor = function() {
		return _diffuseColor;
	}
	
	this.setDiffuseColor = function(color) {
		_diffuseColor = diffuseColor;
	}
	
	this.getShininess = function() {
		return _shininess;
	}
	
	this.setShininess = function(shininess) {
		_shininess = shininess;
	}
	
	this.getReflectivity = function() {
		return _reflectivity;
	}
	
	this.setReflectivity = function(reflectivity) {
		_reflectivity = reflectivity;
	}
	
	this.getReflectiveFactor = function() {
		return _reflectiveFactor;
	}
	
	this.setReflectiveFactor = function(factor) {
		_reflectiveFactor = factor;
	}
	
	this.getRefractiveFactor = function()  {
		return _refractiveFactor;
	}
	
	this.setRefractiveFactor = function(factor) {
		_refractiveFactor = factor;
	}
	
	this.getRefractiveIndex = function() {
		return _refractiveIndex;
	}
	
	this.setRefractiveIndex = function(index) {
		_refractiveIndex = index;
	}
	
	this.getEmission = function() {
		return _emission;
	}
	
	this.setEmission = function(emission) {
		_emission = emission;
	}
}

export {Material};