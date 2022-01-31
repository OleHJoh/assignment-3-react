//Imports the headers function
import { createHeaders } from "./index"

//Gets the api url from the environment
const apiUrl = process.env.REACT_APP_API_URL

//Api get request for checking if the user exists by sending the username
export const checkForUser = async (username) => {
    try{
        const response = await fetch(`${apiUrl}?username=${username}`)
        if(!response.ok){
            throw new Error('Could not complete request!')
        }
        const data = await response.json()
        return [null, data]

    }
    catch (error) {
        return [error, []]
    }
}

//Api post request to create the user
export const createUser = async (username) => {
    try{
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if(!response.ok){
            throw new Error('Could not create user with username: ' + username)
        }
        const data = await response.json()
        return [null, data]

    }
    catch (error) {
        return [error, []]
    }
}

//Login function, checks if the user exists, if not create new user
export const loginUser = async (username) => {
    const [ checkError, user ] = await checkForUser(username)

    if(checkError !== null){
        return [ checkError, null ]
    }

    if(user.length > 0){
        return [ null, user.pop() ]
    }

    return await createUser(username)

}

//Api get request to find the user by it's id
export const userById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        if(!response.ok){
            throw new Error('Could not fetch user')
        }
        const user = await response.json()
        return [null, user]
    } catch (error) {
        return [ error.message, null]
    }
}