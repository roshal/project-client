//

import m__action_types_mongo from '~/action-types/action-types-mongo'

export default {
	create: (item) => {
		return {
			type: m__action_types_mongo.create,
			payload: {
				item: item,
			},
		}
	},
	derive: (item) => {
		return {
			type: m__action_types_mongo.derive,
			payload: {
				item: item,
			},
		}
	},
	remove: (item) => {
		return {
			type: m__action_types_mongo.remove,
			payload: {
				item: item,
			},
		}
	},
	update: (item) => {
		return {
			type: m__action_types_mongo.update,
			payload: {
				item: item,
			},
		}
	},
}
