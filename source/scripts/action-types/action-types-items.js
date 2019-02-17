//

const prefix = (name) => {
	return ['items', name].join('--')
}

export default {
	create: prefix('create'),
	derive: prefix('derive'),
	remove: prefix('remove'),
	update: prefix('update'),
}
