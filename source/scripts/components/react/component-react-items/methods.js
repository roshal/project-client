//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-list'
	state = {
		input: '',
		items: [],
	}
	method = {
		change: (event) => {
			this.setState({
				...this.state,
				input: event.target.value,
			})
		},
		remove: (event) => {
			this.setState({
				...this.state,
				items: this.state.items.filter((item) => {
					return item !== this.state.input
				}),
			})
		},
		submit: () => {
			this.setState({
				...this.state,
				items: [
					...this.state.items,
					this.state.input,
				],
			})
		},
	}
}
