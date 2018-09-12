import p__react_hyperscript from 'react-hyperscript'
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class page extends p__react__pure_component {
	render = () => {
		return [
			$('div', [
				$('p', [
					'abc',
				]),
				$('p', [
					'def',
				]),
			]),
		][0]
	}
}
