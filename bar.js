export default function bar() {
	var Class = function(name) {
		this.name = name;
	};
	
	Class.prototype.say = function() {
		return this.name + " is my name!";
	};
}