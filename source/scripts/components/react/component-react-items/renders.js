import p__react_hyperscript from 'react-hyperscript'
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class component_list extends p__react__pure_component {
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
						onChange: this.method_change,
						value: this.state.input,
					}),
				]),
				$('div', [
					$('button.app__submit-btn.btn', {
						onClick: this.method_submit,
					}, [
						'submit',
					]),
				]),
				this.items(this.state.items),
			]),
		][0]
	}
}
