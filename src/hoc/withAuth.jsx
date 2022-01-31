//Imports components used by this component to work
import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

//Component checks if a user is logged in
//if user is logged allows the page to be loaded, if not redirected to login page 
const withAuth = Component => props => {
    const { user } = useUser()
    if(user !== null){
        return <Component {...props} />
    }
    else {
        return <Navigate to="/" />
    }
}
export default withAuth