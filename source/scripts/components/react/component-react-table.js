//
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class component_react_table extends p__react__pure_component {
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
			$('div.paragraph', [
				this.renders.items(this.state['rows']),
			]),
		][0]
	}
}
