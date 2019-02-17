//

import p__lodash__fp from 'lodash/fp'
import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__react_router_dom from 'react-router-dom'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-common-menu'
	render = () => {
		return [
			$('div.navigation', [
				$('ul.list', [
					...p__lodash__fp.map(
						(item) => {
							return [
								$('li.list-item', [
									$(ps__react_router_dom.Link, {
										className: 'list-link',
										to: item.link,
									}, [
										$('span.list-span', [
											item.name,
										]),
									]),
								]),
							][0]
						}, [
							{
								link: '/',
								name: 'главная',
							},
							{
								link: '/authorization/',
								name: 'authorization',
							},
							{
								link: '/clock/',
								name: 'clock',
							},
							{
								link: '/common/',
								name: 'common',
							},
							{
								link: '/react-items/',
								name: 'react-items',
							},
							{
								link: '/react-table/',
								name: 'react-table',
							},
							{
								link: '/redux-items/',
								name: 'redux-items',
							},
							{
								link: '/redux-mongo/',
								name: 'redux-mongo',
							},
						],
					),
				]),
			]),
		][0]
	}
}
