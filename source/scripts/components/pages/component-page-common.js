import p__lodash__fp from 'lodash/fp'
import p__react_hyperscript from 'react-hyperscript'
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class page_component extends p__react__pure_component {
	state = {
		sequence: [
			'hello',
		],
	}
	render = () => {
		return [
			$('div', [
				$('div', [
					$('button', {
						onClick: this.method,
					}, [
						'method',
					]),
				]),
				$('div', [
					p__lodash__fp.join(' ')(this.state.sequence),
				]),
			]),
		][0]
	}
	method = () => {
		this.setState({
			...this.state,
			sequence: [
				...this.state.sequence,
				'react',
			],
		})
	}
}
