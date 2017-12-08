function Vector2f(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.sub = function(leftValue, rightValue) {
		if(!r) {
			if(typeof leftVector == "number") {
				this.x -= leftValue;
				this.y -= leftValue;
			} else {
				this.x -= leftValue.x;
				this.y -= leftValue.y;	
			}			
			
			return this;
		} else {
			return new Vector2f(leftValue.x - rightValue.x, leftValue.y - rightValue.y); 
		}
	}
}

export {Vector2f};