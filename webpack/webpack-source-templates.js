const $ = require('../node/packages')(
	'path',
	'webpack',
)
module.exports = (env = {}, argv) => {
	return {
		plugins: [
			new $['webpack'].PrefetchPlugin('./templates/sources/source.pug'),
		],
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].join(__dirname, '..', 'source', 'templates'),
						],
						test: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'source.html',
								//	name: (file) => {
								//		return 'source.html'
								//	},
							},
						},
						{
							loader: 'extract-loader',
							//	options: {
							//		publicPath: '/',
							//	},
						},
						{
							loader: 'html-loader',
							options: {
								attrs: [
									'link:href',
									//	'script:src',
								],
								//	interpolate: true,
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
	}
}
