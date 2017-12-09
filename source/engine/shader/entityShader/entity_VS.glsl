// VETEX SHADER - Entity
attribute vec3 in_position;
attribute vec2 in_textureCoords;
attribute vec3 in_normals;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;

void main(void) {
	
	mat4 mvpMatrix = viewMatrix * projectionMatrix;
	
	gl_Position = mvpMatrix * vec4(in_position, 1.0);
}
