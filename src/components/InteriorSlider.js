import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { interiorSliderData } from "../interior-slider-data";
import "./slider.css";

const InteriorSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = interiorSliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 3000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {interiorSliderData.map((slide, index) => {
                return (
                    <div
                        className={index === currentSlide ? "slide current" : "slide"}
                        key={index}
                    >
                        {index === currentSlide && (
                            <div>
                                <img className="slider-img" src={slide.image} alt="slide" />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default InteriorSlider;