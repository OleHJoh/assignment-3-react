export const storageSave = (key, value) => {

    if(!key || typeof key !== 'string'){
        throw new Error('storageSave: Invalid storage key provided')
    }

    if(!value){
        throw new Error('storageSave: No value provided for ' + key)
    }

    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {

    if(!key || typeof key !== 'string'){
        throw new Error('storageRead: Invalid storage key provided')
    }

    const data = sessionStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }

    return null
}

export const storageDelete = key => {

    if(!key || typeof key !== 'string'){
        throw new Error('storageDelete: Invalid storage key provided')
    }

    sessionStorage.removeItem(key)
}