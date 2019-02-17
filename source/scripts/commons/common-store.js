//

import ps__redux_saga from 'redux-saga'
import ps__redux_thunk from 'redux-thunk'

import * as ps__redux from 'redux'

import m__common_reducer from '~/commons/common-reducer'

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ps__redux.compose

export default (state) => {
	const store = ps__redux.createStore(
		m__common_reducer,
		state,
		compose(
			ps__redux.applyMiddleware(
				ps__redux_thunk,
				ps__redux_saga(),
			),
		),
	)
	if (module.hot) {
		module.hot.accept('~/commons/common-reducer', () => {
			const reducer = require('~/commons/common-reducer')
			store.replaceReducer(reducer)
		})
	}
	return store
}
