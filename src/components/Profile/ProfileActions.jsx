//Imports the components needed this component
import { Link } from "react-router-dom"
import { clearTranslationHistory } from "../../api/translate"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const ProfileActions = () => {

    //Gets the user object from context
    const { user, setUser } = useUser()

    //Click handler for logging out
    const handleLogoutClick = () => {
        if (window.confirm('Are you sure you want to logout')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    //Click handler for clearing the translate history
    const handleClearHistoryClick = async () => {
        if(!window.confirm('Are you sure?\nThis can not be undone')){
            return
        }

        const [ clearError ] = await clearTranslationHistory(user.id)

        if(clearError !== null){
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    //Returns the component to be rendered in the view
    return (
        <ul id="profileLinks">
            <li><Link to="/translate">Translate</Link></li>
            <li><button onClick={ handleClearHistoryClick }>Clear history</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul>
    )
}
export default ProfileActions