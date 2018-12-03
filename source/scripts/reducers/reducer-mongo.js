//
import p__axios from 'axios'
//
const actions = {
	'mongo--create': (state, action) => {
		return {
			...state,
			'items': [
				...state['items'],
				action.item,
			],
		}
	},
	'mongo--remove': (state, action) => {
		return {
			...state,
			'items': state['items'].filter((item) => {
				return item.key !== action.item.key
			}),
		}
	},
	'mongo--update': (state, action) => {
		return {
			...state,
			'items': state['items'].filter((item) => {
				return item.key !== action.item.key
			}),
		}
	},
	'mongo--derive': async (state, action) => {
		try {
			const response = await p__axios({
				method: 'post',
				url: '/api/mongo',
				data: {
					method: 'get',
				},
			})
			console.log(response)
		}
		catch (error) {
			console.log(error)
		}
		return {
			...state,
		}
	},
}
//
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
