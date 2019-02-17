//

import p__moment__moment from 'moment/moment'
import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'component-common-clock'
	state = {
		time: new p__moment__moment(),
	}
	methods = {
		tick: () => {
			this.setState({
				time: new p__moment__moment(),
			})
		},
	}
	componentDidMount = () => {
		this.interval = setInterval(
			this.methods.tick,
			1000,
		)
	}
	componentWillUnmount = () => {
		clearInterval(this.interval)
	}
	render = () => {
		return [
			$('div.container', [
				$('div.paragraph', [
					this.state.time.format('HH:mm:ss'),
				]),
			]),
		][0]
	}
}
