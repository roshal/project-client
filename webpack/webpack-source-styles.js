const $ = require('../node/packages')(
	'mini-css-extract-plugin',
	'path',
	'postcss-easy-import',
	'postcss-import',
	'precss',
	'webpack',
)
module.exports = (env = {}, argv) => {
	return {
		plugins: [
			new $['webpack'].PrefetchPlugin('./styles/sources/source.sass'),
			new $['mini-css-extract-plugin']({
				filename: argv.develop ? '[name].css' : '[name].[hash].css'
			}),
		],
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.sass$/,
						],
					},
					use: [
						...argv.develop ? [
							{
								loader: 'style-loader/url',
							},
						] : [
							//	{
							//		loader: $['mini-css-extract-plugin'].loader,
							//	},
						],
						{
							loader: 'file-loader',
							options: {
								name: '[name].css',
							},
						},
						{
							loader: 'extract-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: argv.develop,
								importLoaders: 1,
								modules: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								exec: true,
								//	parser: 'postcss-sass',
								parser: 'sugarss',
								plugins: [
									$['postcss-easy-import']({
										extensions: [
											'.sass',
										],
									}),
									//	$['postcss-import']({
									//		root: $['path'].join(__dirname, '..', 'node_modules'),
									//	}),
									//	'precss': {},
									//	'postcss-utilities': {},
									//	...argv.produce ? {
									//		'cssnano': {
									//			discardComments: {
									//				removeAll: true,
									//			},
									//		},
									//	} : {},
								],
								sourceMap: argv.develop,
							},
						},
					],
				},
			],
		},
	}
}
