export function Matrix4f() {
	this.m = [];
	this.setIdentity;
	
	this.zero = function zero() {
		this.m[0] = [];
		this.m[1] = [];
		this.m[2] = [];
		this.m[3] = [];
		this.m[0][0] = 0; this.m[0][1] = 0; this.m[0][2] = 0; this.m[0][3] = 0;
		this.m[1][0] = 0; this.m[1][1] = 0; this.m[1][2] = 0; this.m[1][3] = 0;
		this.m[2][0] = 0; this.m[2][1] = 0; this.m[2][2] = 0; this.m[2][3] = 0;
		this.m[3][0] = 0; this.m[3][1] = 0; this.m[3][2] = 0; this.m[3][3] = 0;
		
		return this;
	}
	
	this.setIdentity = function setIdentity() {
		this.m[0] = [];
		this.m[1] = [];
		this.m[2] = [];
		this.m[3] = [];
		this.m[0][0] = 1; this.m[0][1] = 0; this.m[0][2] = 0; this.m[0][3] = 0;
		this.m[1][0] = 0; this.m[1][1] = 1; this.m[1][2] = 0; this.m[1][3] = 0;
		this.m[2][0] = 0; this.m[2][1] = 0; this.m[2][2] = 1; this.m[2][3] = 0;
		this.m[3][0] = 0; this.m[3][1] = 0; this.m[3][2] = 0; this.m[3][3] = 1;
	
		return this;
	}
	
	this.orthographic2D = function Orthographic2D(width, height) {
		this.m[0][0] = 2 / width; this.m[0][1] = 0; 		  this.m[0][2] = 0; this.m[0][3] = -1;
		this.m[1][0] = 0;		   this.m[1][1] = 2 / height; this.m[1][2] = 0; this.m[1][3] = -1;
		this.m[2][0] = 0; 		   this.m[2][1] = 0; 		  this.m[2][2] = 1; this.m[2][3] =  0;
		this.m[3][0] = 0; 		   this.m[3][1] = 0; 		  this.m[3][2] = 0; this.m[3][3] =  1;
		
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
	this.translate2f = function translate2f(translation) {		
		this.m[3][0] += this.m[0][0] * translation.x + this.m[1][0] * translation.y;
		this.m[3][1] += this.m[0][1] * translation.x + this.m[1][1] * translation.y;
		this.m[3][2] += this.m[0][2] * translation.x + this.m[1][2] * translation.y;
		this.m[3][3] += this.m[0][3] * translation.x + this.m[1][3] * translation.y;
		
		return this;
	}
	
	/**
	 * Creates tranformation plane from current matrix by argument of Vector4f plane object.
	 */
	this.transform = function transform(plane) {
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
		var x = Math.toRadians(rotation.getX());
		var y = Math.toRadians(rotation.getY());
		var z = Math.toRadians(rotation.getZ());
		
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
		var oneminusc = 1.0 - c;
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
	
	this.traspose = function transpose() {
		var result = new Matrix4f();
		
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				result.set(i, j, get(j,i));
			}
		}
		return result;
	}
	
	this.invert = function invert(src, dest) {
		var determinant = src.determinant();

		if (!determinant) {
			/*
			 * m00 m01 m02 m03
			 * m10 m11 m12 m13
			 * m20 m21 m22 m23
			 * m30 m31 m32 m33
			 */
			if (!dest)
				dest = new Matrix4f();
			var determinant_inv = 1 / determinant;

			// first row
			var t00 =  determinant3x3(src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t01 = -determinant3x3(src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t02 =  determinant3x3(src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t03 = -determinant3x3(src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// second row
			var t10 = -determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[2][1], src.m[2][2], src.m[2][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t11 =  determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[2][0], src.m[2][2], src.m[2][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t12 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[2][0], src.m[2][1], src.m[2][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t13 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[2][0], src.m[2][1], src.m[2][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// third row
			var t20 =  determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[3][1], src.m[3][2], src.m[3][3]);
			var t21 = -determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[3][0], src.m[3][2], src.m[3][3]);
			var t22 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[3][0], src.m[3][1], src.m[3][3]);
			var t23 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[3][0], src.m[3][1], src.m[3][2]);
			// fourth row
			var t30 = -determinant3x3(src.m[0][1], src.m[0][2], src.m[0][3], src.m[1][1], src.m[1][2], src.m[1][3], src.m[2][1], src.m[2][2], src.m[2][3]);
			var t31 =  determinant3x3(src.m[0][0], src.m[0][2], src.m[0][3], src.m[1][0], src.m[1][2], src.m[1][3], src.m[2][0], src.m[2][2], src.m[2][3]);
			var t32 = -determinant3x3(src.m[0][0], src.m[0][1], src.m[0][3], src.m[1][0], src.m[1][1], src.m[1][3], src.m[2][0], src.m[2][1], src.m[2][3]);
			var t33 =  determinant3x3(src.m[0][0], src.m[0][1], src.m[0][2], src.m[1][0], src.m[1][1], src.m[1][2], src.m[2][0], src.m[2][1], src.m[2][2]);

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
	
	this.determinant3x3 = function determinant3x3(t00, t01, t02,
		     t10, t11, t12,
		     t20, t21, t22)	{
		return   t00 * (t11 * t22 - t12 * t21)
		      + t01 * (t12 * t20 - t10 * t22)
		      + t02 * (t10 * t21 - t11 * t20);
	}
	
	this.determinant = function determinant() {
		var f =
			this.m[0][0]
				* ((this.m[1][1] * this.m[2][2] * this.m[3][3] + this.m[1][2] * this.m[2][3] * this.m[3][1] + this.m[1][3] * this.m[2][1] * this.m[3][2])
					- this.m[1][3] * this.m[2][2] * this.m[3][1]
					- this.m[1][1] * this.m[2][3] * this.m[3][2]
					- this.m[1][2] * this.m[2][1] * this.m[3][3]);
		f -= this.m[0][1]
			* ((this.m[1][0] * this.m[2][2] * this.m[3][3] + this.m[1][2] * this.m[2][3] * this.m[3][0] + this.m[1][3] * this.m[2][0] * this.m[3][2])
				- this.m[1][3] * this.m[2][2] * this.m[3][0]
				- this.m[1][0] * this.m[2][3] * this.m[3][2]
				- this.m[1][2] * this.m[2][0] * this.m[3][3]);
		f += this.m[0][2]
			* ((this.m[1][0] * this.m[2][1] * this.m[3][3] + this.m[1][1] * this.m[2][3] * this.m[3][0] + this.m[1][3] * this.m[2][0] * this.m[3][1])
				- this.m[1][3] * this.m[2][1] * this.m[3][0]
				- this.m[1][0] * this.m[2][3] * this.m[3][1]
				- this.m[1][1] * this.m[2][0] * this.m[3][3]);
		f -= this.m[0][3]
			* ((this.m[1][0] * this.m[2][1] * this.m[3][2] + this.m[1][1] * this.m[2][2] * this.m[3][0] + this.m[1][2] * this.m[2][0] * this.m[3][1])
				- this.m[1][2] * this.m[2][1] * this.m[3][0]
				- this.m[1][0] * this.m[2][2] * this.m[3][1]
				- this.m[1][1] * this.m[2][0] * this.m[3][2]);
		return f;
	}
	
	this.invert = function invert(matrix) {
		return this.invert(matrix, null);
	}
	
	this.invert = function invert() {
		return this.invert(this, null);
	}
	
	this.quals = function equals(m) {
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
	
	this.set = function set(x, y, value) {
		this.m[x][y] = value;
	}
	
	this.get = function get(x, y) {
		return  this.m[x][y];
	}

	this.getM = function getM() {
		return this.m;
	}
	
	/**
	 * Load from a float buffer. The buffer stores the matrix in column major
	 * (OpenGL) order.
	 *
	 * @param buf A float buffer to read from
	 * @return this
	 */
	this.loadBuffer = function loadBuffer(buf) {

		this.m[0][0] = buf.get();
		this.m[0][1] = buf.get();
		this.m[0][2] = buf.get();
		this.m[0][3] = buf.get();
		this.m[1][0] = buf.get();
		this.m[1][1] = buf.get();
		this.m[1][2] = buf.get();
		this.m[1][3] = buf.get();
		this.m[2][0] = buf.get();
		this.m[2][1] = buf.get();
		this.m[2][2] = buf.get();
		this.m[2][3] = buf.get();
		this.m[3][0] = buf.get();
		this.m[3][1] = buf.get();
		this.m[3][2] = buf.get();
		this.m[3][3] = buf.get();

		return this;
	}
	
	this.load = function load(matrix) {
		this.m = matrix;
	}
	
	/**
	 * Store this matrix in a float buffer. The matrix is stored in column
	 * major (openGL) order.
	 * @param buf The buffer to store this matrix in
	 */
	this.store = function store(buf) {
		buf.push(this.m[0][0]);
		buf.push(this.m[0][1]);
		buf.push(this.m[0][2]);
		buf.push(this.m[0][3]);
		buf.push(this.m[1][0]);
		buf.push(this.m[1][1]);
		buf.push(this.m[1][2]);
		buf.push(this.m[1][3]);
		buf.push(this.m[2][0]);
		buf.push(this.m[2][1]);
		buf.push(this.m[2][2]);
		buf.push(this.m[2][3]);
		buf.push(this.m[3][0]);
		buf.push(this.m[3][1]);
		buf.push(this.m[3][2]);
		buf.push(this.m[3][3]);
		
		return this;
	}
	
	/**
	 * Verticle visualization
	 */
	this.toString = function toString() {
		
		return 	"|" + this.m[0][0] + " " + this.m[1][0] + " " + this.m[2][0] + " " + this.m[3][0] + "|\n" +
				"|" + this.m[0][1] + " " + this.m[1][1] + " " + this.m[2][1] + " " + this.m[3][1] + "|\n" +
				"|" + this.m[0][2] + " " + this.m[1][2] + " " + this.m[2][2] + " " + this.m[3][2] + "|\n" +
				"|" + this.m[0][3] + " " + this.m[1][3] + " " + this.m[2][3] + " " + this.m[3][3] + "|";
	}
	
	
}