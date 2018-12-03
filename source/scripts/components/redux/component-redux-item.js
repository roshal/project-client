//
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
import {
	connect as p__react_redux__connect,
} from 'react-redux'
import {
	bindActionCreators as p__redux__bind_action_creators,
} from 'redux'
//
import m__action_items from '../../actions/action-items'
//
const $ = p__react_hyperscript
//
export default p__react_redux__connect(
	(state, props) => {
		return {
			state: state.getIn([
				'items',
				props.index,
			]),
		}
	},
	(dispatch) => {
		return {
			actions: p__redux__bind_action_creators(
				m__action_items, dispatch,
			),
		}
	},
)(class component_redux_item extends p__react__pure_component {
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
		][0]
	}
})
