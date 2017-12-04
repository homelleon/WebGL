/**
 * Manages scene objects.
 * 
 */
function ObjectManager() {
	var _elements = [];
	
	this.add = function(element) {
		_elements.push(element);
	}
	
	this.get = function(index) {
		return _elements[index];
	}
}

export {ObjectManager};