const $ = require('./node/require')(
	'webpack-merge',
)
const webpack = (name) => {
	const path = `./webpack/webpack-${name}`
	return require(path)
}
module.exports = (env = {}, argv = {}) => {
	return $['webpack-merge'](
		webpack('common')(),
		webpack('source-assets')(),
		webpack('source-images')(),
		webpack('source-scripts')(),
		webpack('source-styles')(env, argv),
		webpack('source-templates')(env, argv),
		...argv.analyze ? [webpack('mode-analyze')()] : [],
		...argv.develop ? [webpack('mode-develop')(env, argv)] : [],
		...argv.produce ? [webpack('mode-produce')(env, argv)] : [],
	)
}
