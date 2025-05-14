import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  return (
    <div className="lg:h-[640px] lg:bannerBg mt-7 lg:mt-0">
      <div className="container grid lg:grid-cols-2 h-full items-center justify-center gap-10 lg:gap-[43px]">
        <div className="bannerImage order-2 lg:order-1">
          <img
            className="max-w-[80%] lg:max-w-full block mx-auto"
            src="/public/images/banner_image.png"
            alt=""
          />
        </div>
        <div className="bannerContent order-1 lg:order-2 text-left">
          <h4 className="font-medium text-sm text-branding-success uppercase tracking-[0.02em] leading-[100%]">
            Welcome to shopery
          </h4>
          <h2 className="font-semibold text-3xl lg:text-7xl pt-1 lg:pt-2 pb-2 lg:pb-7 text-gray-scale-gray-900 leading-[120%]">
            Fresh & Healthy Organic Food
          </h2>
          <h3 className="text-[22px] lg:text-[32px] text-gray-scale-gray-900 leading-[120%]">
            Sale up to{" "}
            <span className="font-semibold text-branding-warning">30% OFF</span>
          </h3>
          <p className="text-xs lg:text-sm pt-2 lg:pt-3 pb-4 lg:pb-8 text-gray-scale-gray-500 leading-[150%]">
            Free shipping on all your order. we deliver, you enjoy
          </p>
          <Link to="/shop" className="commomBtn">
            Shop now
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
