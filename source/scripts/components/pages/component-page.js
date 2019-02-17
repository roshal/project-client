//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-page'
	render = () => {
		return [
			$('div.container', [
				$('div', [
					$('p', [
						'abc',
					]),
					$('p', [
						'def',
					]),
				]),
			]),
		][0]
	}
}
