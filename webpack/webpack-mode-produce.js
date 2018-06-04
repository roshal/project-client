import p__uglifyjs_webpack_plugin from 'uglifyjs-webpack-plugin'
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		mode: 'production',
		devServer: {
			compress: true,
			https: true,
			port: 443,
		},
		output: {
			path: p__path__join(__dirname, '..', 'public'),
		},
		optimization: {
			minimizer: [
				new p__uglifyjs_webpack_plugin({
					parallel: true,
					uglifyOptions: {
						toplevel: true,
						output: {
							comments: false,
						},
					},
					//extractComments: true,
				}),
			],
		},
	}
}
