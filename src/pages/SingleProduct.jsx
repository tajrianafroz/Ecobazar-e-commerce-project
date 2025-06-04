import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import Breadcrumbs from "./../components/utils/Breadcrumbs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { PiHandbagLight } from "react-icons/pi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Ratings from "./../components/utils/Ratings";
import ProductsHeading from "./../components/utils/ProductsHeading";

const SingleProduct = () => {
  const { name, id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);

  return (
    <>
      <Breadcrumbs url={`/category/${name}`} title={name} />
      <div id="singleProduct" className="container mt-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="imageSlider grid md:grid-cols-5 gap-3">
            <div className="thumbnail max-w-[100vw] col-span-5 md:col-span-1">
              <Swiper
                style={{ height: "500px" }}
                direction={"vertical"}
                breakpoints={{
                  200: {
                    direction: "horizontal",
                  },
                  768: {
                    direction: "vertical",
                  },
                }}
                className="relative"
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                navigation={{
                  enabled: true,
                  prevEl: ".upArrow",
                  nextEl: ".downArrow",
                }}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
              >
                <div className="upArrow block">
                  <MdOutlineKeyboardArrowUp />
                </div>
                <div className="downArrow block">
                  <MdKeyboardArrowDown />
                </div>
                {singleProduct?.images.map((thumb, index) => (
                  <SwiperSlide key={index} className="p-1">
                    <img
                      className="max-w-[60px] lg:max-w-[80px] block mx-auto lg:ms-auto rounded opacity-70 cursor-pointer"
                      src={thumb}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="thumbnailView md:col-span-4 max-w-[100vw]">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                  height: "500px",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {singleProduct?.images.map((view, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="max-w-[200px] lg:max-w-full block"
                      src={view}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="imageDetails">
            <div className="headingContent border-b border-b-gray-scale-gray-100">
              <div className="title flex items-center gap-2">
                <h2 className="font-semibold text-[36px] text-gray-scale-gray-900 leading-[120%]">
                  {singleProduct?.title}
                </h2>
                <p className="w-[71px] h-[29px] rounded-[4px] singleProductStockBg flex items-center justify-center text-sm leading-[150%] text-branding-success-dark">
                  {singleProduct?.availabilityStatus}
                </p>
              </div>
              <div className="productReview flex items-center pt-3 gap-3">
                {singleProduct?.rating && (
                  <Ratings count={singleProduct?.rating} />
                )}
                <p className="text-sm text-gray-scale-gray-600 leading-[150%]">
                  {singleProduct?.reviews.length} Review
                </p>
                <p className="font-semibold text-[20px] text-gray-scale-gray-400 leading-[150%]">
                  .
                </p>
                <p className="font-medium text-sm text-gray-scale-gray-800 leading-[150%]">
                  SKU:
                  <span className="ml-1 text-sm text-gray-scale-gray-600 leading-[150%]">
                    {singleProduct?.sku}
                  </span>
                </p>
              </div>
              <div className="productPrice py-5 flex items-center gap-3">
                <h3 className="text-lg lg:text-[24px] font-medium leading-[150%] text-branding-success-dark">
                  <del className="mr-1 font-normal text-gray-scale-gray-400">
                    $ {singleProduct?.price}
                  </del>{" "}
                  $
                  {(
                    singleProduct?.price -
                    Math.round(
                      singleProduct?.price *
                        (singleProduct?.discountPercentage / 100)
                    )
                  ).toFixed(2)}
                </h3>
                <p className="w-[74px] h-[27px] rounded-[30px] singleProductDiscountBg flex items-center justify-center text-sm font-medium leading-[150%] text-branding-error">
                  {singleProduct?.discountPercentage}% Off
                </p>
              </div>
            </div>
            <div className="productDescription py-6">
              <div className="productBrand flex items-center justify-between">
                <h3 className="text-sm text-gray-scale-gray-900 leading-[150%]">
                  Brand:
                  <span className="text-gray-scale-gray-600">
                    {singleProduct?.brand}
                  </span>
                </h3>
                <div className="links text-sm text-gray-scale-gray-900 leading-[150%]">
                  <p>Share item:</p>
                </div>
              </div>
              <div className="details pt-4 pb-6 text-gray-scale-gray-500">
                {singleProduct?.description}
              </div>
            </div>
            <div className="productPurchase py-[19px] border-t border-t-gray-scale-gray-100 border-b border-b-gray-scale-gray-100 flex items-center gap-3">
              <div className="counter p-2 rounded-[170px] flex items-center border border-gray-scale-gray-100">
                <button className="w-[34px] h-[34px] leading-[34px] bg-gray-scale-gray-50 text-center rounded-full cursor-pointer">
                  -
                </button>
                <p className="px-3 leading-[150%] text-gray-scale-gray-900">
                  1
                </p>
                <button className="w-[34px] h-[34px] leading-[34px] bg-gray-scale-gray-50 text-center rounded-full cursor-pointer">
                  +
                </button>
              </div>
              <div className="cart">
                <button className="py-4 px-[160px] flex items-center justify-center gap-4 bg-branding-success hover:bg-branding-success-dark rounded-[43px] font-semibold leading-[120%] cursor-pointer text-gray-scale-white">
                  Add to Cart
                  <span className="text-[20px]">
                    <PiHandbagLight />
                  </span>
                </button>
              </div>
              <div className="wishList">
                <span className="w-[52px] h-[52px] leading-[52px] text-[20px] rounded-full singleProductWishListBg text-branding-success-dark hover:border border-branding-success cursor-pointer inline-flex items-center justify-center">
                  <GoHeart />
                </span>
              </div>
            </div>
            <div className="producttag pt-6 text-sm font-medium leading-[150%] text-gray-scale-gray-900">
              <p className="pb-3">
                Category:
                <span className="capitalize ml-[6px] font-[400] text-gray-scale-gray-500">
                  {singleProduct?.category}
                </span>
              </p>
              <p>
                Tag:
                <span className="capitalize ml-[6px] font-[400] text-gray-scale-gray-500">
                  {singleProduct?.tags}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="singleProductInfo grid grid-cols-3 items-center justify-center">
          <button>Descriptions</button>
          <button>Additional Information</button>
          <button>Customer Feedback</button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
