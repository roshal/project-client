import p__react_hyperscript from 'react-hyperscript'
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class page_authorization extends p__react__pure_component {
	render = () => {
		return [
			$('div', [
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
		][0]
	}
	method = (event) => {
		event.preventDefault()
		console.log(event)
	}
}
