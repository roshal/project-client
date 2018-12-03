//
import p__lodash__fp from 'lodash/fp'
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
import m__component_react_table from '../react/component-react-table'
//
const $ = p__react_hyperscript
//
export default class page_table extends p__react__pure_component {
	render = () => {
		return [
			$(m__component_react_table),
		][0]
	}
}
