import {gl} from './../../index';

/**
 * Represents webgl 2D texture object.
 * 
 * @param name - texture name
 * @param source - texture loading folder
 */
function Texture(name, source) {
	// constructor
	var _name = name;
	var _object = gl.createTexture();
	var _image = new Image();
	
	gl.bindTexture(gl.TEXTURE_2D, _object);
	
	if(source) {
		require("./../../file/texture/" + source);
		_image.src = "/images/" + source;
	}
	
	var active = function(location) {
		if(location >= 0 && location < 31) {
			gl.aciveTexture(gl.TEXTURE0 + location);
		} else {
			throw "Incorrect location varibale!";
		}
	}
	
	// methods
	/**
	 * Binds texture for webgl rendering context to
	 * location index.
	 * 
	 * @param location - texture bind index
	 */
	this.bind = function(location) {
		if(location) {
			active(location);
		}		
		gl.bindTexture(gl.TEXTURE_2D, _object);
	}
	
	/**
	 * Clears current bind index from webgl rendering context.
	 */
	this.unbind = function() {
		gl.bindTexture(gl.TEXTURE_2D, null);
	}
	
	/**
	 * Deletes current texture object. 
	 */
	this.destroy = function() {
		gl.deleteTexture(_object);
	}
	
	// change texture parameters
	this.noFilter = function() {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	}
	
	this.bilinearFilter = function() {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
	
	this.repeatWrap = function() {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
	}
	
	this.mirrorRepeatWrap = function() {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
	}

	// get & set
	/**
	 * Gets texture name.
	 */
	this.getName = function() {
		return _name;
	}
	
	/**
	 * Gets texture object.
	 */
	this.getObject = function() {
		return _object;
	}
	
	/**
	 * Gets attached image object.
	 */
	this.getImage = function() {
		return _image;
	}
	
	// initialization
	this.bind();
	gl.pixelStorei(gl.UNPACK_ALLIGNMENT, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _image);
	this.bilinearFilter();
	
};

export {Texture};