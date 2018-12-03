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
	handle_change = (event) => {
		this.setState({
			...this.state,
			input: event.target.value,
		})
	}
	handle_remove = (event) => {
		this.setState({
			...this.state,
			items: this.state.items.filter((item) => {
				return item !== this.state.input
			}),
		})
	}
	handle_submit = () => {
		this.setState({
			...this.state,
			items: [
				...this.state.items,
				this.state.input,
			],
		})
	}
	items = (items) => {
		return [
			$('ul.list', items.map(
				(item) => {
					return [
						$('li.list__item', [
							item,
						]),
					][0]
				},
			)),
		][0]
	}
	render = () => {
		return [
			$('div', [
				$('div', [
					$('div', [
						'new value',
					]),
					$('input', {
						onChange: this.handle_change,
						value: this.state.input,
					}),
				]),
				$('div', [
					$('button.app__submit-btn.btn', {
						onClick: this.handle_submit,
					}, [
						'submit',
					]),
				]),
				this.items(this.state.items),
			]),
		][0]
	}
}
