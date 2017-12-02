function OBJLoader() {
	var vertices = [];
	var normals = [];
	var texCoords = [];
	
	var objects = [];
	
	this.load = function load(file) {
		
		var mesh = null;
		var lines = file.split("/n");
		for(var i = 0; i < lines.length; i++) {  //for every new line
			var tokens = lines[i].split(" ");
			
			// empty token
			if(tokens.lengths == 0 || tokens[0] == "#") {
				continue;
			}
			
			if(tokens[0] == "v") {
				vertices.push(new Vertex(new Vector3f(
						+tokens[1], +tokens[2], +tokens[3])));
			}
			
			if(tokens[0] == "vn") {
				normals.push(new Vector3f(+tokens[1]), +tokens[2], +tokens[3]);
			}
			
			if(tokens[0] == "vt") {
				textCoords.push(new Vector2f(+tokens[1], +tokens[2]));
			}
			
			if(tokens[0] == "o") {
				var object = new MeshObject();
				object.name = tokens[1];
				objects.push(new MeshObject());
			}
			
			if(tokens[0] == "g") {
				var polygonGroup = new PolygonGroup();
				
				if(tokens.length > 1) {
					polygonGroup.name = tokens[1];
				}
				
				if(!objects.length) {
					objects.push(new MehsObject());
					objects[objects.length - 1].polygonGroups.push(polygonGroup);
				}
				
				if(tokens[0] == "usemtl") {
					// TODO: implement material parsing					
				}
				if(tokens[0] == "s") {
					if(!objects[objects.length - 1].polygonGroups.length) {
						objects[objects.length - 1].polygonGroups.add(new PolygonGroup());
					}
					
					if(tokens[1] == "off" || tokens[1] == 0) {
						currentSmoothingGroup = 0;						
						let groupsLength = objects[objects.length - 1].polygonGroups.length;
						
						if(!objects[objects.length - 1].polygonGroups[groupsLength - 1].smoothingGroups.containsKey(0)) {
							objects[objects.length - 1].polygonGroups[groupsLength - 1].smoothingGroups.put(currentSmoothingGroup, new SmoothingGroup());
						}
					} else {
						currentSmoothingGroup = +tokens[1];
						let groupsLength = objects[objects.length - 1].polygonGroups.length;
						if(!objects[objects.length - 1].polygonGroups[groupsLength - 1].smoothingGroups.contatinsKey(currentSmoothingGroup)) {
							objects[objects.length - 1].polygonGroups[groupsLength - 1].smoothingGroups.put(currentSmoothingGroup, new SmoothingGroup());
						}
					}
				}
				if(tokens[0] == "f") {
					if(!objects[objects.length - 1].polygonGroups.length) {
						objects[objects.length - 1].polygonGroups.push(new PolygonGroup());
					}
					
					let groupsLength = objects[objects.length - 1].polygonGroups.length;
					if(objects[objects.length - 1].polygonGroups[groupsLength - 1].smoothingGroups.isEmpty()) {
						currentSmoothingGroup = 1;
						objects[objects.length - 1].polygonGroups[groupsLength - 1].smoothingGroups.put(currentSmoothingGroup, new SmoothingGroup());
					}
					
					if(!objects[objects.length - 1].polygonGroups[groupsLength - 1].polygons.length) {
						objects[objects.length - 1].polygonGroups[groupsLength - 1].polygons.push(new Polygon());
					}
					
					if(tokens.length == 4) {
						parseTriangleFace(tokens);
					}
					
					if(tokens.length == 5) {
						parseQuadFace(tokens);
					}
				}
			}
			
		}
		
		if( !normals.length ) {
			for(let object in objects) {
				for(let polygonGroup in object.polygonGroups) {
					for(let key in polygonGroup.smoothingGroups.keySet()) {
						generateNormals(polygonGroup.smoothingGroups[key]);
					}
				}
			}
		}
		
		var meshes = [];
		
		for(let object in objects) {
			for(let polygonGroup in object.polygonGroups) {
				for(let polygon in polygonGroup.polygons) {
					generatePolygon(polygonGroup.smoothingGroups, polygon);
					let mesh = convert(polygon);
					meshes.push(mesh);
				}
			}
		}
		
		return meshes;		
	}
	
	var parseTriangleFace = function parseTriangleFace(tokens) {
		// vertex//normal
		// TODO: implement
	}
	
}

export {Loader};