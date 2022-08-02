const API_URL = 'http://localhost:5000/api/v1/apiSraping'

export async function getAllLaunches() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}