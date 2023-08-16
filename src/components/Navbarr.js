// import React, { useState } from "react";
import "./navbar.css";
// import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     const [showMediaIcons, setShowMediaIcons] = useState(false);
//     return (
//         <>
//             <nav className="main-nav navbar">
//                 <img className="logo" src={require('../images/transparent_logo.png')} />

//                 {/* 2nd menu part  */}
//                 <div
//                     className={
//                         showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//                     }>
//                     <ul>
//                         <li>
//                             <NavLink to="/">Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about">about</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/gallery">gallery</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/blog">blog</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/contact">contact</NavLink>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="social-media">
//                     <div className="hamburger-menu">
//                         <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//                             <GiHamburgerMenu />
//                         </a>
//                     </div>
//                 </div>
//             </nav>

//         </>
//     );
// };

// export default Navbar;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import "../Styles/main.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <img className="logo" src={require('../images/transparent_logo.png')} />
            <nav ref={navRef}>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blogs</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;