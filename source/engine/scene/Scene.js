import {Camera} from './../object/camera/Camera';
import {ObjectManager} from './../manager/ObjectManager';
import {Entity} from './../object/entity/Entity';
import {Model} from './../primitive/Model';
import {Mesh} from './../primitive/Mesh';
import {Material} from './../primitive/Material';
import {Vector3f} from './../math/vector/Vector3f';
import {VAO} from './../primitive/VAO';
import {buffers} from './../core/Loop';

/**
 * Engine scene controll function.
 * 
 */
function Scene() {
	var __camera = new Camera("MyCamera");	
	var __entities = new ObjectManager();
	
	// entity creation	
	var vertices = [
        // face
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,
         0.5, 0.5, 0.5,
         0.5, -0.5, 0.5,
        // back 
        -0.5, -0.5, -0.5,
        -0.5, 0.5, -0.5,
         0.5, 0.5, -0.5,
         0.5, -0.5, -0.5
	];
	
	var textureCoords = [
        // face
         0.0, 0.0,
         0.5, 0.5,
         0.5, 0.5,
         0.5, -0.5,
        // back 
        -0.5, -0.5,
        -0.5, 0.5,
         0.5, 0.5,
         0.5, -0.5
	];
	
	var normals = [
        // face
         0, 1, 0,
         0, 1, 0,
         0, 1, 0,
         0, 1, 0,
        // back 
         0, -1, 0,
         0, -1, 0,
         0, -1, 0,
         0, -1, 0
	];
	
	var indices = [
		0, 1, 1, 2, 
		2, 3, 3, 0, 
		0, 4, 4, 5, 
		5, 6, 6, 7, 
		7, 4, 1, 5, 
		2, 6, 3, 7
	];
	
	var vao = buffers.createVAO(indices, vertices, textureCoords, normals);
		
	var mesh = new Mesh("entityMesh", vao);
	var material = new Material("entityMaterial");
	var model = new Model("entityModel", mesh, material);	
	var entity = new Entity("entity", model, new Vector3f(0, 0, 0));
	
	__entities.add(entity);
	
	// methods
	this.getCamera = function() {
		return __camera;
	}
	
	this.getEntities = function() {
		return __entities;
	}
}

export {Scene};