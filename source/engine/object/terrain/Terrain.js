function Terrain(name, terrainMesh, terrainMaterial, position) {
	this.name = name;
	this.mesh = terrainMesh;
	this.material = terrainMaterial;
	this.x = position.x;
	this.z = position.y;
}

export {Terrain};