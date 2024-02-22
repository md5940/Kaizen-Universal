// components/SwiperSlider.js
import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const SwiperSliderComponent = ({ children }) => {
  const settings = {
    navigation: true,
    pagination: { clickable: true },
    slidesPerView: 1,
    spaceBetween: 30,
  };

  return <Swiper {...settings}>{children}</Swiper>;
};

const SwiperSlider = ({ children }) => {
  return (
    <SwiperSliderComponent>
      <SwiperSlide>{children}</SwiperSlide>
    </SwiperSliderComponent>
  );
};

export default SwiperSlider;
