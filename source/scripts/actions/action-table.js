//
export default {
	'create': (item) => {
		return {
			type: 'table--create',
			item: item,
		}
	},
	'remove': (item) => {
		return {
			type: 'table--remove',
			item: item,
		}
	},
	'update': (item) => {
		return {
			type: 'table--update',
			item: item,
		}
	},
	'derive': (item) => {
		return {
			type: 'table--derive',
			item: item,
		}
	},
}
