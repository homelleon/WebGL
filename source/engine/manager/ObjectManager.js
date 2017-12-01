/**
 * Manages scene objects.
 * 
 */
function ObjectManager() {
	var elements = [];
	
	this.add = function add(element) {
		elements.push(element);
	}
	
	this.get = function get(index) {
		return elements[index];
	}
}

export {ObjectManager};