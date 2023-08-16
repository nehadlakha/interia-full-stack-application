import React from "react";
import Navbar from "./Navbarr";
import Footer from "./Footer";
import "./gallery.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../images/about1.jpg";
import { FaWindowClose } from "react-icons/fa";
import data from "./Gallery-data";

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <Navbar />
            <section className="section1-gallery">
                <div className="gallery-black">
                    <h1>Gallery</h1>
                </div>
            </section>
            <section className="section2-gallery">
                <div className="s2-div">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={require("../images/gallery-slider/amira-aboalnaga-O7WjrXiKy_s-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/armin-djuhic-mcL2f-J74GY-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/avery-klein-JaXs8Tk5Iww-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/beazy-RuCVvjuyNeQ-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/charlota-blunarova-M0FIbfxhK64-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/connor-wang-MNz7IGrcEl0-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/don-kaveen-NFbwes_e-jI-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/minh-pham-7pCFUybP_P8-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/minh-pham-OtXADkUh3-I-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/r-architecture-CCjAPxoQWgQ-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/r-architecture-HQCW1gTMjek-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/roberto-nickson-ZXbDeof0nlQ-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/spacejoy-IH7wPsjwomc-unsplash.jpg")} /></SwiperSlide>
                        <SwiperSlide><img src={require("../images/gallery-slider/sven-brandsma-jxbdO7YXL8Y-unsplash.jpg")} /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="section3-gallery">
                <div className={model ? "model open" : "model"}>
                    <img src={tempimgSrc} />
                    <FaWindowClose onClick={() => setModel(false)} />
                </div>
                <div className="gallery">
                    {data.map((item, index) => {
                        return (
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Gallery;
