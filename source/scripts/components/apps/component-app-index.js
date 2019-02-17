//

import p__prop_types from 'prop-types'
import p__react from 'react'
import p__react_hot_loader__root from 'react-hot-loader/root'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__react_redux from 'react-redux'
import * as ps__react_router_dom from 'react-router-dom'

import m__component_common_menu from '~/components/commons/component-common-menu'
import m__component_common_navigation from '~/components/commons/component-common-navigation'
import m__page from '~/components/pages/component-page'
import m__store_list from '~/commons/common-store'

const $ = p__react_hyperscript

ps__react_router_dom.Route.propTypes.component = p__prop_types.oneOfType([
	ps__react_router_dom.Route.propTypes.component,
	p__prop_types.object,
])
const page_authorization = p__react.lazy(() => {
	return import('~/components/pages/component-page-authorization')
})
const page_clock = p__react.lazy(() => {
	return import('~/components/pages/component-page-clock')
})
const page_common = p__react.lazy(() => {
	return import('~/components/pages/component-page-common')
})
const page_react_items = p__react.lazy(() => {
	return import('~/components/pages/component-page-react-items')
})
const page_react_table = p__react.lazy(() => {
	return import('~/components/pages/component-page-react-table')
})
const page_redux_items = p__react.lazy(() => {
	return import('~/components/pages/component-page-redux-items')
})
const page_redux_mongo = p__react.lazy(() => {
	return import('~/components/pages/component-page-redux-mongo')
})
const page_redux_table = p__react.lazy(() => {
	return import('~/components/pages/component-page-redux-table')
})

const component = class extends p__react.PureComponent {
	static displayName = 'component-app-index'
	render = () => {
		return [
			$(ps__react_redux.Provider, {
				store: m__store_list(),
			}, [
				$(ps__react_router_dom.BrowserRouter, {
					basename: process.env.PUBLIC_URL,
				}, [
					$([
						$(m__component_common_menu),
						$(m__component_common_navigation),
						$(p__react.Suspense, {
							fallback: $('p', [
								'loading',
							]),
						}, [
							$(ps__react_router_dom.Switch, [
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/',
									component: m__page,
								}),
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/authorization/',
									component: page_authorization,
								}),
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/clock/',
									component: page_clock,
								}),
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/common/',
									component: page_common,
								}),
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/react-items/',
									component: page_react_items,
								}),
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/react-table/',
									component: page_react_table,
								}),
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/redux-items/',
									component: page_redux_items,
								}),
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/redux-mongo/',
									component: page_redux_mongo,
								}),
								$(ps__react_router_dom.Route, {
									exact: true,
									path: '/redux-table/',
									component: page_redux_table,
								}),
							]),
						]),
					]),
				]),
			]),
		][0]
	}
}

export default p__react_hot_loader__root.hot(component)
