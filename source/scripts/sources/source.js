//

import p__react_dom from 'react-dom'
import p__react_hyperscript from 'react-hyperscript'

import m__component_app_index from '~/components/apps/component-app-index'

const $ = p__react_hyperscript

const container = document.createElement('div')
p__react_dom.render(
	$(m__component_app_index),
	container,
)
document.body.appendChild(container)
