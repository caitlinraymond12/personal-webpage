import ColorMode from "./ColorMode";

const NavBar = () => {

    return ( 
        <nav className="navbar">
            <div className = "nav-items">
                <div className = "toggle">
                    <ColorMode />
                </div>
                <div className = "links">
                    <a href="#about">About</a>
                    <a href='#portfolio'>Portfolio</a>
                    <a href='#contact'>Contact</a>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;