const actions = {
	'table--create': (state, action) => {
		return {
			...state,
			items: [
				...state.items,
				action.item,
			],
		}
	},
	'table--remove': (state, action) => {
		return {
			...state,
			items: state.items.filter((item) => {
				return item.id !== action.item.id
			}),
		}
	},
	'table--update': (state, action) => {
		return {
			...state,
		}
	},
}
//
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
