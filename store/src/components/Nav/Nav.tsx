import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav>
            <div className='text-container-nav'>
                <p>Logo och företagsnamn</p>
                <p>Dam-dropdown</p>
                <p>Herr-dropdown</p>                
                <Link to="/admin">Admin Login</Link>
            </div>
        </nav>
    );
}

export default Nav;