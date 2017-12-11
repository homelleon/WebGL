import {buffers} from './../../core/Loop';
import {Mesh} from './../../primitive/Mesh';
import {Vector2f} from './../../math/vector/Vector2f';
import {Vector3f} from './../../math/vector/Vector3f';
import {Vertex} from './Vertex';
import {Polygon} from './Polygon';
import {PolygonGroup} from './PolygonGroup';
import {SmoothingGroup} from './SmoothingGroup';
import {Face} from './Face';
import {MeshObject} from './MeshObject';
import {LoaderUtil} from './LoaderUtil';

// TODO: refactor this
/**
 * Model loader for .obj and .mtl files.
 * 
 * @param generateTangents - boolean argument to define if 
 * 							the loader will generate tangents
 */
function OBJLoader(generateTangents) {
	// intializaiton;
	var _vertices = [];
	var _normals = [];
	var _texCoords = [];

	var _objects = [];
	var _materials = new Map();
	var _currentSmoothingGroup = 0;
	var _materialName;
	
	var _generateNormals = true;
	var _genTangents = generateTangents || false;
	

	_objects.peekLast = new LoaderUtil().peekLast.bind(_objects);
	
	/**
	 * Loads meshes from folder path, objFile and mtlFile name arguments.
	 * 
	 * @param path - files folder path to search file in
	 * @param objFile - name of .obj file
	 * @param mtlFile - name of .mtl file 
	 */
	this.load = function(path, objFile, mtlFile) {
		var time = new Date();
		var util = new LoaderUtil;
		var request = new XMLHttpRequest();
		
		if(mtlFile) {
			// loading mtl file
			request.open('GET', './meshes/'+ path + mtlFile + '.mtl', true);
			request.send(null);
			// TODO: Dangerous code!
			while(!request.status == 4) {}
			var mtl = request.responseText;
			
			// parsing .mtl
			if(!mtl) {
				try {						
					let lines = mtl.split["\r\n"];						
					var currentMtl = "";
					  
					for(var i = 0; i < lines.length; i++) {
						let tokens = lines[i].split(" ");
						tokens = util.removeEmptyStrings(tokens);
						
						if(!tokens.length) {
							continue;
						}
						
						if(tokens[0] == "newmtl") {
							let material = new Material(tokens[1]);
							materials.set(tokens[1], material);
							currentMtl = tokens[1];
						}
						
						if(tokens[0] == "Kd") {
							if(tokens.length > 1) {
								let color = new Vector3f(+tokens[1], +tokens[2], +tokens[3]);
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
				} catch(error) {
					console.log(error.stack);
				}
			}
		}
		
		// loading .obj file
		try {
			require('./../../../file/model/'+ path + objFile + '.obj');
			request.open('GET', './meshes/'+ path + objFile + '.obj', false);
			request.send(null);
			// TODO: Dangerous code!
			while(!request.status == 4) {}
			
			if(!request.status == 200) {
				throw "obj loading failed!";
			}
			var obj = request.responseText;
			
			// parsing obj
			if(!obj) {
				throw "obj file is empty!";
			}
			let lines = obj.split("\r\n");		
			
			for(let i = 0; i < lines.length; i++) {
				let tokens = lines[i].split(" ");
				tokens = util.removeEmptyStrings(tokens);
				
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
					let object = new MeshObject();
					object.setName(tokens[1]);
					_objects.push(new MeshObject());
				}
				
				if(tokens[0] == "g") {
					let polygonGroup = new PolygonGroup();	
					if (tokens.length > 1) {
						polygonGroup.setName(tokens[1]);
					}
					
					if (_objects.length == 0) {
						_objects.push(new MeshObject());
					}
					_objects.peekLast().getPolygonGroups().push(polygonGroup);
				}
				
				if(tokens[0] == "usemtl") {
					let polygon = new Polygon();
					_materialName = tokens[1];
					polygon.setMaterial(tokens[1]);
					if(_objects.peekLast().getPolygonGroups().length == 0) {
						_objects.peekLast().getPolygonGroups().push(new PolygonGroup());
					}
					_objects.peekLast().getPolygonGroups().peekLast().getPolygons().push(polygon);
				}
				
				if(tokens[0] == "s") {
					if(_objects.peekLast().getPolygonGroups().length == 0) {
						_objects.peekLast().getPolygonGroups().push(new PolygonGroup());
					}
					
					if(tokens[1] == "off" || tokens[1] == "0") {
						_currentSmoothingGroup = 0;
						
						if(!_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().has(0)) {
							_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(_currentSmoothingGroup, new SmoothingGroup());
						}
					} else {
						_currentSmoothingGroup = +tokens[1];
						if(!_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().has(_currentSmoothingGroup)) {
							_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(_currentSmoothingGroup, new SmoothingGroup());
						}
					}
				}
				
				if(tokens[0] == "f") {
					if(_objects.peekLast().getPolygonGroups().length == 0) {
						_objects.peekLast().getPolygonGroups().push(new PolygonGroup());
					}
					
					if(_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().length == 0) {
						_currentSmoothingGroup = 1;
						_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().set(_currentSmoothingGroup, new SmoothingGroup());
					}
					
					if(_objects.peekLast().getPolygonGroups().peekLast().getPolygons().length == 0) {
						_objects.peekLast().getPolygonGroups().peekLast().getPolygons().push(new Polygon());
					}
	
					if(tokens.length == 4) {
						parseTriangleFace(tokens);
					}
					
					if(tokens.length == 5) {
						parseQuadFace(tokens);
					}
				}
				
			}
		} catch(error) {
			console.log( err.stack );
		}
		
		if(_normals.length == 0 && _generateNormals) {
			for(let i = 0; i < _objects.length; i++) {
				let polygonGroups = _object[i].getPolygonGroups();
				for(let j = 0; j < polygonGroups.length; j++) {
					let keys = polygonGroups[j].keys();
					for(let k = 0; k < keys.length; k++) {
						let key = keys[k];
						if(frontface == Frontface.CW) {
							util.generateNormalsCW(polygonGroups[j].getSmoothingGroups().get(key));
						} else {
							util.generateNormalsCCW(polygonGroups[j].getSmoothingGroups().get(key));
						}
					}
				}
			}
		}
			
		var meshes = [];
		
		for(let i = 0; i < _objects.length; i++) {
			let polygonGroups = _objects[i].getPolygonGroups();
			for(let j = 0; j < polygonGroups.length; j++) {
				let polygons = polygonGroups[j].getPolygons();
				for(let k = 0; k < polygons.length; k++) {
					generatePolygon(polygonGroups[j].getSmoothingGroups(), polygons[k]);
					let vao = convert(polygons[k]);
					meshes.push(new Mesh("mesh" + k, vao));
				}
			}
		}
		
		return meshes;
	}
	
	var parseTriangleFace = function(tokens) {
		// vertex//normal
		if(tokens[1].includes("//")) {
			let vertexIndices = [
				+tokens[1].split("//")[0] - 1,
				+tokens[2].split("//")[0] - 1,
				+tokens[3].split("//")[0] - 1
			];
			
			let normalIndices = [
				+tokens[1].split("//")[1] - 1,
				+tokens[2].split("//")[1] - 1,
				+tokens[3].split("//")[1] - 1
			];
			
			let v0 = new Vertex(_vertices[vertexIndices[0]].getPosition());
			let v1 = new Vertex(_vertices[vertexIndices[1]].getPosition());
			let v2 = new Vertex(_vertices[vertexIndices[2]].getPosition());
			v0.setNormal(_normals[normalIndices[0]]);
			v1.setNormal(_normals[normalIndices[1]]);
			v2.setNormal(_normals[normalIndices[2]]);
			
			if(_genTangents) {
				generateTangents(v0, v1, v2);
			}
			
			addToSmoothingGroup(
				_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
				v0, v1, v2
			);
			
		} else if(tokens[1].includes("/")) {				// vertex/textureCoord/normal
			
			if(tokens[1].split("/").length == 3) {
				let vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1
				];
				
				let texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1
				];
				
				let normalIndices = [
					+tokens[1].split("/")[2] - 1,
					+tokens[2].split("/")[2] - 1,
					+tokens[3].split("/")[2] - 1
				];
				
				let v0 = new Vertex(_vertices[vertexIndices[0]].getPosition());
				let v1 =  new Vertex(_vertices[vertexIndices[1]].getPosition());
				let v2 =  new Vertex(_vertices[vertexIndices[2]].getPosition());
				v0.setNormal(_normals[normalIndices[0]]);
				v1.setNormal(_normals[normalIndices[1]]);
				v2.setNormal(_normals[normalIndices[2]]);
				v0.setTextureCoord(_texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(_texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(_texCoords[texCoordIndices[2]]);
				
				if(_genTangents) {
					generateTangents(v0, v1, v2);
				}
				
				addToSmoothingGroup(
					_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
					v0, v1, v2
				);
			
			} else {									// vertex/textureCoord
				let vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1
				];
				
				let texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1
				];
				
				let v0 = new Vertex(_vertices[vertexIndices[0]].getPosition());
				let v1 = new Vertex(_vertices[vertexIndices[1]].getPosition());
				let v2 = new Vertex(_vertices[vertexIndices[2]].getPosition());
				v0.setTextureCoord(_texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(_texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(_texCoords[texCoordIndices[2]]);
				
				if(_genTangents) {
					generateTangents(v0, v1, v2);
				}				
				
				addToSmoothingGroup(
					_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
					v0, v1, v2
				);
			}		
		} else {									// vertex
			
			let vertexIndices = [
				+tokens[1] - 1,
				+tokens[2] - 1,
				+tokens[3] - 1
			];
			
			let v0 = _vertices[vertexIndices[0]];
			let v1 = _vertices[vertexIndices[1]];
			let v2 = _vertices[vertexIndices[2]];
			
			if(_genTangents) {
				generateTangents(v0, v1, v2);
			}
			
			addToSmoothingGroup(
				_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
				v0, v1, v2
			);
		}
	}
	
	var parseQuadFace = function(tokens) {
		// vertex//normal
		if(tokens[1].includes("//")) {
			
			let vertexIndices = [
				+tokens[1].split("//")[0] - 1,
				+tokens[2].split("//")[0] - 1,
				+tokens[3].split("//")[0] - 1,
				+tokens[4].split("//")[0] - 1
			];
			
			let normalIndices = [
				+tokens[1].split("//")[1] - 1,
				+tokens[2].split("//")[1] - 1,
				+tokens[3].split("//")[1] - 1,
				+tokens[4].split("//")[1] - 1
			];
			
			let v0 = new Vertex(_vertices[vertexIndices[0]].getPosition());
			let v1 = new Vertex(_vertices[vertexIndices[1]].getPosition());
			let v2 = new Vertex(_vertices[vertexIndices[2]].getPosition());
			let v3 = new Vertex(_vertices[vertexIndices[3]].getPosition());
			v0.setNormal(_normals[normalIndices[0]]);
			v1.setNormal(_normals[normalIndices[1]]);
			v2.setNormal(_normals[normalIndices[2]]);
			v3.setNormal(_normals[normalIndices[3]]);
			
			if(_genTangents) {
				generateTangents(v0, v1, v2);
				generateTangents(v2, v1, v3);
			}			
			addToSmoothingGroup(
				_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
				v0, v1, v2, v3
			);
		}
		
		else if(tokens[1].includes("/")) {	
		
			// vertex/textureCoord/normal
			if(tokens[1].split("/").length == 3) {

				let vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1,
					+tokens[4].split("/")[0] - 1
				];
				
				let texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1,
					+tokens[4].split("/")[1] - 1
				];
				
				let normalIndices = [
					+tokens[1].split("/")[2] - 1,
					+tokens[2].split("/")[2] - 1,
					+tokens[3].split("/")[2] - 1,
					+tokens[4].split("/")[2] - 1
				];
				
				let v0 = new Vertex(_vertices[vertexIndices[0]].getPosition());
				let v1 = new Vertex(_vertices[vertexIndices[1]].getPosition());
				let v2 = new Vertex(_vertices[vertexIndices[2]].getPosition());
				let v3 = new Vertex(_vertices[vertexIndices[3]].getPosition());
				v0.setNormal(_normals[normalIndices[0]]);
				v1.setNormal(_normals[normalIndices[1]]);
				v2.setNormal(_normals[normalIndices[2]]);
				v3.setNormal(_normals[normalIndices[3]]);			
				v0.setTextureCoord(_texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(_texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(_texCoords[texCoordIndices[2]]);
				v3.setTextureCoord(_texCoords[texCoordIndices[3]]);
				
				if(_genTangents) {
					generateTangents(v0, v1, v2);
					generateTangents(v2, v1, v3);
				}
				
				addToSmoothingGroup(
					_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
					v0, v1, v2, v3
				);
			}
			
			// vertex/textureCoord
			else {

				let vertexIndices = [
					+tokens[1].split("/")[0] - 1,
					+tokens[2].split("/")[0] - 1,
					+tokens[3].split("/")[0] - 1,
					+tokens[4].split("/")[0] - 1
				];
				
				let texCoordIndices =  [
					+tokens[1].split("/")[1] - 1,
					+tokens[2].split("/")[1] - 1,
					+tokens[3].split("/")[1] - 1,
					+tokens[4].split("/")[1] - 1
				];
				
				let v0 = new Vertex(_vertices[vertexIndices[0]].getPosition());
				let v1 = new Vertex(_vertices[vertexIndices[1]].getPosition());
				let v2 = new Vertex(_vertices[vertexIndices[2]].getPosition());
				let v3 = new Vertex(_vertices[vertexIndices[3]].getPosition());
				v0.setTextureCoord(_texCoords[texCoordIndices[0]]);
				v1.setTextureCoord(_texCoords[texCoordIndices[1]]);
				v2.setTextureCoord(_texCoords[texCoordIndices[2]]);
				v3.setTextureCoord(_texCoords[texCoordIndices[3]]);
				
				if(_genTangents) {
					generateTangents(v0, v1, v2);
					generateTangents(v2, v1, v3);
				}
				
				addToSmoothingGroup(
					_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
					v0, v1, v2, v3
				);
			}		
		}
	
		// vertex
		else {
			
			let vertexIndices = [
				+tokens[1] - 1,
				+tokens[2] - 1,
				+tokens[3] - 1,
				+tokens[4] - 1
			];
			
			let v0 = new Vertex(_vertices[vertexIndices[0]].getPosition());
			let v1 = new Vertex(_vertices[vertexIndices[1]].getPosition());
			let v2 = new Vertex(_vertices[vertexIndices[2]].getPosition());
			let v3 = new Vertex(_vertices[vertexIndices[3]].getPosition());
			if(_genTangents) {
				generateTangents(v0, v1, v2);
				generateTangents(v2, v1, v3);
			}
			
			addToSmoothingGroup(
				_objects.peekLast().getPolygonGroups().peekLast().getSmoothingGroups().get(_currentSmoothingGroup),
				v0, v1, v2, v3
			);
		}
	}
	
	var addToSmoothingGroup = function(smoothingGroup, v0, v1, v2, v3) {
		let index0 = processVertex(smoothingGroup, v0);
		let index1 = processVertex(smoothingGroup, v1);
		let index2 = processVertex(smoothingGroup, v2);
		
		let face0 = new Face();
		face0.getIndices()[0] = index0;
		face0.getIndices()[1] = index1;
		face0.getIndices()[2] = index2;
		face0.setMaterial(_materialName);
		smoothingGroup.getFaces().push(face0);
		// if v3 defined - add new face
		if(v3) {
			let index3 = processVertex(smoothingGroup, v3);
			
			let face1 = new Face();
			face1.getIndices()[0] = index0;
			face1.getIndices()[1] = index2;
			face1.getIndices()[2] = index3;
			face1.setMaterial(_materialName);
			
			smoothingGroup.getFaces().push(face1);
		}

	}
	
	let processVertex = function(smoothingGroup, previousVertex) {
		if(smoothingGroup.getVertices().includes(previousVertex)) {
			let index = smoothingGroup.getVertices().indexOf(previousVertex);
			let nextVertex = smoothingGroup.getVertices()[index];
			if(!hasSameNormalAndTexture(previousVertex, nextVertex)) {		
				if(nextVertex.getDublicateVertex() != null) {
					return processVertex(smoothingGroup, nextVertex.getDublicateVertex());
				} else {
					let newVertex = new Vertex();
					newVertex.setPos(previousVertex.getPosition());
					newVertex.setNormal(previousVertex.getNormal());
					newVertex.setTextureCoord(previousVertex.getTextureCoord());
					previousVertex.setDubilcateVertex(newVertex);
					smoothingGroup.getVertices().push(newVertex);
					return smoothingGroup.getVertices().indexOf(newVertex);
				}
			}
		}
		smoothingGroup.getVertices().push(previousVertex);
		return smoothingGroup.getVertices().indexOf(previousVertex);
	}
	
	var hasSameNormalAndTexture = function(v1, v2) {
		return (v1.getNormal().equals(v2.getNormal()) && v1.getTextureCoord().equals(v2.getTextureCoord()));
	}
	
	var generatePolygon = function(smoothingGroups, polygon) {
		for(let key of smoothingGroups.keys()) {
			for(let face of smoothingGroups.get(key).getFaces()) {
				if(face.getMaterial() == polygon.getMaterial()) {
					if(!polygon.getVertices().includes(smoothingGroups.get(key).getVertices()[face.getIndices()[0]])) {
						polygon.getVertices().push(smoothingGroups.get(key).getVertices()[face.getIndices()[0]]);						
					}
					
					if(!polygon.getVertices().includes(smoothingGroups.get(key).getVertices()[face.getIndices()[1]])) {
						polygon.getVertices().push(smoothingGroups.get(key).getVertices()[face.getIndices()[1]]);
					}
					
					if(!polygon.getVertices().includes(smoothingGroups.get(key).getVertices()[face.getIndices()[2]])) {
						polygon.getVertices().push(smoothingGroups.get(key).getVertices()[face.getIndices()[2]]);
					}
					
					polygon.getIndices().push(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices()[face.getIndices()[0]]));
					polygon.getIndices().push(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices()[face.getIndices()[1]]));
					polygon.getIndices().push(polygon.getVertices().indexOf(smoothingGroups.get(key).getVertices()[face.getIndices()[2]]));
				}
			}
		}
	}
	
	var generateTangents = function(v0, v1, v2) {
		let delatPos1 = Vector3f.sub(v1.getPosition(), v0.getPosition());
		let delatPos2 = Vector3f.sub(v2.getPosition(), v0.getPosition());
		let uv0 = v0.getTextureCoord();
		let uv1 = v1.getTextureCoord();
		let uv2 = v2.getTextureCoord();
		let deltaUv1 = Vector2f.sub(uv1, uv0);
		let deltaUv2 = Vector2f.sub(uv2, uv0);

		let r = 1.0 / (deltaUv1.x * deltaUv2.y - deltaUv1.y * deltaUv2.x);
		delatPos1.scale(deltaUv2.y);
		delatPos2.scale(deltaUv1.y);
		let tangent = Vector3f.sub(delatPos1, delatPos2);
		tangent.scale(r);
		v0.setTangent(tangent);
		v1.setTangent(tangent);
		v2.setTangent(tangent);
	}
	
	var convert = function(polygon) {
		let indices = polygon.getIndices().slice();
		let vertices = polygon.getVertices().slice();
		let positions = [];
		let normals = [];
		let textureCoords = [];
		
		for(let i = 0; i < vertices.length; i++) {
			positions.push(vertices[i].getPosition().x);
			positions.push(vertices[i].getPosition().y);
			positions.push(vertices[i].getPosition().z);
		}
		
		for(let i = 0; i < vertices.length; i++) {
			normals.push(vertices[i].getNormal().x);
			normals.push(vertices[i].getNormal().y);
			normals.push(vertices[i].getNormal().z);
		}
		
		for(let i = 0; i < vertices.length; i++) {
			textureCoords.push(vertices[i].getTextureCoord().x);
			textureCoords.push(1 - vertices[i].getTextureCoord().y);
		}
		
		let tangents = null;
		
		let vao = null;
		
		if(_genTangents) {
			tangents = vertices.forEach((vertex, index, arr) => {
				arr.splice(index, 1, vertex.getTangent().x, vertex.getTangent().y, vertex.getTangent().z);
			});
			
			vao = buffers.createVAO(indices, positions, textureCoords, normals, tangents);
		} else {
			vao = buffers.createVAO(indices, positions, textureCoords, normals);	
		}
		
		return vao;
	}
	
	this.clean = function() {
		_vertices.length = 0;
		_normals.length = 0;
		_texCoords.length = 0;
	}
}

export {OBJLoader};