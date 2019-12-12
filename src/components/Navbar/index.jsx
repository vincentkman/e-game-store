import React, { useContext } from 'react';
import { GameContext } from '../../context';
import logo from '../../images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';

const NavbarLink = ({ route, title, icon }) => {
    return (
        <NavLink to={route} className='navbar-links-item' activeClassName='nav-active'>
            <i className={`${icon} navbar-links-item-icon`} />{title}
        </NavLink>
    );
}

function Navbar() {
    const { navbarOpen, navbarToggler } = useContext(GameContext);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-main'>
                    <div>
                        <i
                            className='fas fa-gamepad navbar-main-icon navbar-main-icon-gamepad icon'
                            onClick={navbarToggler}
                        />
                        <Link to='/'>
                            <img
                                src={logo} alt="main logo"
                                className='navbar-main-logo'
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className={navbarOpen ? 'navbar-links show-nav' : 'navbar-links'}>
                            <li><NavbarLink route='/' title='HOME' /></li>
                            <li><NavbarLink route='/about' title='ABOUT' /></li>
                            <li><NavbarLink route='/games' title='GAMES' /></li>
                            <li><NavbarLink route='/trolley' title='TROLLEY' /></li>
                            <li><NavbarLink route='/checkout' title='CHECKOUT' /></li>
                            <li><NavbarLink route='/contact' title='CONTACT' /></li>
                            <li><NavbarLink route='/login' title='LOGIN' /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
