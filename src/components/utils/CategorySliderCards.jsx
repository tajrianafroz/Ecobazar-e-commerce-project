import React from "react";
import { Link } from "react-router-dom";

const CategorySliderCards = ({ title, url }) => {
  return (
    <div className="pt-8 pb-6 max-w-[200px] group hover:text-shadow-category-box text-center border border-[#ededed] hover:border-branding-success-dark rounded-md bg-gray-scale-white">
      <Link to={url}>
        <div className="cardImage">
          <img className="mx-auto" src="/public/images/category_1.png" alt="" />
        </div>
        <div className="cardBody pt-5">
          <h3 className="text-lg pb-[6px] font-medium leading-[150%] text-gray-scale-gray-900 group-hover:text-branding-success-dark">
            {title}
          </h3>
          <p className="text-sm leading-[150%] text-gray-scale-gray-500">
            165 Products
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategorySliderCards;
