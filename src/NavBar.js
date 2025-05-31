import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className = "links">
                <Link to='/'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='contact'>Contact</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;