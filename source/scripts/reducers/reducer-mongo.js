//

import p__axios from 'axios'

import m__action_types_mongo from '~/action-types/action-types-mongo'

const actions = {
	[m__action_types_mongo.create]: (state, action) => {
		return {
			...state,
			'items': [
				...state['items'],
				action.payload.item,
			],
		}
	},
	[m__action_types_mongo.remove]: (state, action) => {
		return {
			...state,
			'items': state['items'].filter((item) => {
				return item.key !== action.payload.item.key
			}),
		}
	},
	[m__action_types_mongo.update]: (state, action) => {
		return {
			...state,
			'items': state['items'].filter((item) => {
				return item.key !== action.payload.item.key
			}),
		}
	},
	[m__action_types_mongo.derive]: async (state, action) => {
		try {
			const response = await p__axios({
				method: 'post',
				url: '/api/mongo',
				data: {
					method: 'get',
				},
			})
		}
		catch (error) {
			console.log(error)
		}
		return {
			...state,
		}
	},
}

export default (
	state = {
		'items': [],
	}, action,
) => {
	if (action.type in actions) {
		return actions[action.type](state, action)
	}
	return state
}
