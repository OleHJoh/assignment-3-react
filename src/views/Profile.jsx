//Imports components needed for this component to work
import { useEffect } from "react"
import { userById } from "../api/user"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import TranslationHistory from "../components/Profile/TranslateHistory"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Profile = () => {

    //Gets the user object from context
    const { user, setUser } = useUser()

    //Uses useEffect to rerender the user data when this page is loaded
    useEffect(() => {
        const findUser = async () => {
            const [ error, latestsUser] = await userById(user.id)
            if(error === null){
                storageSave(STORAGE_KEY_USER, latestsUser)
                setUser(latestsUser)
            }
        }

        findUser()
    }, [ setUser, user.id])

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={ user.username } />
            <ProfileActions />
            <TranslationHistory translations={ user.translations } />
        </>
        
    )
}
export default withAuth(Profile)