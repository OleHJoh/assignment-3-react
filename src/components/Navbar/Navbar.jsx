import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav>
            <img src="Logo.png" alt="Logo" width="55" height="55"/>
            <ul>
                <li><h3>Words Translation</h3></li>
            </ul>
            { user !== null &&
                <ul id="navLoginLinks">
                    <li>
                        <NavLink to="/translate">Translations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}
export default Navbar