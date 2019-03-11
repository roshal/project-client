const $ = require('../node/require')(
	'path',
	'webpack',
)
module.exports = () => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].resolve('source', 'assets'),
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
								context: $['path'].resolve('source', 'assets'),
							},
						},
					],
				},
			],
		},
		plugins: [
			new $['webpack'].PrefetchPlugin('./assets/favicon.png'),
		],
	}
}
