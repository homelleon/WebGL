import {VAO} from './../primitive/VAO';

function VAOManager() {
	// initialization
	var _vaos = [];
	var _vbos = [];
	
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
		_vaos.push(vao);
		return vao;
	} 
	
	
	this.clean = function() {
		if(_vaos.length) {
			_vaos = [];
		}
		if(_vbos.length) {
			_vbos = [];
		}
	}
}

export {VAOManager};