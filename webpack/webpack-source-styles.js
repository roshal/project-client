const $ = require('../node/require')(
	'path',
	'postcss-easy-import',
	'postcss-nested',
	'postcss-nested-props',
	'postcss-url',
	'precss',
	'webpack',
)
module.exports = (env = {}, argv) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].resolve('source', 'styles'),
						],
						test: [
							/\.sss$/,
						],
					},
					use: [
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
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								parser: 'sugarss',
								plugins: [
									$['postcss-easy-import']({
										path: [
											$['path'].resolve('source'),
										],
										extensions: [
											'.sss',
										],
									}),
									$['postcss-url'](),
									$['postcss-nested-props'](),
									$['postcss-nested'](),
									$['precss'](),
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
