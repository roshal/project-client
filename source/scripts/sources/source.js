import '../../styles/sources/source.sass'
import '../../templates/sources/source.pug'
//
import p__react_hyperscript from 'react-hyperscript'
import {
	render as p__react_dom__render,
} from 'react-dom'
//
import m__component_app_index from '../components/apps/component-app-index'
import m__module__load from '../modules/module-load'
//
const $ = p__react_hyperscript
const container = document.createElement('div')
p__react_dom__render(
	$(m__component_app_index),
	container,
)
m__module__load(document, (element) => {
	element.body.appendChild(container)
})
