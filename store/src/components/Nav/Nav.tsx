import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav>
            <div className='text-container-nav'>
                <p>Länk 1</p>
                <p>Länk 2</p>
                <p>Länk 3</p>
                <p>Länk 4</p>
                <Link to="/admin">Admin Login</Link>
            </div>
        </nav>
    );
}

export default Nav;