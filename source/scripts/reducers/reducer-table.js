//

import m__action_types_table from '~/action-types/action-types-table'

const actions = {
	[m__action_types_table.create]: (state, action) => {
		return {
			...state,
			items: [
				...state.items,
				action.payload.item,
			],
		}
	},
	[m__action_types_table.remove]: (state, action) => {
		return {
			...state,
			items: state.items.filter((item) => {
				return item.id !== action.payload.item.id
			}),
		}
	},
	[m__action_types_table.update]: (state, action) => {
		return {
			...state,
		}
	},
}

export default (
	state = {
		'table': [
			[
				'a',
				'b',
				'c',
			],
		],
	}, action,
) => {
	if (action.type in actions) {
		return actions[action.type](state, action)
	}
	return state
}
