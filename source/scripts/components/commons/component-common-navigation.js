//

import p__lodash__fp from 'lodash/fp'
import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__react_router_dom from 'react-router-dom'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-common-navigation'
	state = {
		list: [],
	}
	render = () => {
		return [
			$('div.navigation', [
				$('ul.list', [
					...p__lodash__fp.map(
						(item) => {
							return [
								$('li.list-item', {
									key: item,
								}, [
									$(ps__react_router_dom.Link, {
										to: item,
									}, [
										item,
									]),
								]),
							][0]
						}, [
							'/',
							'/authorization',
							'/common',
							'/table',
						],
					),
				]),
			]),
		][0], null
	}
}
