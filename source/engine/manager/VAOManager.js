import {VAO} from './../primitive/VAO';

function VAOManager() {
	// initialization
	var vaos = [];
	var vbos = [];
	
	// methods
	this.createVAO = function(indices, vertices, textures, normals) {
		var vao = new VAO();
		vao.bind();
		vao.createIndexBuffer(indices);
		vao.createAttribute(0, 3, vertices);
		if(textures) {
			vao.createAttribute(1, 2, textures);
		}
		if(normals) {
			vao.createAttribute(2, 3, normals);
		}
		vao.unbind();
		vaos.push(vao);
		return vao;
	} 
	
	
	this.clean = function() {
		if(vaos.length) {
			vaos = [];
		}
		if(vbos.length) {
			vbos = [];
		}
	}
}

export {VAOManager};