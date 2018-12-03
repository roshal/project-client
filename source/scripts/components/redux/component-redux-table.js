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
import m__action_table from '../../actions/action-table'
//
const $ = p__react_hyperscript
const source = class component_redux_table extends p__react__pure_component {
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
		actions: p__redux__bind_action_creators(
			m__action_table, dispatch,
		),
	}
}
const connection = p__react_redux__connect(
	map_to_props__state,
	map_to_props__actions__dispatch,
)
//
export default connection(source)
