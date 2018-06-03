import p__redux_thunk from 'redux-thunk'
//
import {
	applyMiddleware as p__redux__apply_middleware,
	createStore as p__redux__create_store,
	compose as p__redux__compose,
} from 'redux'
import {
	createLogger as p__redux_logger__create_logger,
} from 'redux-logger'
//
import m__common_reducer from './common-reducer'
//
const logger = p__redux_logger__create_logger()
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || p__redux__compose
//
export default (state) => {
	return p__redux__create_store(
		m__common_reducer,
		state,
		compose(
			p__redux__apply_middleware(
				p__redux_thunk,
				logger,
			),
		),
	)
}
//import createHistory from 'history/createBrowserHistory'
//import {applyMiddleware, createStore} from 'redux'
//import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
//import {routerMiddleware} from 'react-router-redux'
//import {promiseMiddleware, localStorageMiddleware} from './middleware'
//export const history = createHistory()
//const myRouterMiddleware = routerMiddleware(history)
//const getMiddleware = () => {
//	if (process.env.NODE_ENV == 'production') {
//		return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware)
//	} else {
//		return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
//	}
//}
//export const store = createStore(reducer, composeWithDevTools(getMiddleware()))
