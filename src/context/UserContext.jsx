//Imports components needed for this component
import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage"

const UserContext = createContext()

//Function that sends the user to places its called
export const useUser = () => {
    return useContext(UserContext)
}

const UserProvider = ({children}) => {

    const [ user, setUser ] = useState( storageRead( STORAGE_KEY_USER ))

    const state = {
        user,
        setUser
    }

    //Returns the component to send state to it's children
    return (
        <UserContext.Provider value={ state }>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider