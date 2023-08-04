import React from "react";
import Navbar from "./Navbarr";
import Footer from "./Footer";
import "./about.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const About = () => {
    return (
        <>
            <Navbar />
            <section className="section1-about">
                <div className="about-black">
                    <h1>About Us</h1>
                </div>
            </section>
            <section className="section2-about">
                <div className="s2-img">
                    <img className="img1" src={require("../images/about2.jpg")} />
                    <img className="img2" src={require("../images/about1.jpg")} />
                </div>
                <div className="s2-content">
                    <h1>Interia Enterprise</h1>
                    <p>At Interia Enterprise, we believe that every space should be a reflection of its owner's unique personality and style. We work closely with our clients to understand their vision and turn it into a reality, creating spaces that are both functional and aesthetically pleasing.
                        <br /><br />
                        Our services include everything from initial design consultation to project management and installation. We take care of all the details, so our clients can relax and enjoy their newly designed space. At Blue Crane Interior Designer, we are committed to using sustainable and eco-friendly materials whenever possible. We believe in creating spaces that are not only beautiful but also good for the environment.
                        <br /><br />
                        If you're looking for a professional, reliable, and experienced interior design company, look no further than Blue Crane Interior Designer. Contact us today to schedule a consultation and take the first step toward creating your dream space.
                    </p>
                    <button className="button-30">Booking Now</button>
                </div>
            </section>
            <section className="section3-about">
                <div className="about-black1">
                    <div>
                        <h1>Get Professional & Luxury Interiors & Morden Furniture.</h1>
                        <button className="button-30">Play Video</button>
                    </div>
                </div>
            </section>
            <section className="section4-about">
                <h1>Meet Our Team</h1>
                <div className="s4-content">
                    <div className="mem1">
                        <div></div>
                        <div>
                            <h3>Name 1</h3>
                            <h4>Co-Founder, Office Manager</h4>
                            <div className="smedia-icons">
                                <FaInstagram size={'1.3vw'} />
                                <FaLinkedin size={'1.3vw'} />
                                <FaFacebook size={'1.3vw'} />
                                <FaTwitter size={'1.3vw'} />
                            </div>
                        </div>
                    </div>
                    <div className="mem2">
                        <div></div>
                        <div>
                            <h3>Name 2</h3>
                            <h4>Co-Founder, Office Manager</h4>
                            <div className="smedia-icons">
                                <FaInstagram size={'1.3vw'} />
                                <FaLinkedin size={'1.3vw'} />
                                <FaFacebook size={'1.3vw'} />
                                <FaTwitter size={'1.3vw'} />
                            </div>
                        </div>
                    </div>
                    <div className="mem3">
                        <div></div>
                        <div>
                            <h3>Name 3</h3>
                            <h4>Co-Founder, Office Manager</h4>
                            <div className="smedia-icons">
                                <FaInstagram size={'1.3vw'} />
                                <FaLinkedin size={'1.3vw'} />
                                <FaFacebook size={'1.3vw'} />
                                <FaTwitter size={'1.3vw'} />
                            </div>
                        </div>
                    </div>
                    <div className="mem4">
                        <div></div>
                        <div>
                            <h3>Name 4</h3>
                            <h4>Co-Founder, Office Manager</h4>
                            <div className="smedia-icons">
                                <FaInstagram size={'1.3vw'} />
                                <FaLinkedin size={'1.3vw'} />
                                <FaFacebook size={'1.3vw'} />
                                <FaTwitter size={'1.3vw'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;