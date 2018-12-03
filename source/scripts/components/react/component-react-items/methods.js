//
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class component_list extends p__react__pure_component {
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
