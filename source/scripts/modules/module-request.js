//

export default async () => {
	try {
		const response = await fetch('//sregneva.now.sh/test_api/staff/', {
			method: 'GET',
		})
		const json = response.json()
	} catch (error) {
		console.error(error)
		return {
			status: 'connection error',
		}
	}
}
