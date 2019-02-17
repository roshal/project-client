const $ = require('../node/packages')(
	'path',
)
module.exports = () => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].resolve('source', 'scripts'),
						],
						test: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: false,
								cacheDirectory: true,
								presets: [
									'@babel/preset-env',
								],
								plugins: [
									'@babel/plugin-proposal-class-properties',
									'@babel/plugin-syntax-dynamic-import',
									'@babel/plugin-transform-runtime',
									'babel-plugin-lodash',
									'react-hot-loader/babel',
								],
							},
						},
					],
				},
			],
		},
	}
}
