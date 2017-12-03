function OBJLoader(generateTangents) {
	// intializaiton;
	var vertices = [];
	var normals = [];
	var texCoords = [];

	var objects = [];
	var materials = new HashMap<String, Material>(); // TODO: refactor
	var currentSmoothingGroup;
	var materialName;
	
	var generateNormals = true;
	var genTangents = generateTangents || false;
	
	this.load = function(path, objFile, mtlFile) {
		time = new Data();
		
			meshReader = null;
			mtlReader = null;
			
			// load .mtl
			if(mtlFile != null) {
				try {
						InputStreamReader inputStream = new InputStreamReader(Class.class.getResourceAsStream(path + "/" +  mtlFile));
						mtlReader = new BufferedReader(inputStream);
						
						var line;						
						var currentMtl = "";
						
						while((line = mtlReader.readLine()) != null) {							
							var tokens = line.split(" ");
							tokens = Util.removeEmptyStrings(tokens);
							
							if(!tokens.length) {
								continue;
							}
							
							if(tokens[0] == "newmtl") {
								Material material = new Material(tokens[1]);
								materials.put(tokens[1], material);
								currentMtl = tokens[1];
							}
							
							if(tokens[0] == "Kd") {
								if(tokens.length > 1) {
									Vector3f color = new Vector3f(Float.valueOf(tokens[1]), Float.valueOf(tokens[2]), Float.valueOf(tokens[3]));
									materials.get(currentMtl).setColor(color);
								}
							}
							
							if(tokens[0] == "map_Kd") {
								if(tokens.length > 1){
									materials.get(currentMtl).setDiffuseMap(new Texture2D("diffuseMap", path + "/" + tokens[1]));
								}
							}
							
							if(tokens[0] == "map_Ks") {
								if(tokens.length > 1){
									materials.get(currentMtl).setSpecularMap(new Texture2D("specularMap", path + "/" + tokens[1]));
								}
							}
							
							if(tokens[0] == "map_bump") {
								if(tokens.length > 1) {
									materials.get(currentMtl).setNormalMap(new Texture2D("normalMap", path + "/" + tokens[1]));
								}
							}
							
							if(tokens[0] == "illum") {
								if(tokens.length > 1)
									materials.get(currentMtl).setEmission(Float.valueOf(tokens[1]));
							}
							
							if(tokens[0] == "Ns") {
								if(tokens.length > 1)
									materials.get(currentMtl).setShininess(Float.valueOf(tokens[1]));
							}
						}
						
						mtlReader.close();
					}
				catch(Exception e) {
					e.printStackTrace();
					System.exit(1);
				}
			}
				
			// load .obj
			try {
				console.log(path + objFile + ".obj");
				
				InputStreamReader inputStream = new InputStreamReader(Class.class.getResourceAsStream(path + objFile + ".obj"));
				meshReader = new BufferedReader(inputStream);
				
				var line;
				
				while((line = meshReader.readLine()) != null) {
					var tokens = line.split(" ");
					tokens = Util.removeEmptyStrings(tokens);
					if(!tokens.length || tokens[0] == "#") {
						continue;
					}
					
					if(tokens[0] == "v") {
						vertices.add(new Vertex(new Vector3f(Float.valueOf(tokens[1]),
														  Float.valueOf(tokens[2]),
														  Float.valueOf(tokens[3]))));
					}
					
					if(tokens[0] == "vn") {
						normals.add(new Vector3f(Float.valueOf(tokens[1]),
											  Float.valueOf(tokens[2]),
											  Float.valueOf(tokens[3])));
					}
					
					if(tokens[0] ==  "vt") {
						texCoords.add(new Vector2f(Float.valueOf(tokens[1]), Float.valueOf(tokens[2])));
					}
					
					if(tokens[0] == "o") {
						MeshObject object = new MeshObject();
						object.setName(tokens[1]);
						objects.add(new MeshObject());
					}
					
					if(tokens[0] == "g") {
						PolygonGroup polygonGroup = new PolygonGroup();	
						if (tokens.length > 1)
							polygonGroup.setName(tokens[1]);
						if (objects.isEmpty()) objects.add(new MeshObject());
						objects.peekLast().getPolygonGroups().add(polygonGroup);
					}
					
					if(tokens[0] == "usemtl") {
						Polygon polygon = new Polygon();
						materialname = tokens[1];
						polygon.setMaterial(tokens[1]);
						if(objects.peekLast().getPolygonGroups().isEmpty())
							objects.peekLast().getPolygonGroups().add(new PolygonGroup());
						objects.peekLast().getPolygonGroups().peekLast().getPolygons().add(polygon);
					}
					
					if(tokens[0] == "s") {
						if(objects.peekLast().getPolygonGroups().isEmpty()) {
							objects.peekLast().getPolygonGroups().add(new PolygonGroup());
						}
						
						if(tokens[1] == "off" || tokens[1] == "0") {
							currentSmoothingGroup = 0;
							
							if(!objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().containsKey(0)) {
								objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().put(currentSmoothingGroup, new SmoothingGroup());
							}
						} else {
							currentSmoothingGroup = Integer.valueOf(tokens[1]);
							if(!objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().containsKey(currentSmoothingGroup)){
								objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().put(currentSmoothingGroup, new SmoothingGroup());
							}
						}
					}
					
					if(tokens[0] == "f") {
						if(objects.peekLast().getPolygonGroups().isEmpty()) {
							objects.peekLast().getPolygonGroups().add(new PolygonGroup());
						}
						
						if(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().isEmpty()) {
							currentSmoothingGroup = 1;
							objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().put(currentSmoothingGroup, new SmoothingGroup());
						}
						
						if(objects.peekLast().getPolygonGroups().peekLast().getPolygons().isEmpty()) {
							objects.peekLast().getPolygonGroups().peekLast().getPolygons().add(new Polygon());
						}
						
						if(tokens.length == 4) {
							parseTriangleFace(tokens);
						}
						
						if(tokens.length == 5) {
							parseQuadFace(tokens);
						}
					}
				}
				
				meshReader.close();
					
				if(normals.isEmpty() && generateNormals) {
					for(MeshObject object : objects) {
						for(PolygonGroup polygonGroup : object.getPolygonGroups()) {
							for(Integer key : polygonGroup.getSmoothingGroups().keySet()) {
								if(frontface == Frontface.CW) {
									Util.generateNormalsCW(polygonGroup.getSmoothingGroups().get(key));
								}
								else {
									Util.generateNormalsCCW(polygonGroup.getSmoothingGroups().get(key));
								}
							}
						}
					}
				}					
					
				var meshes = [];
				
				for(MeshObject object : objects) {
					for(PolygonGroup polygonGroup : object.getPolygonGroups()) {
						for(Polygon polygon : polygonGroup.getPolygons()) {
							
							generatePolygon(polygonGroup.getSmoothingGroups(), polygon);
							Mesh mesh = convert(polygon);						
							meshes.add(mesh);
						}
					}
				}
				
				if(EngineDebug.hasDebugPermission()) {
					EngineDebug.println("obj loading time : " + (System.currentTimeMillis() - time) + "ms", 2);
				}
				
				return meshes;
			}
			catch(Exception e) {
				e.printStackTrace();
				System.exit(1);
			}
		
		return null;
	}
	
	var parseTriangleFace = function(tokens) {
		// vertex//normal
		if(tokens[1].contains("//")) {
			
			int[] vertexIndices = {Integer.parseInt(tokens[1].split("//")[0]) - 1,
					      		   Integer.parseInt(tokens[2].split("//")[0]) - 1,
					      		   Integer.parseInt(tokens[3].split("//")[0]) - 1};
			int[] normalIndices = {Integer.parseInt(tokens[1].split("//")[1]) - 1,
								   Integer.parseInt(tokens[2].split("//")[1]) - 1,
								   Integer.parseInt(tokens[3].split("//")[1]) - 1};
			
			Vertex v0 = new Vertex(vertices.get(vertexIndices[0]).getPos());
			Vertex v1 = new Vertex(vertices.get(vertexIndices[1]).getPos());
			Vertex v2 = new Vertex(vertices.get(vertexIndices[2]).getPos());
			v0.setNormal(normals.get(normalIndices[0]));
			v1.setNormal(normals.get(normalIndices[1]));
			v2.setNormal(normals.get(normalIndices[2]));
			if(genTangents) {
				generateTangents(v0, v1, v2);
			}
			addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2);
		}
		
		else if(tokens[1].contains("/")) {	
			
			// vertex/textureCoord/normal
			if(tokens[1].split("/").length == 3) {

				int[] vertexIndices = {Integer.parseInt(tokens[1].split("/")[0]) - 1,
						      		   Integer.parseInt(tokens[2].split("/")[0]) - 1,
						      		   Integer.parseInt(tokens[3].split("/")[0]) - 1};
				int[] texCoordIndices =  {Integer.parseInt(tokens[1].split("/")[1]) - 1,
						              	  Integer.parseInt(tokens[2].split("/")[1]) - 1,
						              	  Integer.parseInt(tokens[3].split("/")[1]) - 1};
				int[] normalIndices = {Integer.parseInt(tokens[1].split("/")[2]) - 1,
									   Integer.parseInt(tokens[2].split("/")[2]) - 1,
									   Integer.parseInt(tokens[3].split("/")[2]) - 1};
				
				Vertex v0 = new Vertex(vertices.get(vertexIndices[0]).getPos());
				Vertex v1 =  new Vertex(vertices.get(vertexIndices[1]).getPos());
				Vertex v2 =  new Vertex(vertices.get(vertexIndices[2]).getPos());
				v0.setNormal(normals.get(normalIndices[0]));
				v1.setNormal(normals.get(normalIndices[1]));
				v2.setNormal(normals.get(normalIndices[2]));
				v0.setTextureCoord(texCoords.get(texCoordIndices[0]));
				v1.setTextureCoord(texCoords.get(texCoordIndices[1]));
				v2.setTextureCoord(texCoords.get(texCoordIndices[2]));
				if(genTangents) {
					generateTangents(v0, v1, v2);
				}				
				addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2);
			}
			
			// vertex/textureCoord
			else {

				int[] vertexIndices = {Integer.parseInt(tokens[1].split("/")[0]) - 1,
							  	 	   Integer.parseInt(tokens[2].split("/")[0]) - 1,
							  	 	   Integer.parseInt(tokens[3].split("/")[0]) - 1};
				int[] texCoordIndices =  {Integer.parseInt(tokens[1].split("/")[1]) - 1,
										  Integer.parseInt(tokens[2].split("/")[1]) - 1,
										  Integer.parseInt(tokens[3].split("/")[1]) - 1};
				
				Vertex v0 = new Vertex(vertices.get(vertexIndices[0]).getPos());
				Vertex v1 = new Vertex(vertices.get(vertexIndices[1]).getPos());
				Vertex v2 = new Vertex(vertices.get(vertexIndices[2]).getPos());
				v0.setTextureCoord(texCoords.get(texCoordIndices[0]));
				v1.setTextureCoord(texCoords.get(texCoordIndices[1]));
				v2.setTextureCoord(texCoords.get(texCoordIndices[2]));
				if(genTangents) {
					generateTangents(v0, v1, v2);
				}				
				addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2);
			}		
		}
	
		// vertex
		else {
			
			int[] vertexIndices = {Integer.parseInt(tokens[1]) - 1,
					      Integer.parseInt(tokens[2]) - 1,
					      Integer.parseInt(tokens[3]) - 1};
			
			Vertex v0 = vertices.get(vertexIndices[0]);
			Vertex v1 = vertices.get(vertexIndices[1]);
			Vertex v2 = vertices.get(vertexIndices[2]);
			if(genTangents) {
				generateTangents(v0, v1, v2);
			}
			addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2);
		}
	}
	
	var parseQuadFace = function(tokens) {
		// vertex//normal
		if(tokens[1].contains("//")) {
			
			int[] vertexIndices = {Integer.parseInt(tokens[1].split("//")[0]) - 1,
						  		   Integer.parseInt(tokens[2].split("//")[0]) - 1,
						  		   Integer.parseInt(tokens[3].split("//")[0]) - 1,
						  		   Integer.parseInt(tokens[4].split("//")[0]) - 1};
			int[] normalIndices = {Integer.parseInt(tokens[1].split("//")[1]) - 1,
								   Integer.parseInt(tokens[2].split("//")[1]) - 1,
								   Integer.parseInt(tokens[3].split("//")[1]) - 1,
								   Integer.parseInt(tokens[4].split("//")[1]) - 1};
			
			Vertex v0 = new Vertex(vertices.get(vertexIndices[0]).getPos());
			Vertex v1 = new Vertex(vertices.get(vertexIndices[1]).getPos());
			Vertex v2 = new Vertex(vertices.get(vertexIndices[2]).getPos());
			Vertex v3 = new Vertex(vertices.get(vertexIndices[3]).getPos());
			v0.setNormal(normals.get(normalIndices[0]));
			v1.setNormal(normals.get(normalIndices[1]));
			v2.setNormal(normals.get(normalIndices[2]));
			v3.setNormal(normals.get(normalIndices[3]));
			
			if(genTangents) {
				generateTangents(v0, v1, v2);
				generateTangents(v2, v1, v3);
			}			
			addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2,v3);
		}
		
		else if(tokens[1].contains("/")) {	
		
			// vertex/textureCoord/normal
			if(tokens[1].split("/").length == 3) {

				int[] vertexIndices = {Integer.parseInt(tokens[1].split("/")[0]) - 1,
									   Integer.parseInt(tokens[2].split("/")[0]) - 1,
									   Integer.parseInt(tokens[3].split("/")[0]) - 1,
									   Integer.parseInt(tokens[4].split("/")[0]) - 1};
				int[] texCoordIndices =  {Integer.parseInt(tokens[1].split("/")[1]) - 1,
										  Integer.parseInt(tokens[2].split("/")[1]) - 1,
										  Integer.parseInt(tokens[3].split("/")[1]) - 1,
										  Integer.parseInt(tokens[4].split("/")[1]) - 1};
				int[] normalIndices = {Integer.parseInt(tokens[1].split("/")[2]) - 1,
						               Integer.parseInt(tokens[2].split("/")[2]) - 1,
						               Integer.parseInt(tokens[3].split("/")[2]) - 1,
						               Integer.parseInt(tokens[4].split("/")[2]) - 1};
				
				Vertex v0 = new Vertex(vertices.get(vertexIndices[0]).getPos());
				Vertex v1 = new Vertex(vertices.get(vertexIndices[1]).getPos());
				Vertex v2 = new Vertex(vertices.get(vertexIndices[2]).getPos());
				Vertex v3 = new Vertex(vertices.get(vertexIndices[3]).getPos());
				v0.setNormal(normals.get(normalIndices[0]));
				v1.setNormal(normals.get(normalIndices[1]));
				v2.setNormal(normals.get(normalIndices[2]));
				v3.setNormal(normals.get(normalIndices[3]));			
				v0.setTextureCoord(texCoords.get(texCoordIndices[0]));
				v1.setTextureCoord(texCoords.get(texCoordIndices[1]));
				v2.setTextureCoord(texCoords.get(texCoordIndices[2]));
				v3.setTextureCoord(texCoords.get(texCoordIndices[3]));
				if(genTangents) {
					generateTangents(v0, v1, v2);
					generateTangents(v2, v1, v3);
				}
				
				addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2,v3);
			}
			
			// vertex/textureCoord
			else {

				int[] vertexIndices = {Integer.parseInt(tokens[1].split("/")[0]) - 1,
						      		   Integer.parseInt(tokens[2].split("/")[0]) - 1,
						      		   Integer.parseInt(tokens[3].split("/")[0]) - 1,
						      		   Integer.parseInt(tokens[4].split("/")[0]) - 1};
				int[] texCoordIndices =  {Integer.parseInt(tokens[1].split("/")[1]) - 1,
										  Integer.parseInt(tokens[2].split("/")[1]) - 1,
										  Integer.parseInt(tokens[3].split("/")[1]) - 1,
										  Integer.parseInt(tokens[4].split("/")[1]) - 1};
				
				Vertex v0 = new Vertex(vertices.get(vertexIndices[0]).getPos());
				Vertex v1 = new Vertex(vertices.get(vertexIndices[1]).getPos());
				Vertex v2 = new Vertex(vertices.get(vertexIndices[2]).getPos());
				Vertex v3 = new Vertex(vertices.get(vertexIndices[3]).getPos());				
				v0.setTextureCoord(texCoords.get(texCoordIndices[0]));
				v1.setTextureCoord(texCoords.get(texCoordIndices[1]));
				v2.setTextureCoord(texCoords.get(texCoordIndices[2]));
				v3.setTextureCoord(texCoords.get(texCoordIndices[3]));
				if(genTangents) {
					generateTangents(v0, v1, v2);
					generateTangents(v2, v1, v3);
				}
				
				addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2,v3);
			}		
		}
	
		// vertex
		else {
			
			int[] vertexIndices = {Integer.parseInt(tokens[1]) - 1,
					      		   Integer.parseInt(tokens[2]) - 1,
					      		   Integer.parseInt(tokens[3]) - 1,
					      		   Integer.parseInt(tokens[4]) - 1};
			
			Vertex v0 = new Vertex(vertices.get(vertexIndices[0]).getPos());
			Vertex v1 = new Vertex(vertices.get(vertexIndices[1]).getPos());
			Vertex v2 = new Vertex(vertices.get(vertexIndices[2]).getPos());
			Vertex v3 = new Vertex(vertices.get(vertexIndices[3]).getPos());
			if(genTangents) {
				generateTangents(v0, v1, v2);
				generateTangents(v2, v1, v3);
			}
			
			addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2,v3);
		}
	}
	
	var addToSmoothingGroup = function(smoothingGroup, v0, v1, v2) {
		
		int index0 = processVertex(smoothingGroup, v0);
		int index1 = processVertex(smoothingGroup, v1);
		int index2 = processVertex(smoothingGroup, v2);
		
		Face face = new Face();
		face.getIndices()[0] = index0;
		face.getIndices()[1] = index1;
		face.getIndices()[2] = index2;
		face.setMaterial(materialname);
		
		smoothingGroup.getFaces().add(face);
	}
	
	var addToSmoothingGroup = function(smoothingGroup, v0, v1, v2, v3) {
		int index0 = processVertex(smoothingGroup, v0);
		int index1 = processVertex(smoothingGroup, v1);
		int index2 = processVertex(smoothingGroup, v2);
		int index3 = processVertex(smoothingGroup, v3);
		
		Face face0 = new Face();
		face0.getIndices()[0] = index0;
		face0.getIndices()[1] = index1;
		face0.getIndices()[2] = index2;
		face0.setMaterial(materialname);
		
		Face face1 = new Face();
		face1.getIndices()[0] = index0;
		face1.getIndices()[1] = index2;
		face1.getIndices()[2] = index3;
		face1.setMaterial(materialname);
		
		smoothingGroup.getFaces().add(face0);
		smoothingGroup.getFaces().add(face1);
	}
	
	var processVertex = function(smoothingGroup, previousVertex) {
		if(smoothingGroup.getVertices().contains(previousVertex)) {
			int index = smoothingGroup.getVertices().indexOf(previousVertex);
			Vertex nextVertex = smoothingGroup.getVertices().get(index);
			if(!hasSameNormalAndTexture(previousVertex, nextVertex)) {				
				if(nextVertex.getDublicateVertex() != null) {
					return processVertex(smoothingGroup, nextVertex.getDublicateVertex());
				} else {
					Vertex newVertex = new Vertex();
					newVertex.setPos(previousVertex.getPos());
					newVertex.setNormal(previousVertex.getNormal());
					newVertex.setTextureCoord(previousVertex.getTextureCoord());
					previousVertex.setDubilcateVertex(newVertex);
					smoothingGroup.getVertices().add(newVertex);
					return smoothingGroup.getVertices().indexOf(newVertex);
				}
			}
		}
		smoothingGroup.getVertices().add(previousVertex);
		return smoothingGroup.getVertices().indexOf(previousVertex);
	}
	
	var hasSameNormalAndTexture = function(v1, v2) {
		return v1.getNormal().equals(v2.getNormal()) && v1.getTextureCoord().equals(v2.getTextureCoord());
	}
	
	var generatePolygon = function(smoothingGroups, polygon) {
		
		for(Integer key : smoothingGroups.keySet()) {
			for(Face face : smoothingGroups.get(key).getFaces()) {
				if(face.getMaterial() == polygon.getMaterial()) {
					if(!polygon.getVertices().contains(smoothingGroups.get(key).getVertices().get(face.getIndices()[0])))
						polygon.getVertices().add(smoothingGroups.get(key).getVertices().get(face.getIndices()[0]));
					if(!polygon.getVertices().contains(smoothingGroups.get(key).getVertices().get(face.getIndices()[1])))
						polygon.getVertices().add(smoothingGroups.get(key).getVertices().get(face.getIndices()[1]));
					if(!polygon.getVertices().contains(smoothingGroups.get(key).getVertices().get(face.getIndices()[2])))
						polygon.getVertices().add(smoothingGroups.get(key).getVertices().get(face.getIndices()[2]));
					
					polygon.getIndices().add(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices().get(face.getIndices()[0])));
					polygon.getIndices().add(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices().get(face.getIndices()[1])));
					polygon.getIndices().add(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices().get(face.getIndices()[2])));
				}
			}
		}
	}
	
	var generateTangents = function(v0, v1, v2) {
		Vector3f delatPos1 = Vector3f.sub(v1.getPos(), v0.getPos());
		Vector3f delatPos2 = Vector3f.sub(v2.getPos(), v0.getPos());
		Vector2f uv0 = v0.getTextureCoord();
		Vector2f uv1 = v1.getTextureCoord();
		Vector2f uv2 = v2.getTextureCoord();
		Vector2f deltaUv1 = Vector2f.sub(uv1, uv0);
		Vector2f deltaUv2 = Vector2f.sub(uv2, uv0);

		float r = 1.0f / (deltaUv1.x * deltaUv2.y - deltaUv1.y * deltaUv2.x);
		delatPos1.scale(deltaUv2.y);
		delatPos2.scale(deltaUv1.y);
		Vector3f tangent = Vector3f.sub(delatPos1, delatPos2);
		tangent.scale(r);
		v0.setTangent(tangent);
		v1.setTangent(tangent);
		v2.setTangent(tangent);
	}
	
	var convert = function(polygon) {		
		Object[] positionObjectArray = new Object[polygon.getVertices().size()*3];
		Object[] normalObjectArray = new Object[polygon.getVertices().size()*3];
		Object[] textureObjectArray = new Object[polygon.getVertices().size()*2];
		float[] tangents = null;
		Integer[] objectArray = new Integer[polygon.getIndices().size()];
		
		polygon.getIndices().toArray(objectArray);
		List<Vertex> vertices = polygon.getVertices();
		
		positionObjectArray = vertices.stream()
			.flatMap(vertex -> Stream.of(vertex.getPos().x, vertex.getPos().y, vertex.getPos().z))
			.toArray();
		normalObjectArray = vertices.stream()
				.flatMap(vertex -> Stream.of(vertex.getNormal().x, vertex.getNormal().y, vertex.getNormal().z))
				.toArray();
		textureObjectArray = vertices.stream()
				.flatMap(vertex -> Stream.of(vertex.getTextureCoord().x, 1 - vertex.getTextureCoord().y))
				.toArray();
		
		float[] positions = EngineUtils.toFloatArray(positionObjectArray);
		float[] normals = EngineUtils.toFloatArray(normalObjectArray);
		float[] textureCoords = EngineUtils.toFloatArray(textureObjectArray);
		int[] indices = EngineUtils.toIntArray(objectArray);
		
		BufferLoader loader = Loader.getInstance().getVertexLoader();
		Mesh mesh = null;
		
		if(genTangents) {
			Object[] tangentObjectArray = new Object[polygon.getVertices().size()*3];
			tangentObjectArray = vertices.stream()
					.flatMap(vertex -> Stream.of(vertex.getTangent().x, vertex.getTangent().y, vertex.getTangent().z))
					.toArray();

			tangents = EngineUtils.toFloatArray(tangentObjectArray);
			mesh = loader.loadToVAO(positions, textureCoords, normals, tangents, indices);
		} else {
			mesh = loader.loadToVAO(positions, textureCoords, normals, indices);
		}
		
		return mesh;
	}
	
	this.clean = function() {
		vertices.length = 0;
		normals.length = 0;
		texCoords.length = 0;
	}
}

export {OBJLoader};