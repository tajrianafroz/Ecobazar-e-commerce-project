import React from "react";
import { Link } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import Ratings from "./Ratings";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";



const FeaturedProductCard = ({ product }) => {
  return (
    <div className="productCard group hover:border-branding-success hover:featuredProductCardShadow border border-gray-scale-gray-100 rounded-lg bg-gray-scale-white">
      <div className="productImage lg:p-[5px]">
        <Link to="" className="relative">
          <p className="text-xs lg:text-sm py-[3px] px-1 lg:px-2 inline-block absolute top-4 left-4 rounded leading-[150%] text-gray-scale-white bg-branding-error">
            Sale {product.discountPercentage}%
          </p>
          <img
            loading="lazy"
            className="max-w-full mx-auto"
            src={product.thumbnail} 
            alt=""
          />
          <div className="productLinks absolute top-5 right-[-15px] group-hover:right-5 group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-250">
            <span className="productLinkIcons">
              <IoHeartOutline />
            </span>
            <span className="productLinkIcons">
              <MdOutlineRemoveRedEye />
            </span>
          </div>
        </Link>
      </div>
      <div className="productContent p-2 lg:p-4 grid grid-cols-3 items-center justify-between">
        <div className="details col-span-2 justify-start">
          <Link
            to=""
            className="text-sm leading-[150%] text-gray-scale-gray-700 hover:text-branding-success-dark"
          >
            {product.title}
          </Link>
          <h3 className="text-sm lg:text-[16px] pb-1 lg:pb-[6px] font-medium leading-[150%] text-gray-scale-gray-900">
            $
            {(
              product.price -
              Math.round(product.price * (product.discountPercentage / 100))
            ).toFixed(2)}
            <del className="ml-1 font-normal text-gray-scale-gray-400">
              {product.price}
            </del>
          </h3>
          <Ratings count={product.rating} />
        </div>
        <div className="cartIcon ml-auto w-10 h-10 leading-10 text-lg flex items-center justify-center rounded-full text-gray-scale-gray-900 hover:text-gray-scale-white bg-gray-scale-gray-50 hover:bg-branding-success">
          <span>
            <SlHandbag />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
