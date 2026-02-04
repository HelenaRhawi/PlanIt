import { Link, useLocation } from "react-router-dom"
import './NavBar.css'

function Navbar () {
    const location =useLocation()
    return (
        <>
        <nav className="top-nav">

            {location.pathname !== '/' && ( 
            <Link to="/" className="nav-link">Home</Link>
            )}

            {location.pathname !== '/profile' &&(
            <Link to="/profile" className="nav-link">Profile</Link>
            )}

            {location.pathname !== '/todolist' &&(
                <Link to="/todolist" className="nav-link">Todo List</Link>
            )}
        </nav>

        <div className="bottom-nav">
            {location.pathname !== '/contacts' && ( 
            <Link to="/contacts" className="nav-link">Contact us</Link>
            )}
        </div>
        </>
    )
}



export default Navbar