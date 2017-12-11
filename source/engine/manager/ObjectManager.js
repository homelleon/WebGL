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
	
	this.length = function() {
		return _elements.length;
	}
}

export {ObjectManager};