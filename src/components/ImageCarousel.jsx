import { useState } from "react";
import Slider from "react-slick";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/ImageCarousel.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [image1, image2, image3, image4];

export default function ImageCarousel() {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0, 
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className="imageCarousel">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx} className={idx == imageIndex ? "slide activeSlide" : "slide"}>
                        <img
                            src={img}
                            alt={`Slide ${idx + 1}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

const NextArrow = ({onClick}) => {
    return (
        <div className="arrow next" onClick={onClick}>
            <FaArrowRight/>
        </div>
    )
}

const PrevArrow = ({onClick}) => {
    return (
        <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft/>
        </div>
    )
}