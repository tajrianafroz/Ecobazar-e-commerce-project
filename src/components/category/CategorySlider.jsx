import React from "react";
import ProductsHeading from "./../utils/ProductsHeading";
import CategorySliderCards from "./../utils/CategorySliderCards";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const CategorySlider = () => {
  const category = useSelector((state) => state.category);

  return (
    <div className="py-[80px] categoryBg">
      <div className="container">
        <ProductsHeading title="Shop by Top Categories" />
        <div className="categoryCards pt-10">
          <Swiper
            className="grid lg:grid-cols-6"
            spaceBetween={24}
            slidesPerView={6}
            navigation={{
              enabled: true,
              prevEl: ".categoryPrevArrow",
              nextEl: ".categoryNextArrow",
            }}
            modules={[Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="categoryPrevArrow hidden lg:inline-flex">
              <FaArrowLeftLong />
            </div>
            <div className="categoryNextArrow hidden lg:inline-flex">
              <FaArrowRightLong />
            </div>
            {category?.map((item, index) => (
              <SwiperSlide>
                <CategorySliderCards title={item.name} url={item.slug} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
