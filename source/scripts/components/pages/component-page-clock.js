//

import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import m__component_common_clock from '~/components/commons/component-common-clock'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-page-clock'
	render = () => {
		return [
			$(m__component_common_clock),
		][0]
	}
}
