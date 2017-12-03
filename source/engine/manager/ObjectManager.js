/**
 * Manages scene objects.
 * 
 */
function ObjectManager() {
	var __elements = [];
	
	this.add = function(element) {
		__elements.push(element);
	}
	
	this.get = function(index) {
		return __elements[index];
	}
}

export {ObjectManager};