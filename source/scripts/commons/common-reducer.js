//

import * as ps__react_router_redux from 'react-router-redux'
import * as ps__redux from 'redux'

import m__reducer_items from '~/reducers/reducer-items'
import m__reducer_mongo from '~/reducers/reducer-mongo'
import m__reducer_table from '~/reducers/reducer-table'

export default ps__redux.combineReducers({
	items: m__reducer_items,
	mongo: m__reducer_mongo,
	table: m__reducer_table,
	router: ps__react_router_redux.routerReducer,
})
