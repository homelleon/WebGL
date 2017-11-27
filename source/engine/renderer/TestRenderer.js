import {TestShader} from './../shader/TestShader';
import {VAO} from './../primitive/VAO';
import {gl} from  './../../index.js';
import {Matrix4f} from './../math/matrix/Matrix4f';
import {Camera} from './../object/camera/Camera';

export function TestRenderer() {	
	// initialization
	this.shader = new TestShader();
	
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
	
	var indices = [
		0, 1, 1, 2, 
		2, 3, 3, 0, 
		0, 4, 4, 5, 
		5, 6, 6, 7, 
		7, 4, 1, 5, 
		2, 6, 3, 7
	];
	
	// vao
	this.vao = new VAO();
	this.vao.bind();
	this.vao.createIndexBuffer(indices);
	this.vao.createAttribute(0, 3, vertices);
	this.vao.unbind();
	
	// matrices
	
	// projection matrix
	this.projectionMatrix = new Matrix4f();
	var aspectRatio = gl.viewportWidth / gl.viewportHeight;
	const FOV = 120;
	var yScale = 1 / Math.tan(Math.toRadians(FOV / 2));
	var xScale = yScale / aspectRatio;
	var farPlane = 10000;
	var nearPlane = 0.1;
	var frustumLength = farPlane - nearPlane;
	this.projectionMatrix.setIdentity();
	this.projectionMatrix.m[0][0] = xScale;
	this.projectionMatrix.m[1][1] = yScale;
	this.projectionMatrix.m[2][2] = -((farPlane + nearPlane) / frustumLength); 
	this.projectionMatrix.m[2][3] = -1;
	this.projectionMatrix.m[3][2] = -((2 * nearPlane * farPlane) / frustumLength);
	this.projectionMatrix.m[3][3] = 0; 
	
	// camara
	this.camera = new Camera();
	
	// initialize some shader uniforms
	this.shader.start();
	this.shader.loadProjectionMatrix(this.projectionMatrix);
	this.shader.stop();
	
	// methods
	this.render = function render() {
		this.shader.start();
		this.vao.bindAttrib([0]);
		this.shader.loadViewMatrix(this.camera.getViewMatrix());
		gl.drawElements(gl.LINES, this.vao.indexBuffer.size, gl.UNSIGNED_SHORT, 0);
		this.vao.unbindAttrib([0]);
		this.shader.stop();
	}
	
	this.clean = function clean() {
		this.shader.stop();
		this.shader.clean();
		this.vao.clean();
	}
}