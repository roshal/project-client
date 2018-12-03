//
import {
	List as p__immutable__list,
	Map as p__immutable__map,
} from 'immutable'
//
const actions = {
	'items--create': (state, action) => {
		return state.update(
			'items',
			(items) => {
				items.insert(
					action.item,
				)
			},
		)
	},
	'items--remove': (state, action) => {
		return state.remove(
			action.payload,
		)
	},
	'items--update': (state, action) => {
		return state.updateIn(
			[
				'items',
				action.payload,
			],
			(items) => {
				items.set(
					action.payload,
				)
			},
		)
	},
}
//
export default (
	state = p__immutable__map({
		'items': p__immutable__list([
			p__immutable__map({
				key: Math.random(),
				value: 'a',
			}),
			p__immutable__map({
				key: Math.random(),
				value: 'b',
			}),
			p__immutable__map({
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
