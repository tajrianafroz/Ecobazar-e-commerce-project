import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductsHeading = ({title, className}) => {
    return (
      <div
        className={`heading pb-5 lg:pb-10 flex items-center justify-between ${className}`}
      >
        <h2
          className={`text-[24px] lg:text-[40px] font-semibold text-gray-scale-gray-900 leading-[120%] ${className}`}
        >
          {title}
        </h2>
        <Link
          to=""
          className="text-sm lg:text-[16px] font-medium text-branding-success leading-[150%] flex items-center gap-3"
        >
          View All
          <span>
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
    );
};

export default ProductsHeading;