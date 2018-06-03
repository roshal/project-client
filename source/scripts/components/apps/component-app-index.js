import p__react_hyperscript from 'react-hyperscript'
import {
	Component as p__react__component,
} from 'react'
import {
	Provider as p__react_redux__provider,
} from 'react-redux'
import {
	BrowserRouter as p__react_router_dom__browser_router,
	Route as p__react_router_dom__route,
} from 'react-router-dom'
//
import m__component_common_menu from '../commons/component-common-menu'
import m__component_common_navigation from '../commons/component-common-navigation'
import m__page from '../pages/component-page'
import m__page_authorization from '../pages/component-page-authorization'
import m__page_clock from '../pages/component-page-clock'
import m__page_common from '../pages/component-page-common'
import m__page_react_items from '../pages/component-page-react-items'
import m__page_react_table from '../pages/component-page-react-table'
import m__page_redux_items from '../pages/component-page-redux-items'
import m__page_redux_mongo from '../pages/component-page-redux-mongo'
import m__page_redux_table from '../pages/component-page-redux-table'
import m__store_list from '../../stores/store-items'
//
const $ = p__react_hyperscript
//
export default class app_index extends p__react__component {
	render = () => {
		return [
			$(p__react_redux__provider, {
				store: m__store_list(),
			}, [
				$(p__react_router_dom__browser_router, {
					basename: process.env.PUBLIC_URL,
				}, [
					$([
						$(m__component_common_menu),
						$(m__component_common_navigation),
						$('div.container', [
							$(p__react_router_dom__route, {
								exact: true,
								path: '/',
								component: m__page,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/authorization/',
								component: m__page_authorization,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/clock/',
								component: m__page_clock,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/common/',
								component: m__page_common,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/react-items/',
								component: m__page_react_items,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/react-table/',
								component: m__page_react_table,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/redux-items/',
								component: m__page_redux_items,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/redux-mongo/',
								component: m__page_redux_mongo,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/redux-table/',
								component: m__page_redux_table,
							}),
						]),
					]),
				]),
			]),
		][0]
	}
}
