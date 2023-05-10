import Nav from '../Nav/Nav';
import './Header.css';

function Header() {

    return (
        <header>
            <div className="color-container-header">
                <div className='text-container-header'>
                    <p>Snygga kläder till ett bra pris</p>
                    <p>Fri frakt och retur*</p>
                    <p>30 dagars öppet köp</p>
                </div>
            </div>
            <Nav />
        </header>
    );
}

export default Header;
