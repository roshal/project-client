//
import p__lodash__fp__map from 'lodash/fp/map'
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
import m__component_redux_table from '../redux/component-redux-table'
//
const $ = p__react_hyperscript
//
export default class page_table extends p__react__pure_component {
	render = () => {
		return [
			$(m__component_redux_table),
		][0]
	}
}
