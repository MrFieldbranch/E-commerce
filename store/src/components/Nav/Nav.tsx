import './Nav.css';
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png"

function Nav() {

    return (
        <nav>
            <div className='text-container-nav'>
                <Link to="/start">
                    <img src={logo} alt="Logon för Fancy Fashion" />
                </Link>
                <p>Dam-dropdown</p>
                <p>Herr-dropdown</p>                
                <Link to="/admin">Admin Login</Link>
            </div>
        </nav>
    );
}

export default Nav;