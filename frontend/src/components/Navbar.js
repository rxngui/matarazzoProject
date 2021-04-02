import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/Logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

const Navbar = () => {
    const email = localStorage.getItem('usu_email');
    const senha = localStorage.getItem('usu_senha');
    const [navbar, setNavbar] = useState(false);
    const history = useHistory();

    useEffect(() => {
        return () => {
          setNavbar({});
        };
    }, []);
    
    const alterarNav = () => {
        if (window.scrollY >= 100)
            setNavbar(true);
        else
            setNavbar(false);
    };

    window.addEventListener('scroll', alterarNav);

    function logOut() {
        localStorage.removeItem('usu_email');
        localStorage.removeItem('usu_senha');
        history.push('./');
    }

    if (email != null && senha != null)
        return (
            <nav className={navbar ? 'navbar fixed-top navbar-expand-lg navbar-dark bg-brown scrolled-up' : 'navbar fixed-top navbar-expand-lg navbar-dark bg-transparent scrolled-down'}>
                <div className="header-div">
                    <div>
                        <Logo />
                    </div>
                    <div className="header-nav align-items-center">
                        <NavLink to='./minha-conta'>Minha conta</NavLink>
                        <NavLink to='./'>
                            <button className="btn bt-dark bg-yellow" onClick={logOut}>SAIR</button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    else
        return (
            <nav className={navbar ? 'navbar fixed-top navbar-expand-lg navbar-dark bg-brown scrolled-up' : 'navbar fixed-top navbar-expand-lg navbar-dark bg-transparent scrolled-down'}>
                <div className="header-div">
                    <div>
                        <Logo />
                    </div>
                    <div className="header-nav">
                        <NavLink to='/login'>
                            <button className="btn bt-dark bg-yellow">LOGIN</button>
                        </NavLink>

                        <NavLink to='/cadastro'>
                            <button className="btn bt-dark bg-yellow">CADASTRO</button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
}

export default Navbar;