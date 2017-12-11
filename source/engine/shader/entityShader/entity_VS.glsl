// VETEX SHADER - Entity
#define MAX_LIGHTS 10
// > in <
attribute vec3 in_position;
attribute vec2 in_textureCoords;
attribute vec3 in_normals;

// > out <
varying vec3 toLightVector[MAX_LIGHTS];
varying vec3 toCameraVector;
varying vec3 surfaceNormal;

// > uniforms <
// matrices
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 inverseViewMatrix;

// lights
uniform vec3 lightPosition[MAX_LIGHTS];
// > main <
void main(void) {
	
	mat4 mvpMatrix = projectionMatrix * viewMatrix;
	vec4 worldPosition = vec4(in_position, 1.0);
	
	// normal
	surfaceNormal = in_normals;

	// lights
	for(int i = 0; i < MAX_LIGHTS; i++) {
		toLightVector[i] = lightPosition[i] - worldPosition.xyz;
	}

	toCameraVector = (inverseViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz - worldPosition.xyz;

	// position
	gl_Position = mvpMatrix * worldPosition;
}
