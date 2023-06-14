"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rowdies } from "next/font/google";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const slides = [
    {
      image: "/images/carousel1.jpg",
      alt: "Discover New Collection",
    },
    {
      image: "/images/1600px-Lazada_(2019).svg.png",
      alt: "Shop with Confidence",
    },
  ];

  return (
    <div
      className="carousel bg-white "
      style={{
        width: "988px",
        height: "344px",
        justifyContent: "center",
        flexDirection: "row",
        // marginLeft: 400,
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="carousel-slide">
              <Image
                src={slide.image}
                width={988}
                height={344}
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
