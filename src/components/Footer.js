import React from "react";
import { useHistory } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaCopyright } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    const history = useHistory();

    const routeChangeContact = () => {
        let path = `/contact`;
        history.push(path);
    }

    const routeChangeHome = () => {
        let path = `/`;
        history.push(path);
    }

    const routeChangeAbout = () => {
        let path = `/about`;
        history.push(path);
    }

    const routeChangeBlog = () => {
        let path = `/blog`;
        history.push(path);
    }

    const routeChangeCareer = () => {
        let path = `/career`;
        history.push(path);
    }

    return (
        <>
            <div className="footer">
                <div className="section-1-footer">
                    <div className="section1-black">
                        <div>
                            <h1>Get started with your small makeover today</h1>
                            <p>Transform your small space into a beautiful and functional living area by taking action today. Click the button and discover a range of tips and tricks for decorating small spaces, including furniture ideas, color schemes, and organization hacks.</p>
                            <button class="button-30" role="button" onClick={routeChangeContact}>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className="section-2-footer">
                    <img src={require("../images/logo.jpeg")} />
                    <div className="important-links">
                        <h1>Important Links</h1>
                        <h4 onClick={routeChangeHome}>Home</h4>
                        <h4 onClick={routeChangeAbout}>About</h4>
                        <h4 onClick={routeChangeBlog}>Blog</h4>
                        <h4 onClick={routeChangeContact}>Contact</h4>
                        <h4 onClick={routeChangeCareer}>Career</h4>
                    </div>
                    <div className="social-media">
                        <h1>Social Media</h1>
                        <div className="insta"><FaInstagram size={'2vw'} /></div>
                        <div className="facebook"><FaFacebook size={'2vw'} /></div>
                        <div className="twitter"><FaTwitter size={'2vw'} /></div>
                    </div>
                    <div className="subscribe">
                        <input type="email" />
                        <button className="button-30">Subscribe</button>
                    </div>
                </div>
                <div className="section-3-footer">
                    <h3><FaCopyright /> Interia Enterprise. All rights reserved</h3>
                </div>
            </div>
        </>
    );
}

export default Footer;