import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav navbar">
                <div className="logo">
                    <h1>Logo</h1>
                    {/* <img src={require('../images/logo.jpeg')} /> */}
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery">gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
