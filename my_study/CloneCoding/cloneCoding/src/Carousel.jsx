import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from "framer-motion"
const Carousel = () => {
    const arrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
    };

    const CustomPrevArrow = (props) => (
        <motion.div
            onClick={props.onClick}
            className="custom-prev-arrow"
            style={{ ...arrowStyles, left: '-20px' }}
        >
            {"<"}
        </motion.div>
    );

    const CustomNextArrow = (props) => (
        <motion.div
            onClick={props.onClick}
            className="custom-next-arrow"
            style={{ ...arrowStyles, right: '-20px' }}
        >
            <h1>{">"}</h1>
        </motion.div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        
    };


    return (
        <Slider {...settings}>
            <div>
                <img src="/1.jpg" alt="Slide 1" />
            </div>
            <div>
                <img src="/2.jpg" alt="Slide 2" />
            </div>
            <div>
                <img src="/3.jpg" alt="Slide 3" />
            </div>
            <div>
                <img src="/4.jpg" alt="Slide 3" />
            </div>
            <div>
                <img src="/5.jpg" alt="Slide 3" />
            </div>
            <div>
                <img src="/6.jpg" alt="Slide 3" />
            </div>
            <div>
                <img src="/7.jpg" alt="Slide 3" />
            </div>
            <div>
                <img src="/8.jpg" alt="Slide 3" />
            </div>
            <div>
                <img src="/9.jpg" alt="Slide 3" />
            </div>
        </Slider>
    );
};

export default Carousel;
