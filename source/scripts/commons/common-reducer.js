//
import {
	routerReducer as p__react_router_redux__router_reducer,
} from 'react-router-redux'
import {
	combineReducers as p__redux__combine_reducers,
} from 'redux'
//
import m__reducer_items from '../reducers/reducer-items'
import m__reducer_mongo from '../reducers/reducer-mongo'
import m__reducer_table from '../reducers/reducer-table'
//
export default p__redux__combine_reducers({
	items: m__reducer_items,
	mongo: m__reducer_mongo,
	table: m__reducer_table,
	router: p__react_router_redux__router_reducer,
})
