export function this.matrix4f() {
	this.m = [][];
	this.setIdentity();
	
	this.zero = function zero() {
		this.m[0][0] = 0; this.m[0][1] = 0; this.m[0][2] = 0; this.m[0][3] = 0;
		this.m[1][0] = 0; this.m[1][1] = 0; this.m[1][2] = 0; this.m[1][3] = 0;
		this.m[2][0] = 0; this.m[2][1] = 0; this.m[2][2] = 0; this.m[2][3] = 0;
		this.m[3][0] = 0; this.m[3][1] = 0; this.m[3][2] = 0; this.m[3][3] = 0;
		
		return this;
	}
	
	this.setIdentity = function setIdentity() {
		this.m[0][0] = 1; this.m[0][1] = 0; this.m[0][2] = 0; this.m[0][3] = 0;
		this.m[1][0] = 0; this.m[1][1] = 1; this.m[1][2] = 0; this.m[1][3] = 0;
		this.m[2][0] = 0; this.m[2][1] = 0; this.m[2][2] = 1; this.m[2][3] = 0;
		this.m[3][0] = 0; this.m[3][1] = 0; this.m[3][2] = 0; this.m[3][3] = 1;
	
		return this;
	}
	
	this.orthographic2D = function Orthographic2D(width, height) {
		this.m[0][0] = 2f / width; this.m[0][1] = 0; 		 this.m[0][2] = 0; this.m[0][3] = -1;
		this.m[1][0] = 0;		   this.m[1][1] = 2f/height; this.m[1][2] = 0; this.m[1][3] = -1;
		this.m[2][0] = 0; 		   this.m[2][1] = 0; 		 this.m[2][2] = 1; this.m[2][3] =  0;
		this.m[3][0] = 0; 		   this.m[3][1] = 0; 		 this.m[3][2] = 0; this.m[3][3] =  1;
		
		return this;
	}
	
	/**
	 * Translates current matrix by argument of Vector3f translation object.
	 */
	this.translate3f = function translate3f(translation) {
		this.m[3][0] += this.m[0][0] * translation.x + this.m[1][0] * translation.y + this.m[2][0] * translation.z;
		this.m[3][1] += this.m[0][1] * translation.x + this.m[1][1] * translation.y + this.m[2][1] * translation.z;
		this.m[3][2] += this.m[0][2] * translation.x + this.m[1][2] * translation.y + this.m[2][2] * translation.z;
		this.m[3][3] += this.m[0][3] * translation.x + this.m[1][3] * translation.y + this.m[2][3] * translation.z;
	
		return this;
	}
	
	/**
	 * Translates current matrix by argument of Vector2f translation object.
	 */
	this.translate2f = translate2f(translation) {		
		this.m[3][0] += this.m[0][0] * translation.x + this.m[1][0] * translation.y;
		this.m[3][1] += this.m[0][1] * translation.x + this.m[1][1] * translation.y;
		this.m[3][2] += this.m[0][2] * translation.x + this.m[1][2] * translation.y;
		this.m[3][3] += this.m[0][3] * translation.x + this.m[1][3] * translation.y;
		
		return this;
	}
	
	/**
	 * Creates tranformation plane from current matrix by argument of Vector4f plane object.
	 */
	this.transform = transform(plane) {
		var x = this.m[0][0] * plane.x + this.m[1][0] * plane.y + this.m[2][0] * plane.z + this.m[3][0] * plane.w;
		var y = this.m[0][1] * plane.x + this.m[1][1] * plane.y + this.m[2][1] * plane.z + this.m[3][1] * plane.w;
		var z = this.m[0][2] * plane.x + this.m[1][2] * plane.y + this.m[2][2] * plane.z + this.m[3][2] * plane.w;
		var w = this.m[0][3] * plane.x + this.m[1][3] * plane.y + this.m[2][3] * plane.z + this.m[3][3] * plane.w;
		
		return new Vector4f(x,y,z,w);
	}
	
	//TODO: need to be static
	this.transform = function transform(matrix, plane) {
		var x = matrix.m[0][0] * plane.x + matrix.m[1][0] * plane.y + matrix.m[2][0] * plane.z + matrix.m[3][0] * plane.w;
		var y = matrix.m[0][1] * plane.x + matrix.m[1][1] * plane.y + matrix.m[2][1] * plane.z + matrix.m[3][1] * plane.w;
		var z = matrix.m[0][2] * plane.x + matrix.m[1][2] * plane.y + matrix.m[2][2] * plane.z + matrix.m[3][2] * plane.w;
		var w = matrix.m[0][3] * plane.x + matrix.m[1][3] * plane.y + matrix.m[2][3] * plane.z + matrix.m[3][3] * plane.w;
		
		return new Vector4f(x,y,z,w);
	}
	
	/**
	 * Rotates by argument of vector3f rotation object.
	 */
	this.rotate = function rotate(rotation) {
		var rx = new Matrix4f();
		var ry = new Matrix4f();
		var rz = new Matrix4f();
		
		//TODO: toRadiants - is there such a function in JS?
		var x = (float)Math.toRadians(rotation.getX());
		var y = (float)Math.toRadians(rotation.getY());
		var z = (float)Math.toRadians(rotation.getZ());
		
		rz.m[0][0] = Math.cos(z); 		 rz.m[0][1] = -Math.sin(z); 	 	 rz.m[0][2] = 0; 				   rz.m[0][3] = 0;
		rz.m[1][0] = Math.sin(z); 		 rz.m[1][1] = Math.cos(z);  	 	 rz.m[1][2] = 0; 				   rz.m[1][3] = 0;
		rz.m[2][0] = 0; 				 rz.m[2][1] = 0; 				   	 rz.m[2][2] = 1; 				   rz.m[2][3] = 0;
		rz.m[3][0] = 0; 				 rz.m[3][1] = 0; 				   	 rz.m[3][2] = 0; 				   rz.m[3][3] = 1;
		
		rx.m[0][0] = 1; 				 rx.m[0][1] = 0;					 rx.m[0][2] = 0; 				   rx.m[0][3] = 0;
		rx.m[1][0] = 0; 				 rx.m[1][1] = Math.cos(x); 			 rx.m[1][2] = -Math.sin(x); 	   rx.m[1][3] = 0;
		rx.m[2][0] = 0; 				 rx.m[2][1] = Math.sin(x); 	 		 rx.m[2][2] = Math.cos(x);  	   rx.m[2][3] = 0;
		rx.m[3][0] = 0; 				 rx.m[3][1] = 0; 				 	 rx.m[3][2] = 0;				   rx.m[3][3] = 1;
		
		ry.m[0][0] = Math.cos(y); 		 ry.m[0][1] = 0; 					 ry.m[0][2] = Math.sin(y);  	   ry.m[0][3] = 0;
		ry.m[1][0] = 0; 				 ry.m[1][1] = 1; 				 	 ry.m[1][2] = 0; 				   ry.m[1][3] = 0;
		ry.m[2][0] = -Math.sin(y);		 ry.m[2][1] = 0;					 ry.m[2][2] = Math.cos(y);  	   ry.m[2][3] = 0;
		ry.m[3][0] = 0; 				 ry.m[3][1] = 0; 					 ry.m[3][2] = 0; 				   ry.m[3][3] = 1;
	
		this.m =  rz.mul(ry.mul(rx)).getM();
		
		return this;
	}
	
	/**
	 * Rotates current matrix by arguments of rotation angle and axis.
	 */
	this.rotate = function rotate(angle, axis) {		
		var c = Math.cos(angle);
		var s = Math.sin(angle);
		var oneminusc = 1.0f - c;
		var xy = axis.x * axis.y;
		var yz = axis.y * axis.z;
		var xz = axis.x * axis.z;
		var xs = axis.x * s;
		var ys = axis.y * s;
		var zs = axis.z * s;

		var f00 = axis.x * axis.x * oneminusc + c;
		var f01 = xy * oneminusc + zs;
		var f02 = xz * oneminusc - ys;
		// n[3] not used
		var f10 = xy * oneminusc - zs;
		var f11 = axis.y * axis.y * oneminusc + c;
		var f12 = yz * oneminusc + xs;
		// n[7] not used
		var f20 = xz * oneminusc + ys;
		var f21 = yz * oneminusc - xs;
		var f22 = axis.z * axis.z * oneminusc + c;

		var t00 = this.m[0][0] * f00 + this.m[1][0] * f01 + this.m[2][0] * f02;
		var t01 = this.m[0][1] * f00 + this.m[1][1] * f01 + this.m[2][1] * f02;
		var t02 = this.m[0][2] * f00 + this.m[1][2] * f01 + this.m[2][2] * f02;
		var t03 = this.m[0][3] * f00 + this.m[1][3] * f01 + this.m[2][3] * f02;
		var t10 = this.m[0][0] * f10 + this.m[1][0] * f11 + this.m[2][0] * f12;
		var t11 = this.m[0][1] * f10 + this.m[1][1] * f11 + this.m[2][1] * f12;
		var t12 = this.m[0][2] * f10 + this.m[1][2] * f11 + this.m[2][2] * f12;
		var t13 = this.m[0][3] * f10 + this.m[1][3] * f11 + this.m[2][3] * f12;
		
		
		this.m[2][0] = this.m[0][0] * f20 + this.m[1][0] * f21 + this.m[2][0] * f22;
		this.m[2][1] = this.m[0][1] * f20 + this.m[1][1] * f21 + this.m[2][1] * f22;
		this.m[2][2] = this.m[0][2] * f20 + this.m[1][2] * f21 + this.m[2][2] * f22;
		this.m[2][3] = this.m[0][3] * f20 + this.m[1][3] * f21 + this.m[2][3] * f22;
		this.m[0][0] = t00;
		this.m[0][1] = t01;
		this.m[0][2] = t02;
		this.m[0][3] = t03;
		this.m[1][0] = t10;
		this.m[1][1] = t11;
		this.m[1][2] = t12;
		this.m[1][3] = t13;
		
		return this;
	}
	
	/**
	 * Scales current matrix by argument Vector2f object
	 */
	this.scale = function scale(scaling) {
		this.m[0][0] = this.m[0][0] * scaling.x;
		this.m[0][1] = this.m[0][1] * scaling.x;
		this.m[0][2] = this.m[0][2] * scaling.x;
		this.m[0][3] = this.m[0][3] * scaling.x;
		this.m[1][0] = this.m[1][0] * scaling.y;
		this.m[1][1] = this.m[1][1] * scaling.y;
		this.m[1][2] = this.m[1][2] * scaling.y;
		this.m[1][3] = this.m[1][3] * scaling.y;
		this.m[2][0] = this.m[2][0] * scaling.z;
		this.m[2][1] = this.m[2][1] * scaling.z;
		this.m[2][2] = this.m[2][2] * scaling.z;
		this.m[2][3] = this.m[2][3] * scaling.z;
		
		return this;
	}	
	
	/**
	 * Multiplies current matrix by argument matrix.
	 */
	this.mul = function mul(matrix) {
		
		return this.load(this.mul(this, matrix));
	}
	
	//TODO: need to be static
	/**
	 * Gets result of multiplication of two matrices.
	 */
	this.mul = function mul(left, right) {
		var matrix = new Matrix4f();
		matrix.m[0][0] = left.m[0][0] * right.m[0][0] + left.m[1][0] * right.m[0][1] + left.m[2][0] * right.m[0][2] + left.m[3][0] * right.m[0][3];
		matrix.m[0][1] = left.m[0][1] * right.m[0][0] + left.m[1][1] * right.m[0][1] + left.m[2][1] * right.m[0][2] + left.m[3][1] * right.m[0][3];
		matrix.m[0][2] = left.m[0][2] * right.m[0][0] + left.m[1][2] * right.m[0][1] + left.m[2][2] * right.m[0][2] + left.m[3][2] * right.m[0][3];
		matrix.m[0][3] = left.m[0][3] * right.m[0][0] + left.m[1][3] * right.m[0][1] + left.m[2][3] * right.m[0][2] + left.m[3][3] * right.m[0][3];
		matrix.m[1][0] = left.m[0][0] * right.m[1][0] + left.m[1][0] * right.m[1][1] + left.m[2][0] * right.m[1][2] + left.m[3][0] * right.m[1][3];
		matrix.m[1][1] = left.m[0][1] * right.m[1][0] + left.m[1][1] * right.m[1][1] + left.m[2][1] * right.m[1][2] + left.m[3][1] * right.m[1][3];
		matrix.m[1][2] = left.m[0][2] * right.m[1][0] + left.m[1][2] * right.m[1][1] + left.m[2][2] * right.m[1][2] + left.m[3][2] * right.m[1][3];
		matrix.m[1][3] = left.m[0][3] * right.m[1][0] + left.m[1][3] * right.m[1][1] + left.m[2][3] * right.m[1][2] + left.m[3][3] * right.m[1][3];
		matrix.m[2][0] = left.m[0][0] * right.m[2][0] + left.m[1][0] * right.m[2][1] + left.m[2][0] * right.m[2][2] + left.m[3][0] * right.m[2][3];
		matrix.m[2][1] = left.m[0][1] * right.m[2][0] + left.m[1][1] * right.m[2][1] + left.m[2][1] * right.m[2][2] + left.m[3][1] * right.m[2][3];
		matrix.m[2][2] = left.m[0][2] * right.m[2][0] + left.m[1][2] * right.m[2][1] + left.m[2][2] * right.m[2][2] + left.m[3][2] * right.m[2][3];
		matrix.m[2][3] = left.m[0][3] * right.m[2][0] + left.m[1][3] * right.m[2][1] + left.m[2][3] * right.m[2][2] + left.m[3][3] * right.m[2][3];
		matrix.m[3][0] = left.m[0][0] * right.m[3][0] + left.m[1][0] * right.m[3][1] + left.m[2][0] * right.m[3][2] + left.m[3][0] * right.m[3][3];
		matrix.m[3][1] = left.m[0][1] * right.m[3][0] + left.m[1][1] * right.m[3][1] + left.m[2][1] * right.m[3][2] + left.m[3][1] * right.m[3][3];
		matrix.m[3][2] = left.m[0][2] * right.m[3][0] + left.m[1][2] * right.m[3][1] + left.m[2][2] * right.m[3][2] + left.m[3][2] * right.m[3][3];
		matrix.m[3][3] = left.m[0][3] * right.m[3][0] + left.m[1][3] * right.m[3][1] + left.m[2][3] * right.m[3][2] + left.m[3][3] * right.m[3][3];

		return matrix;
	}
	
	public static Matrix4f mul(Matrix4f left, Matrix4f right, Matrix4f dest){
		if(dest == null) {
			
		}
		dest.m[0][0] = left.m[0][0] * right.m[0][0] + left.m[1][0] * right.m[0][1] + left.m[2][0] * right.m[0][2] + left.m[3][0] * right.m[0][3];
		dest.m[0][1] = left.m[0][1] * right.m[0][0] + left.m[1][1] * right.m[0][1] + left.m[2][1] * right.m[0][2] + left.m[3][1] * right.m[0][3];
		dest.m[0][2] = left.m[0][2] * right.m[0][0] + left.m[1][2] * right.m[0][1] + left.m[2][2] * right.m[0][2] + left.m[3][2] * right.m[0][3];
		dest.m[0][3] = left.m[0][3] * right.m[0][0] + left.m[1][3] * right.m[0][1] + left.m[2][3] * right.m[0][2] + left.m[3][3] * right.m[0][3];
		dest.m[1][0] = left.m[0][0] * right.m[1][0] + left.m[1][0] * right.m[1][1] + left.m[2][0] * right.m[1][2] + left.m[3][0] * right.m[1][3];
		dest.m[1][1] = left.m[0][1] * right.m[1][0] + left.m[1][1] * right.m[1][1] + left.m[2][1] * right.m[1][2] + left.m[3][1] * right.m[1][3];
		dest.m[1][2] = left.m[0][2] * right.m[1][0] + left.m[1][2] * right.m[1][1] + left.m[2][2] * right.m[1][2] + left.m[3][2] * right.m[1][3];
		dest.m[1][3] = left.m[0][3] * right.m[1][0] + left.m[1][3] * right.m[1][1] + left.m[2][3] * right.m[1][2] + left.m[3][3] * right.m[1][3];
		dest.m[2][0] = left.m[0][0] * right.m[2][0] + left.m[1][0] * right.m[2][1] + left.m[2][0] * right.m[2][2] + left.m[3][0] * right.m[2][3];
		dest.m[2][1] = left.m[0][1] * right.m[2][0] + left.m[1][1] * right.m[2][1] + left.m[2][1] * right.m[2][2] + left.m[3][1] * right.m[2][3];
		dest.m[2][2] = left.m[0][2] * right.m[2][0] + left.m[1][2] * right.m[2][1] + left.m[2][2] * right.m[2][2] + left.m[3][2] * right.m[2][3];
		dest.m[2][3] = left.m[0][3] * right.m[2][0] + left.m[1][3] * right.m[2][1] + left.m[2][3] * right.m[2][2] + left.m[3][3] * right.m[2][3];
		dest.m[3][0] = left.m[0][0] * right.m[3][0] + left.m[1][0] * right.m[3][1] + left.m[2][0] * right.m[3][2] + left.m[3][0] * right.m[3][3];
		dest.m[3][1] = left.m[0][1] * right.m[3][0] + left.m[1][1] * right.m[3][1] + left.m[2][1] * right.m[3][2] + left.m[3][1] * right.m[3][3];
		dest.m[3][2] = left.m[0][2] * right.m[3][0] + left.m[1][2] * right.m[3][1] + left.m[2][2] * right.m[3][2] + left.m[3][2] * right.m[3][3];
		dest.m[3][3] = left.m[0][3] * right.m[3][0] + left.m[1][3] * right.m[3][1] + left.m[2][3] * right.m[3][2] + left.m[3][3] * right.m[3][3];

		return dest;
	}
	
	public Quaternion mul(Quaternion v)
	{
		Quaternion res = new Quaternion(0,0,0,0);
		
		res.setX(m[0][0] * v.getX() + m[0][1] * v.getY() + m[0][2] * v.getZ() + m[0][3] * v.getW());
		res.setY(m[1][0] * v.getX() + m[1][1] * v.getY() + m[1][2] * v.getZ() + m[1][3] * v.getW());
		res.setZ(m[2][0] * v.getX() + m[2][1] * v.getY() + m[2][2] * v.getZ() + m[2][3] * v.getW());
		res.setW(m[3][0] * v.getX() + m[3][1] * v.getY() + m[3][2] * v.getZ() + m[3][3] * v.getW());
		
		return res;
	}
	
	public Matrix4f transpose()
	{
		Matrix4f result = new Matrix4f();
		
		for(int i=0; i<4; i++){
			for(int j=0; j<4; j++){
				result.set(i, j, get(j,i));
			}
		}
		return result;
	}
	public static Matrix4f invert(Matrix4f src, Matrix4f dest) {
		float determinant = src.determinant();

		if (determinant != 0) {
			/*
			 * m00 m01 m02 m03
			 * m10 m11 m12 m13
			 * m20 m21 m22 m23
			 * m30 m31 m32 m33
			 */
			if (dest == null)
				dest = new Matrix4f();
			float determinant_inv = 1f/determinant;

			// first row
			float t00 =  determinant3x3(src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			float t01 = -determinant3x3(src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			float t02 =  determinant3x3(src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			float t03 = -determinant3x3(src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// second row
			float t10 = -determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			float t11 =  determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			float t12 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			float t13 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// third row
			float t20 =  determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			float t21 = -determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			float t22 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			float t23 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// fourth row
			float t30 = -determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3]);
			float t31 =  determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3]);
			float t32 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3]);
			float t33 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2]);

			// transpose and divide by the determinant
			dest.m[0][0] = t00*determinant_inv;
			dest.m[1][1] = t11*determinant_inv;
			dest.m[2][2] = t22*determinant_inv;
			dest.m[3][3] = t33*determinant_inv;
			dest.m[0][1] = t10*determinant_inv;
			dest.m[1][0] = t01*determinant_inv;
			dest.m[2][0] = t02*determinant_inv;
			dest.m[0][2] = t20*determinant_inv;
			dest.m[1][2] = t21*determinant_inv;
			dest.m[2][1] = t12*determinant_inv;
			dest.m[0][3] = t30*determinant_inv;
			dest.m[3][0] = t03*determinant_inv;
			dest.m[1][3] = t31*determinant_inv;
			dest.m[3][1] = t13*determinant_inv;
			dest.m[3][2] = t23*determinant_inv;
			dest.m[2][3] = t32*determinant_inv;
			return dest;
		} else
			return null;
	}
	
	private static float determinant3x3(float t00, float t01, float t02,
		     float t10, float t11, float t12,
		     float t20, float t21, float t22)
	{
		return   t00 * (t11 * t22 - t12 * t21)
		      + t01 * (t12 * t20 - t10 * t22)
		      + t02 * (t10 * t21 - t11 * t20);
	}
	
	public float determinant() {
		float f =
			m[0][0]
				* ((m[1][1] * m[2][2] * m[3][3] + m[1][2] * m[2][3] * m[3][1] + m[1][3] * m[2][1] * m[3][2])
					- m[1][3] * m[2][2] * m[3][1]
					- m[1][1] * m[2][3] * m[3][2]
					- m[1][2] * m[2][1] * m[3][3]);
		f -= m[0][1]
			* ((m[1][0] * m[2][2] * m[3][3] + m[1][2] * m[2][3] * m[3][0] + m[1][3] * m[2][0] * m[3][2])
				- m[1][3] * m[2][2] * m[3][0]
				- m[1][0] * m[2][3] * m[3][2]
				- m[1][2] * m[2][0] * m[3][3]);
		f += m[0][2]
			* ((m[1][0] * m[2][1] * m[3][3] + m[1][1] * m[2][3] * m[3][0] + m[1][3] * m[2][0] * m[3][1])
				- m[1][3] * m[2][1] * m[3][0]
				- m[1][0] * m[2][3] * m[3][1]
				- m[1][1] * m[2][0] * m[3][3]);
		f -= m[0][3]
			* ((m[1][0] * m[2][1] * m[3][2] + m[1][1] * m[2][2] * m[3][0] + m[1][2] * m[2][0] * m[3][1])
				- m[1][2] * m[2][1] * m[3][0]
				- m[1][0] * m[2][2] * m[3][1]
				- m[1][1] * m[2][0] * m[3][2]);
		return f;
	}
	
	public static Matrix4f invert(Matrix4f matrix)
	{
		return invert(matrix, null);
	}
	
	public Matrix4f invert()
	{
		return invert(this, null);
	}
	
	public boolean equals(Matrix4f m){
		if (this.m[0][0] == m.getM()[0][0] && this.m[0][1] == m.getM()[0][1] &&
			this.m[0][2] == m.getM()[0][2] && this.m[0][3] == m.getM()[0][3] &&
			this.m[1][0] == m.getM()[1][0] && this.m[1][1] == m.getM()[1][1] &&
			this.m[1][2] == m.getM()[1][2] && this.m[1][3] == m.getM()[1][3] &&
			this.m[2][0] == m.getM()[2][0] && this.m[2][1] == m.getM()[2][1] &&
			this.m[2][2] == m.getM()[2][2] && this.m[2][3] == m.getM()[2][3] &&
			this.m[3][0] == m.getM()[3][0] && this.m[3][1] == m.getM()[3][1] &&
			this.m[3][2] == m.getM()[3][2] && this.m[3][3] == m.getM()[3][3])
				return true;
		else
			return false;	
	}
	
	public void set(int x, int y, float value)
	{
		this.m[x][y] = value;
	}
	
	public float get(int x, int y)
	{
		return  this.m[x][y];
	}

	public float [][] getM() {
		return m;
	}
	
	/**
	 * Load from a float buffer. The buffer stores the matrix in column major
	 * (OpenGL) order.
	 *
	 * @param buf A float buffer to read from
	 * @return this
	 */
	public Matrix4f load(FloatBuffer buf) {

		m[0][0] = buf.get();
		m[0][1] = buf.get();
		m[0][2] = buf.get();
		m[0][3] = buf.get();
		m[1][0] = buf.get();
		m[1][1] = buf.get();
		m[1][2] = buf.get();
		m[1][3] = buf.get();
		m[2][0] = buf.get();
		m[2][1] = buf.get();
		m[2][2] = buf.get();
		m[2][3] = buf.get();
		m[3][0] = buf.get();
		m[3][1] = buf.get();
		m[3][2] = buf.get();
		m[3][3] = buf.get();

		return this;
	}
	
	public void load(float [][] m) {
		this.m = m;
	}
	
	/**
	 * Store this matrix in a float buffer. The matrix is stored in column
	 * major (openGL) order.
	 * @param buf The buffer to store this matrix in
	 */
	public Matrix4f store(FloatBuffer buf) {
		buf.put(m[0][0]);
		buf.put(m[0][1]);
		buf.put(m[0][2]);
		buf.put(m[0][3]);
		buf.put(m[1][0]);
		buf.put(m[1][1]);
		buf.put(m[1][2]);
		buf.put(m[1][3]);
		buf.put(m[2][0]);
		buf.put(m[2][1]);
		buf.put(m[2][2]);
		buf.put(m[2][3]);
		buf.put(m[3][0]);
		buf.put(m[3][1]);
		buf.put(m[3][2]);
		buf.put(m[3][3]);
		
		return this;
	}
	
	/**
	 * Verticle visualization
	 */
	public String toString() {
		
		return 	"|" + m[0][0] + " " + m[1][0] + " " + m[2][0] + " " + m[3][0] + "|\n" +
				"|" + m[0][1] + " " + m[1][1] + " " + m[2][1] + " " + m[3][1] + "|\n" +
				"|" + m[0][2] + " " + m[1][2] + " " + m[2][2] + " " + m[3][2] + "|\n" +
				"|" + m[0][3] + " " + m[1][3] + " " + m[2][3] + " " + m[3][3] + "|";
	}
	
//	/**
//	 * Horizontal visualization
//	 */
//	public String toString() {
//		
//		return 	"|" + m[0][0] + " " + m[0][1] + " " + m[0][2] + " " + m[0][3] + "|\n" +
//				"|" + m[1][0] + " " + m[1][1] + " " + m[1][2] + " " + m[1][3] + "|\n" +
//				"|" + m[2][0] + " " + m[2][1] + " " + m[2][2] + " " + m[2][3] + "|\n" +
//				"|" + m[3][0] + " " + m[3][1] + " " + m[3][2] + " " + m[3][3] + "|";
//	}
	
	public Matrix4f load(Matrix4f matrix) {
		this.m[0][0] = matrix.m[0][0];
		this.m[0][1] = matrix.m[0][1];
		this.m[0][2] = matrix.m[0][2];
		this.m[0][3] = matrix.m[0][3];
		this.m[1][0] = matrix.m[1][0];
		this.m[1][1] = matrix.m[1][1];
		this.m[1][2] = matrix.m[1][2];
		this.m[1][3] = matrix.m[1][3];
		this.m[2][0] = matrix.m[2][0];
		this.m[2][1] = matrix.m[2][1];
		this.m[2][2] = matrix.m[2][2];
		this.m[2][3] = matrix.m[2][3];
		this.m[3][0] = matrix.m[3][0];
		this.m[3][1] = matrix.m[3][1];
		this.m[3][2] = matrix.m[3][2];
		this.m[3][3] = matrix.m[3][3];
		
		return this;
	}
	
	
}