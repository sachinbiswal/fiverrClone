import React from "react";
import "./Slide.scss";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow, 
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...sliderSettings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
