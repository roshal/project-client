const $ = require('../node/packages')(
	'lodash-webpack-plugin',
	'path',
	'terser-webpack-plugin',
)
module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'production',
		output: {
			path: $['path'].resolve('public'),
		},
		devServer: {
			compress: true,
			https: true,
			port: argv.port || 443,
		},
		plugins: [
			new $['lodash-webpack-plugin'](),
		],
		optimization: {
			minimizer: [
				new $['terser-webpack-plugin']({
					terserOptions: {
						cache: true,
						parallel: true,
						output: {
							comments: false,
						},
					},
				}),
			],
		},
	}
}
