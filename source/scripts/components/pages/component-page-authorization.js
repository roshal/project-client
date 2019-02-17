//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-page-authorization'
	render = () => {
		return [
			$('div.container', [
				$('div.paragraph', [
					$('div', [
						$('div', [
							'username',
						]),
						$('input', {
							id: 'username',
							name: 'username',
						}),
					]),
					$('div', [
						$('div', [
							'password',
						]),
						$('input', {
							id: 'password',
							name: 'password',
						}),
					]),
					$('div', [
						$('button', {
							onClick: this.method,
						}, [
							'submit',
						]),
					]),
				]),
			]),
		][0]
	}
	method = (event) => {
		event.preventDefault()
	}
}
