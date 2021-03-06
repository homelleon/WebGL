const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack/common');
const test = require('./webpack/test');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const images = require('./webpack/images');
const babel = require('./webpack/babel');
const plugins = require('./webpack/plugins');
const shaders = require('./webpack/shaders');
const meshes = require('./webpack/obj');

const PATHS = {
	source: path.join(__dirname, 'source'),
	test: path.join(__dirname, '__test__'),
	build: path.join(__dirname, 'build')
};

module.exports = function(env) {
	if(env === 'production') {
		return merge([
			common(PATHS),
			plugins(PATHS),
			babel(),
			pug(),
			images(),
			meshes(),
			shaders()
		]);
	}
	if(env === 'test') {
		return merge([
			test(PATHS),
			shaders()
		]);
	}
	if(env === 'development') {
		return merge([
			common(PATHS),
			plugins(PATHS),
			babel(),
			pug(),
			images(),
			meshes(),
			shaders(),
			devserver()
		]);
	}
};