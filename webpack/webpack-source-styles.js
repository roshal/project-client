import p__mini_css_extract_plugin from 'mini-css-extract-plugin'
import p__postcss_cssnext from 'postcss-cssnext'
import p__postcss_easy_import from 'postcss-easy-import'
import p__cssnano from 'cssnano'
import {
	join as p__path__join,
} from 'path'
//
export default (env) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path__join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.sass$/,
						],
					},
					use: [
						//p__mini_css_extract_plugin.loader,
						{
							loader: 'file-loader',
							options: {
								name: '[name].css',
								//useRelativePath: true,
							},
						},
						{
							loader: 'extract-loader',
						},
						{
							loader: 'css-loader',
							options: {
								//modules: true,
								minimize: env.produce ? {
									discardComments: {
										removeAll: true,
									},
								} : false,
								sourceMap: env.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								parser: 'sugarss',
								plugins: [
									p__postcss_easy_import({
										extensions: [
											'.sass',
										],
									}),
									p__postcss_cssnext(),
									//p__cssnano(),
								],
								sourceMap: env.develop,
							},
						},
					],
				},
			],
		},
		plugins: [
			new p__mini_css_extract_plugin({
				filename: '[name].css',
				chunkFilename: '[id].css',
			}),
		],
	}
}
