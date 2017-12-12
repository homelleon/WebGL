// FRAGMENT SHADER - Entity
#define MAX_LIGHTS 10
precision mediump float;

// > in <
varying vec3 toLightVector[MAX_LIGHTS];
varying vec3 surfaceNormal;
varying vec3 toCameraVector;
varying vec2 textureCoords;

// > uniforms <
// lights
uniform vec3 lightColor[MAX_LIGHTS];
uniform vec3 lightAttenuation[MAX_LIGHTS];
uniform float shininess;
uniform float reflectivity;

// texture
uniform sampler2D diffuseMap;

void main(void) {
	
	vec3 unitNormal = normalize(surfaceNormal);
	vec3 unitVectorToCamera = normalize(toCameraVector);

	vec3 totalDiffuse = vec3(0.0);
	vec3 totalSpecular = vec3(0.0);

	// lights influence
	for(int i = 0; i < MAX_LIGHTS; i++) {
		float distance = length(toLightVector[i]);
		float attFactor = lightAttenuation[1].x +
				(lightAttenuation[i].y * distance) +
				(lightAttenuation[i].z * distance * distance);

		vec3 unitLightVector = normalize(toLightVector[i]);
		float nDot1 = dot(unitNormal, unitLightVector);
		float brightness = max(nDot1, 0.0);
		vec3 lightDirection = -unitLightVector;
		vec3 reflectedLightDirection = reflect(lightDirection, unitNormal);
		float specularFactor = dot(reflectedLightDirection, unitVectorToCamera);
		specularFactor = max(specularFactor, 0.0);
		float dampedFactor = pow(specularFactor, shininess);
		totalDiffuse = totalDiffuse + (brightness * lightColor[i]) / attFactor;
		totalSpecular = totalSpecular + (dampedFactor * reflectivity * lightColor[i]) / attFactor;
	}

	// fragment color
	vec4 out_Color = texture2D(diffuseMap, textureCoords);
	
	out_Color = vec4(totalDiffuse, 1.0) * out_Color + vec4(totalSpecular, 1.0);
	
	gl_FragColor = out_Color;
}
