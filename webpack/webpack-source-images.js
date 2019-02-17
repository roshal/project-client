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
							$['path'].resolve('source', 'images'),
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
							},
						},
					],
				},
			],
		},
	}
}
