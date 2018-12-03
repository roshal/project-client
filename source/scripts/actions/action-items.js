//
export default {
	'create': (item) => {
		return {
			type: 'items--create',
			item: item,
		}
	},
	'remove': (item) => {
		return {
			type: 'items--remove',
			item: item,
		}
	},
	'update': (item) => {
		return {
			type: 'items--update',
			item: item,
		}
	},
	'derive': (item) => {
		return {
			type: 'items--derive',
			item: item,
		}
	},
}
