const $ = require('../node/packages')(
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
