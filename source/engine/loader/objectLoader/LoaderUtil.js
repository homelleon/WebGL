/**
 * Util class for object loader.
 */
function LoaderUtil() {
	
	this.removeEmptyStrings = function(data) {
		var result = [];
		for(var i = 0; i < data.length; i++) {
			if(!data[i] == "") {
				result.push(data[i]);
			}
		}
		
		return result;
	}
	
	this.generateNormalsCW = function(vertices, indices) {
    	for (var i = 0; i < indices.length; i += 3 ) {
    		var v0 = vertices[indices[i    ]].getPos();
    	    var v1 = vertices[indices[i + 1]].getPos();
    	    var v2 = vertices[indices[i + 2]].getPos();
    	        
    	    var normal = v1.sub(v0).cross(v2.sub(v0)).normalize();
    	        
    	    vertices[indices[i	  ]].setNormal(vertices[indices[i    ]].getNormal().push(normal));
    	    vertices[indices[i + 1]].setNormal(vertices[indices[i + 1]].getNormal().push(normal));
    	    vertices[indices[i + 2]].setNormal(vertices[indices[i + 2]].getNormal().push(normal));
    	}
    
    	for (var i = 0; i < vertices.length; ++i ) {	
    	    vertices[i].setNormal(vertices[i].getNormal().normalize());
    	}       
	}
	
	this.generateNormalsCCW = function(vertices, indices)	{
	    for (var i = 0; i < indices.length; i += 3 ) {
	    	var v0 = vertices[indices[i    ]].getPos();
	    	var v1 = vertices[indices[i + 1]].getPos();
	    	var v2 = vertices[indices[i + 2]].getPos();
	        
	    	var normal = v2.sub(v0).cross(v1.sub(v0)).normalize();
	        
	        vertices[indices[i	  ]].setNormal(vertices[indices[i    ]].getNormal().push(normal));
	        vertices[indices[i + 1]].setNormal(vertices[indices[i + 1]].getNormal().push(normal));
	        vertices[indices[i + 2]].setNormal(vertices[indices[i + 2]].getNormal().push(normal));
	    }

	    for (var i = 0; i < vertices.length; ++i ) {	
	    	vertices[i].setNormal(vertices[i].getNormal().normalize());
	    }       
	}
	
	this.peekLast = function() {
		return this[this.length - 1];
	}
};

export {LoaderUtil};