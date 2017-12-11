import {Camera} from './../object/camera/Camera';
import {ObjectManager} from './../manager/ObjectManager';
import {Entity} from './../object/entity/Entity';
import {Light} from './../object/light/Light';
import {Model} from './../primitive/Model';
import {Mesh} from './../primitive/Mesh';
import {Material} from './../primitive/Material';
import {Vector3f} from './../math/vector/Vector3f';
import {VAO} from './../primitive/VAO';
import {buffers} from './../core/Loop';
import {OBJLoader} from './../loader/objectLoader/OBJLoader';

/**
 * Engine scene controll function.
 * 
 */
function Scene() {
	// initialization
	var _camera = new Camera("MyCamera");
	var _sun = null;
	var _entities = new ObjectManager();
	var _lights = new ObjectManager();
	
	// prepare entities
	var loader = new OBJLoader();
	var meshes = loader.load("", "spartan", null);
	var material = new Material("entityMaterial");
	var model = new Model("entityModel", meshes, material);
	var entity = new Entity("entity", model, new Vector3f(0, 0, 0));
	
	_entities.add(entity);
	
	// prepare lights
	var sun = new Light(
			new Vector3f(1000, 5000, 1000), 
			new Vector3f(1.3, 1.3, 1.3)
		);
	
	_lights.add(sun);

	// methods
	this.getCamera = function() {
		return _camera;
	}
	
	this.getEntities = function() {
		return _entities;
	}
	
	this.getLights = function() {
		return _lights;
	}
	
	this.getSun = function() {
		return _sun;
	}
}

export {Scene};