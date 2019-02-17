//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import m__component_redux_items from '~/components/redux/component-redux-items'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-page-redux-items'
	render = () => {
		return [
			$(m__component_redux_items),
		][0]
	}
}
