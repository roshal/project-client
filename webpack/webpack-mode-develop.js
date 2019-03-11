const $ = require('../node/require')(
	'path',
)
module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'development',
		output: {
			path: $['path'].resolve('output'),
		},
		devServer: {
			port: argv.port || 80,
		},
		devtool: 'source-map',
	}
}
