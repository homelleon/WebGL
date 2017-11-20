import ShaderProgram from './ShaderProgram';
export default function TestShader(name, gl, vertex, fragment) {
	//----programs
	const VERTEX_FILE = vertex;
	const FRAGMENT_FILE = fragment;
	
	// initialization
	this.prototype = new ShaderProgram(name, gl);
	this.prototype.addVertexShader(VERTEX_FILE);
	this.prototype.addFragmentShader(FRAGMENT_FILE);
	this.prototype.compile();
}