import React from "react";
import Navbar from "./Navbarr";
import Footer from "./Footer";
import ImageGallery from "./ImageGallery";

const Gallery = () => {
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <ImageGallery />
            </section>
            <Footer />
        </>
    );
};

export default Gallery;