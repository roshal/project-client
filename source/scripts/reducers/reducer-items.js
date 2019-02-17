//

import p__immutable from 'immutable'

import m__action_types_items from '~/action-types/action-types-items'

const actions = {
	[m__action_types_items.create]: (state, action) => {
		state = state.update(
			'items',
			(items) => {
				return items.insert(
					0,
					p__immutable.Map(action.payload.item),
				)
			},
		)
		return state
	},
	[m__action_types_items.remove]: (state, action) => {
		return state.remove(
			action.payload,
		)
	},
	[m__action_types_items.update]: (state, action) => {
		return state.updateIn(
			[
				'items',
				action.payload,
			],
			(items) => {
				return items.set(
					action.payload,
				)
			},
		)
	},
}

export default (
	state = p__immutable.Map({
		'items': p__immutable.List([
			p__immutable.Map({
				key: Math.random(),
				value: 'a',
			}),
			p__immutable.Map({
				key: Math.random(),
				value: 'b',
			}),
			p__immutable.Map({
				key: Math.random(),
				value: 'c',
			}),
		]),
	}), action,
) => {
	if (action.type in actions) {
		return actions[action.type](state, action)
	}
	return state
}
