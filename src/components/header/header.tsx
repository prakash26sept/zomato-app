import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './header.scss';
import DarkSwitch from '../switch/switch';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    {/* <a href="/"></a> */}
                    <Link to="/"><img src="zomato.png" alt="logo" /></Link>

                    <DarkSwitch /></div>

                <div className="right-nav">
                    <div>About</div>
                    <div><Link to="/search">Search Restaurents</Link></div>

                    <div>About Me</div>
                </div>
            </div>
        </div>
    );
}

export default Header;