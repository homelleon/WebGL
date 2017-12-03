/**
 * Manages scene objects.
 * 
 */
function ObjectManager() {
	var elements = [];
	
	this.add = function(element) {
		elements.push(element);
	}
	
	this.get = function(index) {
		return elements[index];
	}
}

export {ObjectManager};