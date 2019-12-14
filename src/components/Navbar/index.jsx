import React, { useContext } from 'react';
import { GameContext } from '../../context/game';
import { TrolleyContext } from '../../context/trolley';
import Logo from '../../images/logo.png';
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
    const { trolleyItems } = useContext(TrolleyContext);
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
                                src={Logo} alt="main logo"
                                className='navbar-main-logo'
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className={navbarOpen ? 'navbar-links show-nav' : 'navbar-links'}>
                            <li><NavbarLink route='/' title='HOME' /></li>
                            <li><NavbarLink route='/about' title='ABOUT' /></li>
                            <li><NavbarLink route='/games' title='GAMES' /></li>
                            <li><NavbarLink route='/contact' title='CONTACT' /></li>
                            <li><NavbarLink route='/trolley' title='TROLLEY' /></li>
                        </ul>
                        <div className="navbar-main-trolley">
                            <Link to='/trolley'>
                                <i className="fas fa-cart-arrow-down navbar-main-icon navbar-main-icon-basket icon" />
                                <div className="navbar-main-trolley-item">

                                    {trolleyItems}

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;


// import React, { useState } from 'react';
// import Logo from '../../images/logo.png';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';
// import './navbar.scss';

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//        <Navbar className='navbar default' color="transparent" light expand="md">
//       <NavbarBrand href="/"><img src={Logo} alt='logo' className='navbar-logo' /></NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/">HOME</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/about/">ABOUT</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/games">GAMES</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/trolley">TROLLEY</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/checkout">CHECKOUT</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/contact">CONTACT</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/login">LOGIN</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;