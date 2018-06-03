import p__lodash_webpack_plugin from 'lodash-webpack-plugin'
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		mode: 'development',
		devServer: {
			port: 80,
		},
		devtool: 'source-map',
		output: {
			path: p__path__join(__dirname, '..', 'output'),
		},
		plugins: [
			new p__lodash_webpack_plugin(),
		],
	}
}
