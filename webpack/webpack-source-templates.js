const $ = require('../node/packages')(
	'path',
	'webpack',
)
module.exports = (env = {}, argv) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].resolve('source', 'templates'),
						],
						test: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'index.html',
							},
						},
						{
							loader: 'extract-loader',
						},
						{
							loader: 'html-loader',
							options: {
								attrs: [
									'link:href',
									//	'script:src',
								],
								removeComments: true,
							},
						},
						{
							loader: 'pug-extract-loader',
						},
						{
							loader: 'pug-loader',
							options: {
								// deprecated
								pretty: argv.develop ? '\t' : false,
							},
						},
					],
				},
			],
		},
		plugins: [
			new $['webpack'].PrefetchPlugin('./templates/sources/index.pug'),
		],
	}
}
