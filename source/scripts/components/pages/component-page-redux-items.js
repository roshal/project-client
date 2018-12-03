//
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
import m__component_redux_items from '../redux/component-redux-items'
//
const $ = p__react_hyperscript
//
export default class page_items extends p__react__pure_component {
	render = () => {
		return [
			$(m__component_redux_items),
		][0]
	}
}
