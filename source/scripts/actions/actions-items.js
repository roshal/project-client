//

import m__action_types_items from '~/action-types/action-types-items'

export default {
	create: (item) => {
		return {
			type: m__action_types_items.create,
			payload: {
				item: item,
			},
		}
	},
	derive: (item) => {
		return {
			type: m__action_types_items.derive,
			payload: {
				item: item,
			},
		}
	},
	remove: (item) => {
		return {
			type: m__action_types_items.remove,
			payload: {
				item: item,
			},
		}
	},
	update: (item) => {
		return {
			type: m__action_types_items.update,
			payload: {
				item: item,
			},
		}
	},
}
