//Error message function if key is wrong
const validateKey = key => {
    if(!key || typeof key !== 'string'){
        throw new Error('Invalid storage key provided')
    }
}

//Saves the value to session storage
export const storageSave = (key, value) => {

    validateKey(key)

    if(!value){
        throw new Error('storageSave: No value provided for ' + key)
    }

    sessionStorage.setItem(key, JSON.stringify(value))
}
//Reads the data from session storage and returns it to the place it was called 
export const storageRead = key => {

    validateKey(key)

    const data = sessionStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }

    return null
}
//Deletes the value from session storage
export const storageDelete = key => {

    validateKey(key)

    sessionStorage.removeItem(key)
}