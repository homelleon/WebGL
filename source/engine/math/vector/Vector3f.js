function Vector3f(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.sub = function(leftVector, rightVector) {
		if(!rightVector) {
			this.x = this.x - leftVector.x;
			this.y = this.y - leftVector.y;
			this.z = this.z - leftVector.z;
			
			return this;
		} else {
			return new Vector3f(leftVector.x - rightVector.x, 
					leftVector.y - rightVector.y,
					leftVector.z - rightVector.z);
		} 
	}
} 

export {Vector3f};