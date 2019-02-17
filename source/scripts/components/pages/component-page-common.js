//

import p__lodash__fp from 'lodash/fp'
import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-page-common'
	state = {
		sequence: [
			'hello',
		],
	}
	render = () => {
		return [
			$('div.container', [
				$('div.paragraph', [
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
