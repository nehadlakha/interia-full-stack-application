import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbarr";
import "./home.css";
import { FaHome, FaIndustry, FaBuilding, FaBed, FaCompass, FaToolbox, FaMedal, FaWallet, FaStar, FaRegStar } from "react-icons/fa";
import InteriorSlider from "./InteriorSlider";
import FurnitureSlider from "./FurnitureSlider";
import RetailSlider from "./RetailSlider";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Footer from "./Footer";

const Home = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = `/about`;
        history.push(path);
    }

    const routeChangeBlogs = () => {
        let path = `/blog`;
        history.push(path);
    }

    const routeChangeNews1 = () => {
        let path = `/news1`;
        history.push(path);
    }

    const routeChangeNews2 = () => {
        let path = `/news2`;
        history.push(path);
    }

    const routeChangeNews3 = () => {
        let path = `/news3`;
        history.push(path);
    }

    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <Navbar />
            <div className="bg">
            </div>
            <section className="hero-section">
                <div className="white-bg">
                    <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
                        <div className="content">
                            <h1 className="primary-heading">Designing Spaces, Redefining Living<br /> Your Ultimate Interior Solutions</h1>
                            <h3>Interia Enterprise is a full-service interior design company the specializes in creating beautiful and functional spaces for homes and businesses.</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-2">
                <div className="grid-item item1">
                    <div>
                        <h1>What We Offer</h1>
                        <p>Interia Enterprise is a full-service interior design company that specializes in creating beautiful and functional spaces for homes and businesses.<br /><br />
                            Our team of talented designers has years of experience in the industry and is dedicated to providing our clients with exceptional service and stunning design solutions.
                        </p>
                        <button class="button-30" role="button" onClick={routeChange}>About us</button>
                    </div>
                </div>
                <div className="grid-item item2">
                    <div className="grid-item-div">
                        <div className="icon"><FaHome size={'4.5vw'} /></div>
                        <div className="grid-item-content">
                            <h3>Residential Interior</h3>
                            <p>All types of Residential Interior work with Interia Enterprise</p>
                        </div>
                    </div>
                </div>
                <div className="grid-item item3">
                    <div className="grid-item-div">
                        <div className="icon"><FaIndustry size={'4.5vw'} /></div>
                        <div className="grid-item-content">
                            <h3>Commercial Interior</h3>
                            <p>Suffered alteration in which don't look believable.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-item item4">
                    <div className="grid-item-div">
                        <div className="icon"><FaBuilding size={'4.5vw'} /></div>
                        <div className="grid-item-content">
                            <h3>Hospitality Interior</h3>
                            <p>Suffered alteration in which don't look believable.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-item item5">
                    <div className="grid-item-div">
                        <div className="icon"><FaBed size={'4.5vw'} /></div>
                        <div className="grid-item-content">
                            <h3>Modern Furniture</h3>
                            <p>Suffered alteration in which don't look believable.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-3-sliders">
                <div className="interior-slider" >
                    <h3>Interior</h3>
                    <InteriorSlider />
                </div>
                <div className="furniture-slider" >
                    <h3>Furniture</h3>
                    <FurnitureSlider />
                </div>
                <div className="retail-slider" >
                    <h3>Retail</h3>
                    <RetailSlider />
                </div>
            </section>
            <section className="section-4-about">
                <div className="img-content">
                    <h1>About Our Company</h1>
                    <img src={require("../images/section4.jpg")} />
                </div>
                <div className="text-content">
                    <h3>Interia Enterprise</h3>
                    <p>Welcome to our interior designer company! We are a passionate team of creative minds dedicated to transforming spaces into inspiring and functional environments. With a profound understanding of design principles and a keen eye for detail, we aim to exceed our clients' expectations in every project we undertake.
                        <br />
                        <br />
                        At our core, we believe that interior design is an art that can significantly impact individuals' lives and enhance their daily experiences. Our approach combines aesthetics, functionality, and innovation, as we collaborate closely with our clients to bring their visions to life.
                        Our services encompass every stage of the design process, from concept development and space planning to material selection and project management. We understand the importance of deadlines and budgets, ensuring a seamless and stress-free experience for our clients from start to finish.
                        We believe that exceptional design has the power to elevate lifestyles and foster a harmonious connection between people and their surroundings. Join us on this creative journey, and together, we will shape spaces that inspire, delight, and stand the test of time.
                    </p>
                    <button class="button-30" role="button" onClick={routeChange}>Read more</button>
                </div>
            </section>
            <section className="section-5-values">
                <div className="background">
                    <h1>Our Values</h1>
                    <section>
                        <div className="outer-box">
                            <div className="box1">
                                <div className="icons">
                                    <FaCompass size={'4.5vw'} />
                                </div>
                                <h3>Commitment to Work</h3>
                            </div>
                        </div>
                        <div className="outer-box">
                            <div className="box2" >
                                <div className="icons">
                                    <FaToolbox size={'4.5vw'} />
                                </div>
                                <h3>Cost Effective Plans</h3>
                            </div>
                        </div>
                        <div className="outer-box">
                            <div className="box3">
                                <div className="icons">
                                    <FaMedal size={'4.5vw'} />
                                </div>
                                <h3>Our Solid Team Work</h3>
                            </div>
                        </div>
                        <div className="outer-box">
                            <div className="box4">
                                <div className="icons">
                                    <FaWallet size={'4.5vw'} />
                                </div>
                                <h3>Standard Of Excellence</h3>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="section-6-testimonial">
                <div className="our-customer">
                    <h2>"</h2>
                    <h1>Our Customer</h1>
                </div>
                <div className="customer-review">
                    <div className="customer1">
                        <div className="customer-img image1">
                            <img />
                        </div>
                        <div className="customer-content c1">
                            <h3>Himanshi Bhardwaj</h3>
                            <h5>Loyal Customer</h5>
                            <FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} />
                            <p>Creative Luxury Interior Designs & Innovative Team, work is really Value for money !! Awesome Workmanship, management is very much taking initiative on each & every project, Quality is the prime motive of Bluecrane Interior Designs !! Thanks Interia Enterprise Highly recommend</p>
                        </div>
                    </div>
                    <div className="customer2">
                        <div className="customer-img image2">
                            <img />
                        </div>
                        <div className="customer-content c2">
                            <h3>Sneha Roy</h3>
                            <h5>Loyal Customer</h5>
                            <FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaRegStar size={'0.8vw'} />
                            <p>Let me tell you, I guess I had one of the best bathroom remodellings in Patel Nagar. I decided to hire Interior Designers in Patel Nagar and finally reached out to the team of Bluecrane. They had so many fresh decor ideas and did the work under the budget as well. I highly recommend them to everyone.</p>
                        </div>
                    </div>
                    <div className="customer3">
                        <div className="customer-img image3">
                            <img />
                        </div>
                        <div className="customer-content c3">
                            <h3>Raj Muni</h3>
                            <h5>Loyal Customer</h5>
                            <FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} />                            <p>I recently bought an office in Noida and we were looking for a professional one who can understand our requirements and deliver to us in the same way on time. if we talk about the pricing these are the best ones and they will give you the best quality on a given budget. Finishing the work is smooth superb and on time.</p>
                        </div>
                    </div>
                    <div className="customer4">
                        <div className="customer-img image4">
                            <img />
                        </div>
                        <div className="customer-content c4">
                            <h3>Dropati Devi</h3>
                            <h5>Loyal Customer</h5>
                            <FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} /><FaStar size={'0.8vw'} />                            <p>We recently got our house constructed by Bluecrane Interior Designer. We had a great experience working with them. The best thing about them was that they made a drawing first, got our feedback and implemented it after we approved it. People visiting our house have all the good things to say about the house. We loved working with you. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-7">
                <div className="section-7-bg">
                    <div className="section-7-content">
                        <div className="project-done s7-box">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <h1>
                                    {counterOn && <CountUp start={0} end={130} duration={3} delay={0} />}
                                    +
                                </h1>
                            </ScrollTrigger>
                            <h3>Project Done</h3>
                        </div>
                        <div className="various-services s7-box">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <h1>
                                    {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
                                    +
                                </h1>
                            </ScrollTrigger>
                            <h3>Various Services</h3>
                        </div>
                        <div className="happy-customers s7-box">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <h1>
                                    {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}
                                    +
                                </h1>
                            </ScrollTrigger>
                            <h3>Happy Customers</h3>
                        </div>
                        <div className="years-experience s7-box">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <h1>
                                    {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
                                    +
                                </h1>
                            </ScrollTrigger>
                            <h3>Years Experience</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-8">
                <h1>Recent News</h1>
                <button class="button-30" role="button" onClick={routeChangeBlogs}>View more</button>
                <div className="section8-content">
                    <div className="news1" onClick={routeChangeNews1}>
                        <img src={require("../images/news1.jpg")} />
                        <div>
                            <h3>09/03/2023 . by Interia</h3>
                            <h2>10 Tips for Decorating a Small Space</h2>
                        </div>
                    </div>
                    <div className="news2" onClick={routeChangeNews2}>
                        <img src={require("../images/news2.jpg")} />
                        <div>
                            <h3>09/03/2023 . by Interia</h3>
                            <h2>Top 5 Interior Design Trends</h2>
                        </div>
                    </div>
                    <div className="news3" onClick={routeChangeNews3}>
                        <img src={require("../images/news3.jpg")} />
                        <div>
                            <h3>09/03/2023 . by Interia</h3>
                            <h2>How to choose the right color</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-9">
                <Footer />
            </section>
        </>
    );
};

export default Home;