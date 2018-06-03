export default {
	'create': (item) => {
		return {
			type: 'mongo--create',
			item: item,
		}
	},
	'remove': (item) => {
		return {
			type: 'mongo--remove',
			item: item,
		}
	},
	'update': (item) => {
		return {
			type: 'mongo--update',
			item: item,
		}
	},
	'derive': (item) => {
		return {
			type: 'mongo--derive',
			item: item,
		}
	},
}
