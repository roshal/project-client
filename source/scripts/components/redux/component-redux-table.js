//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__react_redux from 'react-redux'
import * as ps__redux from 'redux'

import m__actions_table from '~/actions/actions-table'

const $ = p__react_hyperscript

const component = class extends p__react.PureComponent {
	static displayName = 'component-redux-table'
	state = {
		'value': '',
	}
	methods = {
		change: (event) => {
			this.setState({
				...this.state,
				'value': event.target.value,
			})
		},
		submit: (event) => {
			event.preventDefault()
			if (this.state['value']) {
				const item = {
					key: Math.random(),
					cells: [
						this.state.value,
						this.state.value,
						this.state.value,
					],
				}
				this.props.actions['create'](item)
			}
		},
		remove: (item) => {
			this.props.actions['remove'](item)
		},
		update: (item) => {
			this.setState({
				id: item.id,
				new_item_key: item.key,
				new_item_value: item.value,
			})
			const update = {
				key: this.state.item.key,
				value: this.state.item.value,
			}
			this.props.actions['remove'](update)
		},
	}
	renders = {
		table: (table) => {
			return [
				$('table', [
					$('tbody', table.map(
						(row) => {
							return [
								$('tr', [
									$('td', [
										row.key,
									]),
									$('td', [
										row.cells,
									]),
									$('td', [
										$('button.list__remove-btn.btn', {
											onClick: () => {
												return this.methods.remove({
													key: row.key,
												})
											},
										}, [
											'remove',
										]),
									]),
									$('td', [
										$('button.list__edit-btn.btn', {
											onClick: () => {
												return this.methods.update(row)
											},
										}, [
											'update',
										]),
									]),
								]),
							][0]
						},
					)),
				]),
			][0]
		}
	}
	render = () => {
		return [
			$('div.container', [
				$('div.paragraph', [
					$('div', [
						$('div', [
							$('label.app__value-label', [
								'value',
								$('input.app__value-input', {
									onChange: this.methods.change,
									value: this.state.value,
								}),
							]),
						]),
						$('div', [
							$('button.app__submit-btn.btn', {
								onClick: this.methods.submit,
							}, [
								'submit',
							]),
						]),
					]),
					this.renders.table(this.props.state['table']),
				]),
			]),
		][0]
	}
}
const map_to_props__state = (state) => {
	return {
		state: state.table,
	}
}
const map_to_props__actions__dispatch = (dispatch) => {
	return {
		actions: ps__redux.bindActionCreators(m__actions_table, dispatch),
	}
}
const connection = ps__react_redux.connect(
	map_to_props__state,
	map_to_props__actions__dispatch,
)

export default connection(component)
