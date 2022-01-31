//Imports the component needed for this component
import UserProvider from "./UserContext"

//Function thats sends user provider to its children
const AppContext = ({ children }) => {

    return(
        <UserProvider>
            { children}
        </UserProvider>
    )
}

export default AppContext