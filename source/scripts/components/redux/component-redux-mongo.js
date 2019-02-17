//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__react_redux from 'react-redux'
import * as ps__redux from 'redux'

import m__actions_mongo from '~/actions/actions-mongo'

const $ = p__react_hyperscript

const component = class extends p__react.PureComponent {
	static displayName = 'component-redux-mongo'
	state = {
		'value': '',
	}
	methods = {
		change: (event) => {
			this.setState({
				...this.state,
				value: event.target.value,
			})
		},
		submit: (event) => {
			if (this.state['value']) {
				this.props.actions['create']({
					key: Math.random(),
					value: this.state['value'],
				})
			}
		},
		remove: (item) => {
			this.props.actions['remove']({
				key: item.key,
			})
		},
		update: (item) => {
			this.props.actions['update']({
				key: this.state.item.key,
				value: this.state.item.value,
			})
		},
	}
	renders = {
		items: (items) => {
			return [
				$('ul.list', items.map(
					(item) => {
						return [
							$('li.list__item', [
								$('div.list__key', [
									item.key,
								]),
								$('div.list__value', [
									item.value,
								]),
								$('button.list__remove-btn.btn', {
									onClick: () => {
										return this.methods.remove({
											key: item.key,
										})
									},
								}, [
									'remove',
								]),
								$('button.list__edit-btn.btn', {
									onClick: () => {
										return this.methods.update(item)
									},
								}, [
									'edit',
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
			$('div.container', [
				$('div.paragraph', [
					$('div', [
						$('div', [
							$('div', [
								'create',
							]),
							$('input', {
								onChange: this.methods.change,
								value: this.state.input,
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
					this.renders.items(this.props.state['items']),
				]),
			]),
		][0]
	}
}

export default ps__react_redux.connect(
	(state) => {
		return {
			state: state.mongo,
		}
	},
	(dispatch) => {
		return {
			actions: ps__redux.bindActionCreators(m__actions_mongo, dispatch),
		}
	},
)(component)
