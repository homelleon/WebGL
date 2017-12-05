import {buffers} from './../../core/Loop';
import {Vertex2f} from './../../math/vector/Vector2f';
import {Vertex3f} from './../../math/vector/Vector3f';
import {Vertex} from './Vertex';
import {Polygon} from './Polygon';
import {PolygonGroup} from './PolygonGroup';
import {SmoothingGoup} from './SmoothingGroup';
import {Face} from './Face';
import {MeshObjec} from './MeshObject';


function OBJLoader(generateTangents) {
	// intializaiton;
	var _vertices = [];
	var _normals = [];
	var _texCoords = [];

	var _objects = [];
	var _materials = new Map();
	var _currentSmoothingGroup;
	var _materialName;
	
	var _generateNormals = true;
	var _genTangents = generateTangents || false;
	
	this.load = function(path, objFile, mtlFile) {
		time = new Data();
		
			meshReader = null;
			mtlReader = null;
			
			// load .mtl
			if(!mtlFile) {
				try {						
						var lines = mtlFile.split["\n"];						
						var currentMtl = "";
						  
						for(var i = 0; i < lines.length; i++) {
							var tokens = lines[i].split(" ");
							tokens = Util.removeEmptyStrings(tokens);
							
							if(!tokens.length) {
								continue;
							}
							
							if(tokens[0] == "newmtl") {
								var material = new Material(tokens[1]);
								materials.set(tokens[1], material);
								currentMtl = tokens[1];
							}
							
							if(tokens[0] == "Kd") {
								if(tokens.length > 1) {
									var color = new Vector3f(+tokens[1], +tokens[2], +tokens[3]);
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
				catch(error) {
					console.log(error.stackTrace());
				}
			}
				
			// load .obj
			try {
				console.log(path + objFile + ".obj");
								
				var lines = meshReader.split("\n");
				
				for(var i = 0; i < lines.length; i++) {
					var tokens = lines[i].split(" ");
					tokens = Util.removeEmptyStrings(tokens);
					if(!tokens.length || tokens[0] == "#") {
						continue;
					}
					
					if(tokens[0] == "v") {
						_vertices.push(
							new Vertex(
								new Vector3f(+tokens[1], +tokens[2], +tokens[3])
							)
						);
					}
					
					if(tokens[0] == "vn") {
						_normals.push(
							new Vector3f(+tokens[1], +tokens[2], +tokens[3])
						);
					}
					
					if(tokens[0] ==  "vt") {
						_texCoords.push(
							new Vector2f(+tokens[1], +tokens[2])
						);
					}
					
					if(tokens[0] == "o") {
						var object = new MeshObject();
						object.setName(tokens[1]);
						objects.push(new MeshObject());
					}
					
					if(tokens[0] == "g") {
						var polygonGroup = new PolygonGroup();	
						if (tokens.length > 1)
							polygonGroup.setName(tokens[1]);
						if (objects.isEmpty()) objects.push(new MeshObject());
						objects.peekLast().getPolygonGroups().add(polygonGroup);
					}
					
					if(tokens[0] == "usemtl") {
						var polygon = new Polygon();
						materialname = tokens[1];
						polygon.setMaterial(tokens[1]);
						if(objects.peekLast().getPolygonGroups().isEmpty())
							objects.peekLast().getPolygonGroups().push(new PolygonGroup());
						objects.peekLast().getPolygonGroups().peekLast().getPolygons().push(polygon);
					}
					
					if(tokens[0] == "s") {
						if(objects.peekLast().getPolygonGroups().isEmpty()) {
							objects.peekLast().getPolygonGroups().push(new PolygonGroup());
						}
						
						if(tokens[1] == "off" || tokens[1] == "0") {
							currentSmoothingGroup = 0;
							
							if(!objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().containsKey(0)) {
								objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(currentSmoothingGroup, new SmoothingGroup());
							}
						} else {
							currentSmoothingGroup = +tokens[1];
							if(!objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().containsKey(currentSmoothingGroup)) {
								objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(currentSmoothingGroup, new SmoothingGroup());
							}
						}
					}
					
					if(tokens[0] == "f") {
						if(objects.peekLast().getPolygonGroups().isEmpty()) {
							objects.peekLast().getPolygonGroups().push(new PolygonGroup());
						}
						
						if(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().isEmpty()) {
							currentSmoothingGroup = 1;
							objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(currentSmoothingGroup, new SmoothingGroup());
						}
						
						if(objects.peekLast().getPolygonGroups().peekLast().getPolygons().isEmpty()) {
							objects.peekLast().getPolygonGroups().peekLast().getPolygons().push(new Polygon());
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
					for(var object in objects) {
						for(var polygonGroup in object.getPolygonGroups()) {
							for(var key in polygonGroup.getSmoothingGroups().keySet()) {
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
				
				for(var object in objects) {
					for(var polygonGroup in object.getPolygonGroups()) {
						for(var polygon in polygonGroup.getPolygons()) {
							
							generatePolygon(polygonGroup.getSmoothingGroups(), polygon);
							var mesh = convert(polygon);						
							meshes.push(mesh);
						}
					}
				}
				
				if(EngineDebug.hasDebugPermission()) {
					EngineDebug.println("obj loading time : " + (System.currentTimeMillis() - time) + "ms", 2);
				}
				
				return meshes;
			}
			catch(err) {
				console.log( err.stackTrace() );
			}
		
		return null;
	}
	
	var parseTriangleFace = function(tokens) {
		// vertex//normal
		if(tokens[1].contains("//")) {
			
			var vertexIndices = [
				+tokens[1].split("//")[0] - 1,
				+tokens[2].split("//")[0] - 1,
				+tokens[3].split("//")[0] - 1
			];
			
			var normalIndices = [
				+tokens[1].split("//")[1] - 1,
				+tokens[2].split("//")[1] - 1,
				+tokens[3].split("//")[1] - 1
			];
			
			var v0 = new Vertex(vertices[vertexIndices[0]].getPos());
			var v1 = new Vertex(vertices[vertexIndices[1]].getPos());
			var v2 = new Vertex(vertices[vertexIndices[2]].getPos());
			v0.setNormal(normals[normalIndices[0]]);
			v1.setNormal(normals[normalIndices[1]]);
			v2.setNormal(normals[normalIndices[2]]);
			
			if(genTangents) {
				generateTangents(v0, v1, v2);
			}
			
			addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2);
		}
		
		else if(tokens[1].contains("/")) {	
			
			// vertex/textureCoord/normal
			if(tokens[1].split("/").length == 3) {

				var vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1
				];
				
				var texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1
				];
				
				var normalIndices = [
					+tokens[1].split("/")[2] - 1,
					+tokens[2].split("/")[2] - 1,
					+tokens[3].split("/")[2] - 1
				];
				
				var v0 = new Vertex(vertices[vertexIndices[0]].getPos());
				var v1 =  new Vertex(vertices[vertexIndices[1]].getPos());
				var v2 =  new Vertex(vertices[vertexIndices[2]].getPos());
				v0.setNormal(normals[normalIndices[0]]);
				v1.setNormal(normals[normalIndices[1]]);
				v2.setNormal(normals[normalIndices[2]]);
				v0.setTextureCoord(texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(texCoords[texCoordIndices[2]]);
				
				if(genTangents) {
					generateTangents(v0, v1, v2);
				}				
				
				addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2);
			}
			
			// vertex/textureCoord
			else {

				var vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1
				];
				
				var texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1
				];
				
				var v0 = new Vertex(vertices[vertexIndices[0]].getPos());
				var v1 = new Vertex(vertices[vertexIndices[1]].getPos());
				var v2 = new Vertex(vertices[vertexIndices[2]].getPos());
				v0.setTextureCoord(texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(texCoords[texCoordIndices[2]]);
				
				if(genTangents) {
					generateTangents(v0, v1, v2);
				}				
				
				addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2);
			}		
		}
	
		// vertex
		else {
			
			var vertexIndices = [
				+tokens[1] - 1,
				+tokens[2] - 1,
				+tokens[3] - 1
			];
			
			var v0 = vertices[vertexIndices[0]];
			var v1 = vertices[vertexIndices[1]];
			var v2 = vertices[vertexIndices[2]];
			
			if(genTangents) {
				generateTangents(v0, v1, v2);
			}
			
			addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2);
		}
	}
	
	var parseQuadFace = function(tokens) {
		// vertex//normal
		if(tokens[1].contains("//")) {
			
			var vertexIndices = [
				+tokens[1].split("//")[0] - 1,
				+tokens[2].split("//")[0] - 1,
				+tokens[3].split("//")[0] - 1,
				+tokens[4].split("//")[0] - 1
			];
			
			var normalIndices = [
				+tokens[1].split("//")[1] - 1,
				+tokens[2].split("//")[1] - 1,
				+tokens[3].split("//")[1] - 1,
				+tokens[4].split("//")[1] - 1
			];
			
			var v0 = new Vertex(vertices[vertexIndices[0]].getPos());
			var v1 = new Vertex(vertices[vertexIndices[1]].getPos());
			var v2 = new Vertex(vertices[vertexIndices[2]].getPos());
			var v3 = new Vertex(vertices[vertexIndices[3]].getPos());
			v0.setNormal(normals[normalIndices[0]]);
			v1.setNormal(normals[normalIndices[1]]);
			v2.setNormal(normals[normalIndices[2]]);
			v3.setNormal(normals[normalIndices[3]]);
			
			if(genTangents) {
				generateTangents(v0, v1, v2);
				generateTangents(v2, v1, v3);
			}			
			addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2,v3);
		}
		
		else if(tokens[1].contains("/")) {	
		
			// vertex/textureCoord/normal
			if(tokens[1].split("/").length == 3) {

				var vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1,
					+tokens[4].split("/")[0] - 1
				];
				
				var texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1,
					+tokens[4].split("/")[1] - 1
				];
				
				var normalIndices = [
					+tokens[1].split("/")[2] - 1,
					+tokens[2].split("/")[2] - 1,
					+tokens[3].split("/")[2] - 1,
					+tokens[4].split("/")[2] - 1
				];
				
				var v0 = new Vertex(vertices[vertexIndices[0]].getPos());
				var v1 = new Vertex(vertices[vertexIndices[1]].getPos());
				var v2 = new Vertex(vertices[vertexIndices[2]].getPos());
				var v3 = new Vertex(vertices[vertexIndices[3]].getPos());
				v0.setNormal(normals[normalIndices[0]]);
				v1.setNormal(normals[normalIndices[1]]);
				v2.setNormal(normals[normalIndices[2]]);
				v3.setNormal(normals[normalIndices[3]]);			
				v0.setTextureCoord(texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(texCoords[texCoordIndices[2]]);
				v3.setTextureCoord(texCoords[texCoordIndices[3]]);
				
				if(genTangents) {
					generateTangents(v0, v1, v2);
					generateTangents(v2, v1, v3);
				}
				
				addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2,v3);
			}
			
			// vertex/textureCoord
			else {

				var vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1,
					+tokens[4].split("/")[0] - 1
				];
				
				var texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1,
					+tokens[4].split("/")[1] - 1
				];
				
				var v0 = new Vertex(vertices[vertexIndices[0]].getPos());
				var v1 = new Vertex(vertices[vertexIndices[1]].getPos());
				var v2 = new Vertex(vertices[vertexIndices[2]].getPos());
				var v3 = new Vertex(vertices[vertexIndices[3]].getPos());				
				v0.setTextureCoord(texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(texCoords[texCoordIndices[2]]);
				v3.setTextureCoord(texCoords[texCoordIndices[3]]);
				
				if(genTangents) {
					generateTangents(v0, v1, v2);
					generateTangents(v2, v1, v3);
				}
				
				addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2,v3);
			}		
		}
	
		// vertex
		else {
			
			var vertexIndices = [
				+tokens[1] - 1,
				+tokens[2] - 1,
				+tokens[3] - 1,
				+tokens[4] - 1
			];
			
			var v0 = new Vertex(vertices[vertexIndices[0]].getPos());
			var v1 = new Vertex(vertices[vertexIndices[1]].getPos());
			var v2 = new Vertex(vertices[vertexIndices[2]].getPos());
			var v3 = new Vertex(vertices[vertexIndices[3]].getPos());
			if(genTangents) {
				generateTangents(v0, v1, v2);
				generateTangents(v2, v1, v3);
			}
			
			addToSmoothingGroup(objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(currentSmoothingGroup),v0,v1,v2,v3);
		}
	}
	
	var addToSmoothingGroup = function(smoothingGroup, v0, v1, v2) {
		
		var index0 = processVertex(smoothingGroup, v0);
		var index1 = processVertex(smoothingGroup, v1);
		var index2 = processVertex(smoothingGroup, v2);
		
		var face = new Face();
		face.getIndices()[0] = index0;
		face.getIndices()[1] = index1;
		face.getIndices()[2] = index2;
		face.setMaterial(materialname);
		
		smoothingGroup.getFaces().add(face);
	}
	
	var addToSmoothingGroup = function(smoothingGroup, v0, v1, v2, v3) {
		var index0 = processVertex(smoothingGroup, v0);
		var index1 = processVertex(smoothingGroup, v1);
		var index2 = processVertex(smoothingGroup, v2);
		var index3 = processVertex(smoothingGroup, v3);
		
		var face0 = new Face();
		face0.getIndices()[0] = index0;
		face0.getIndices()[1] = index1;
		face0.getIndices()[2] = index2;
		face0.setMaterial(materialname);
		
		var face1 = new Face();
		face1.getIndices()[0] = index0;
		face1.getIndices()[1] = index2;
		face1.getIndices()[2] = index3;
		face1.setMaterial(materialname);
		
		smoothingGroup.getFaces().add(face0);
		smoothingGroup.getFaces().add(face1);
	}
	
	var processVertex = function(smoothingGroup, previousVertex) {
		if(smoothingGroup.getVertices().contains(previousVertex)) {
			var index = smoothingGroup.getVertices().indexOf(previousVertex);
			var nextVertex = smoothingGroup.getVertices().get(index);
			if(!hasSameNormalAndTexture(previousVertex, nextVertex)) {				
				if(nextVertex.getDublicateVertex() != null) {
					return processVertex(smoothingGroup, nextVertex.getDublicateVertex());
				} else {
					var newVertex = new Vertex();
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
		
		for(var key in smoothingGroups.keySet()) {
			for(var face in smoothingGroups.get(key).getFaces()) {
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
		var delatPos1 = Vector3f.sub(v1.getPos(), v0.getPos());
		var delatPos2 = Vector3f.sub(v2.getPos(), v0.getPos());
		var uv0 = v0.getTextureCoord();
		var uv1 = v1.getTextureCoord();
		var uv2 = v2.getTextureCoord();
		var deltaUv1 = Vector2f.sub(uv1, uv0);
		var deltaUv2 = Vector2f.sub(uv2, uv0);

		var r = 1.0 / (deltaUv1.x * deltaUv2.y - deltaUv1.y * deltaUv2.x);
		delatPos1.scale(deltaUv2.y);
		delatPos2.scale(deltaUv1.y);
		var tangent = Vector3f.sub(delatPos1, delatPos2);
		tangent.scale(r);
		v0.setTangent(tangent);
		v1.setTangent(tangent);
		v2.setTangent(tangent);
	}
	
	var convert = function(polygon) {	
		var indices = polygon.getIndices().slice();
		var vertices = polygon.getVertices();
		
		var positions = vertices.forEach((vertex, index, arr) => {
			arr.splice(index, 1, vertex.getPos().x, vertex.getPos().y, vertex.getPost().z);
		});
		
		var normals = vertices.forEach((vertex, index, arr) => {
			arr.splice(index, 1, vertex.getNormal().x, vertex.getNormal().y, vertex.getNormal().z);
		});
		
		var textureCoords = vertices.forEach((vertex, index, arr) => {
			arr.splice(index, 1, vertex.getTextureCoord().x, 1 - vertex.getTextureCoord().y);
		});
		
		var tangents = null;
		
		var mesh = null;
		
		if(genTangents) {
			tangents = vertices.forEach((vertex, index, arr) => {
				arr.splice(index, 1, vertex.getTangent().x, vertex.getTangent().y, vertex.getTangent().z);
			});
			
			mesh = buffers.loadToVAO(positions, textureCoords, normals, tangents, indices);
		} else {
			mesh = buffers.loadToVAO(positions, textureCoords, normals, indices);
		}
		
		return mesh;
	}
	
	this.clean = function() {
		_vertices.length = 0;
		_normals.length = 0;
		_texCoords.length = 0;
	}
}

export {OBJLoader};