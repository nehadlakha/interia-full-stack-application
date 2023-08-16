import React from "react";
import Navbar from "./Navbarr";
import Footer from "./Footer";
import "./contact.css";
import { useState } from "react";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

const Contact = () => {

    const [fname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const baseUrl = "http://localhost:8000";

    const sendEmail = async () => {
        let dataSend = {
            fname: fname,
            email: email,
            phone: phone,
            message: message
        };


        if (dataSend.fname.length != 0 && dataSend.email.length != 0 && dataSend.phone.length != 0) {
            alert("Send Successfully!");
        }
        const res = await fetch(`${baseUrl}/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            // HANDLING ERRORS
            .then((res) => {
                console.log(res);
                if (res.status > 199 || res.status < 300) {
                    alert("Send Successfully !");
                }
            });

    };
    return (
        <>
            <Navbar />
            <section className="section1-contact">
                <div className="contact-black">
                    <h1>Contact Us</h1>
                </div>
            </section>
            <section className="section2-contact">
                <div className="send-message">
                    <h1>Send A Message</h1>
                    <p>Interia Enterprise gives you proper assistance regarding your every doubt about Interior and Designing</p>
                    <form className="form" onSubmit={() => sendEmail()}>
                        <input type="text" id="sendmail" className="form-control fname" placeholder="First Name*" onChange={(e) => setName(e.target.value)} required />
                        <input type="email" id="sendmail" className="form-control email" placeholder="Email Address*" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="tel" id="sendmail" className="form-control phone" placeholder="Phone Number*" pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)} required />
                        <textarea className="message" id="form-control sendmail" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit" className="send-msg-btn button-30">Send Message</button>
                    </form>
                </div>
                <div className="get-in-touch">
                    <h1>Get in Touch</h1>
                    <p>therefore always free from repetition, injected humour, or non-characteristic words etc</p>
                    <div className="line"></div>
                    <div>
                        <div className="visit-us">
                            <div className="icon-bg"><FaLocationArrow size={"3vw"} /></div>
                            <h3>Visit Us:</h3>
                            <p>A-19, Gf, Suraj vihar, Sector 15 Dwarka, Dwarka, Delhi, 110078</p>
                        </div>
                        <div className="mail-us">
                            <div className="icon-bg"><FaMailBulk size={"3vw"} /></div>
                            <h3>Mail Us:</h3>
                            <p>interia.designinteriors@gmail.com</p>
                        </div>
                        <div className="phone-us">
                            <div className="icon-bg"><FaPhone size={"3vw"} /></div>
                            <h3>Phone Us:</h3>
                            <p>9999202950, 9818570089</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;