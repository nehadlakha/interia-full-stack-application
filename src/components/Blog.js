import React from "react";
import Navbar from "./Navbarr";
import Footer from "./Footer";
import "./blog.css";
import { useHistory } from "react-router-dom";

const Blog = () => {

    const history = useHistory();

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
    return (
        <>
            <Navbar />
            <section className="section1-blog">
                <div className="about-black">
                    <h1>Blogs</h1>
                </div>
            </section>
            <section className="section2-blog">
                <div className="section2-content">
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
            <Footer />
        </>
    );
};

export default Blog;