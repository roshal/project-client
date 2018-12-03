//
import p__webpack_stylish from 'webpack-stylish'
//
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		context: p__path__join(__dirname, '..', 'source'),
		entry: {
			'source': './scripts/sources/source.js',
		},
		output: {
			chunkFilename: 'scripts/[id].js',
			filename: '[name].js',
			publicPath: '/',
		},
		stats: false,
		devServer: {
			stats: 'none',
			//	historyApiFallback: {
			//		rewrites: [
			//			{
			//				from: /\/$/,
			//				to: '/',
			//			},
			//		],
			//	},
			//	index: '/source.html',
			//	proxy: {
			//		'/api/': {
			//			changeOrigin: true,
			//			pathRewrite: {
			//				'^/api/': '/',
			//			},
			//			target: 'https://roshal-server.herokuapp.com/',
			//			target: 'http://localhost:8080/api/',
			//		},
			//	},
		},
		resolve: {
			extensions: [
				'.js',
			],
			modules: [
				p__path__join(__dirname, '..', 'node_modules'),
			],
		},
		plugins: [
			new p__webpack_stylish(),
		],
	}
}
