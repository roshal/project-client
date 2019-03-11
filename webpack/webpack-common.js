const $ = require('../node/require')(
	'moment-locales-webpack-plugin',
	'path',
	'webpack-stylish',
)
module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'none',
		context: $['path'].resolve('source'),
		entry: {
			'source': './scripts/sources/source.js',
		},
		output: {
			chunkFilename: 'chunks/[id].js',
			filename: '[name].js',
			publicPath: '/',
		},
		resolve: {
			alias: {
				'/': $['path'].resolve('source'),
				'~': $['path'].resolve('source', 'scripts'),
				...argv.hot ? {
					'react-dom': '@hot-loader/react-dom',
				} : {},
			},
			extensions: [
				'.js',
			],
			modules: [
				$['path'].resolve('node_modules'),
			],
		},
		resolveLoader: {
			extensions: [
				'.js',
			],
			modules: [
				$['path'].resolve('node_modules'),
			],
		},
		plugins: [
			new $['moment-locales-webpack-plugin'](),
			new $['webpack-stylish'](),
		],
		optimization: {
			splitChunks: {
				minSize: 65536,
				minChunks: 1,
				maxAsyncRequests: 4,
				maxInitialRequests: 1,
				automaticNameDelimiter: '/',
				name: !!argv.produce,
				cacheGroups: {
					default: {
						priority: 0,
						reuseExistingChunk: true,
					},
					vendors: {
						priority: 1,
						test: $['path'].resolve('node_modules'),
					},
				},
			},
		},
		devServer: {
			historyApiFallback: true,
			host: '0.0.0.0',
			port: argv.port || 80,
			stats: 'none',
		},
		watchOptions: {
			ignored: [
				$['path'].resolve('node_modules'),
			],
		},
		performance: {
			maxEntrypointSize: 262144,
			maxAssetSize: 262144,
			assetFilter: (asset) => {
				return asset.endsWith('.js')
			},
		},
		stats: 'none',
	}
}
