//Gets the api key from environment
const apiKey = process.env.REACT_APP_API_KEY
//Create headers so we don't need to do it for every api request
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}
