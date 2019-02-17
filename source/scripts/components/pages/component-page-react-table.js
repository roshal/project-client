//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import m__component_react_table from '~/components/react/component-react-table'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-page-react-table'
	render = () => {
		return [
			$(m__component_react_table),
		][0]
	}
}
