//
import p__lodash__fp from 'lodash/fp'
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
import {
	Link as p__react_router_dom__link,
} from 'react-router-dom'
//
const $ = p__react_hyperscript
//
export default class component_menu extends p__react__pure_component {
	render = () => {
		return [
			$('div.navigation', [
				$('ul.list', [
					...p__lodash__fp.map(
						(item) => {
							return [
								$('li.list-item', [
									$(p__react_router_dom__link, {
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
