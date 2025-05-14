import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const SearchProductCard = ({ product }) => {
  return (
    <div className="productCards">
      <Link to="" className="grid lg:grid-cols-2 place-items-center">
        <div className="productImage lg:col-span-1">
          <img className="w-full" src={product?.images[0]} alt="" />
        </div>
        <div className="productDetails col-auto">
          <h4 className="text-lg font-normal">{product.title}</h4>
          <p className="text-sm font-normal">${product.price}</p>
          <p className="text-sm flex items-center gap-2">
            <span className="text-amber-400">
              <FaStar />
            </span>
            {product.rating}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SearchProductCard;
