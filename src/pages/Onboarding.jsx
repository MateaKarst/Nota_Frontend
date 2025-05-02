import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/variables.css";
import NotaLogo from "../components/Logos/NotaLogo";
import "../styles/pages/onboarding.css";

import funImage from "../assets/backgrounds/onboarding/fun-image.jpg";
import communityImage from "../assets/backgrounds/onboarding/community-image.jpg";
import recognitionImage from "../assets/backgrounds/onboarding/recognition-image.jpg";
import growthImage from "../assets/backgrounds/onboarding/growth-image.jpg";

function Onboarding() {
  const data = [
    {
      logo: 2,
      title: "Fun",
      text: "Have fun and enjoy your hobby with others.",
      image: funImage,
    },
    {
      logo: 3,
      title: "Growth",
      text: "Learn and grow with a like-minded community.",
      image: communityImage,
    },
    {
      logo: 1,
      title: "Recognition",
      text: "Be recognized for your achievements and skills.",
      image: recognitionImage,
    },
    {
      logo: 0,
      title: "Something New",
      text: "Discover new things and expand your horizons.",
      image: growthImage,
    },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }} // enables dots at the bottom
      className="onboarding-swiper"
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="onboarding"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <NotaLogo colorIndex={slide.logo} />
            <div className="text-container">
              <h1 className="title">{slide.title}</h1>
              <p className="text">{slide.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Onboarding;
