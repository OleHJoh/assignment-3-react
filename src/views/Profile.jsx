import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import TranslationHistory from "../components/Profile/TranslateHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

    const { user } = useUser()

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