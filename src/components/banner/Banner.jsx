import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BannerSlider from "./BannerSlider";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      className="relative"
      slidesPerView={1}
      navigation={{
        enabled: true,
        prevEl: ".prevArrow",
        nextEl: ".nextArrow",
      }}
      pagination={true}
      loop={true}
      modules={[Navigation, Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="prevArrow hidden lg:inline-flex">
        <FaArrowLeftLong />
      </div>
      <div className="nextArrow hidden lg:inline-flex">
        <FaArrowRightLong />
      </div>
      <SwiperSlide>
        <BannerSlider />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlider />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlider />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
