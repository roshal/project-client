//
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class component_react_items extends p__react__pure_component {
	state = {
		'value': '',
		'items': [],
	}
	methods = {
		change: (event) => {
			this.setState({
				...this.state,
				value: event.target.value,
			})
		},
		remove: (key) => {
			this.setState({
				...this.state,
				items: this.state['items'].filter((item) => {
					return key !== item.key
				}),
			})
		},
		submit: () => {
			this.setState({
				...this.state,
				items: [
					...this.state['items'],
					{
						key: Math.random(),
						value: this.state['value'],
					},
				],
			})
		},
		//	update: (item) => {
		//		this.setState({
		//			...this.state,
		//			items: [
		//				...this.state.items.filter((item) => {
		//					return key !== item.key
		//				}),
		//				{
		//					key: item.key,
		//					value: item.value,
		//				}
		//			],
		//		})
		//	},
	}
	renders = {
		items: (items) => {
			return [
				$('ul.list', items.map(
					(item) => {
						return [
							$('li.list__item', {
								key: item.key,
							}, [
								$('div', [
									item.value,
								]),
								$('div', [
									$('button.list__remove-btn.btn', {
										onClick: () => {
											return this.methods.remove(item.key)
										},
									}, [
										'remove',
									]),
									//	$('button.list__update-btn.btn', {
									//		onClick: () => {
									//			return this.methods.update(item.key)
									//		},
									//	}, [
									//		'update',
									//	]),
								]),
							]),
						][0]
					},
				)),
			][0]
		}
	}
	render = () => {
		return [
			$('div.paragraph', [
				$('div', [
					$('div', [
						$('div', [
							'create',
						]),
						$('input', {
							onChange: this.methods.change,
							value: this.state['value'],
						}),
					]),
					$('div', [
						$('button.app__submit-btn.btn', {
							onClick: this.methods.submit,
						}, [
							'submit',
						]),
					]),
				]),
				this.renders.items(this.state['items']),
			]),
		][0]
	}
}
