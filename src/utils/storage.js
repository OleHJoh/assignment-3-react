export const storageSave = (key, value) => {

    if(!key){
        throw new Error('storageSave: No storage key provided')
    }

    if(!value){
        throw new Error('storageSave: No value provided for ' + key)
    }

    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {

    if(!key){
        throw new Error('storageRead: No storage key provided')
    }

    const data = sessionStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }

    return null
}

export const storageDelete = key => {

    if(!key){
        throw new Error('storageDelete: No storage key provided')
    }

    sessionStorage.removeItem(key)
}