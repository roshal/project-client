//

import m__action_types_table from '~/action-types/action-types-table'

export default {
	create: (item) => {
		return {
			type: m__action_types_table.create,
			payload: {
				item: item,
			},
		}
	},
	derive: (item) => {
		return {
			type: m__action_types_table.derive,
			payload: {
				item: item,
			},
		}
	},
	remove: (item) => {
		return {
			type: m__action_types_table.remove,
			payload: {
				item: item,
			},
		}
	},
	update: (item) => {
		return {
			type: m__action_types_table.update,
			payload: {
				item: item,
			},
		}
	},
}
