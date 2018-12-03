//
export default (element) => {
	return new Promise(
		(resolve) => {
			if (element.readyState === 'loading') {
				element.addEventListener(...(() => {
					const list = [
						'DOMContentLoaded', () => {
							element.removeEventListener(...list)
							resolve(element)
						},
					]
					return list
				})())
			} else {
				resolve(element)
			}
		},
	)
}
