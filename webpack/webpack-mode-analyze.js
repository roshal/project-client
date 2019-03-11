const $ = require('../node/require')(
	'webpack-bundle-analyzer',
)
module.exports = () => {
	return {
		plugins: [
			new $['webpack-bundle-analyzer'].BundleAnalyzerPlugin({
				analyzerPort: 8888,
				openAnalyzer: false,
			}),
		],
	}
}
