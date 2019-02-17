//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-react-table'
	state = {
		'rows': [
			[
				'a',
				'b',
				'c',
			],
		],
	}
	renders = {
		items: (rows) => {
			return [
				$('table', [
					$('tbody', rows.map(
						(row) => {
							return [
								$('tr', row.map(
									(cell) => {
										return [
											$('td', [
												cell,
											]),
										][0]
									},
								)),
							][0]
						},
					)),
				]),
			][0]
		},
	}
	render = () => {
		return [
			$('div.container', [
				$('div.paragraph', [
					this.renders.items(this.state['rows']),
				]),
			]),
		][0]
	}
}
