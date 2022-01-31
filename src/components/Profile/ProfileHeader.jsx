//It's just a component to render a welcome message
const ProfileHeader = ({username}) => {
    return (
        <header>
            <h4>Hello, welcome back { username }</h4>
        </header>
    )
}
export default ProfileHeader