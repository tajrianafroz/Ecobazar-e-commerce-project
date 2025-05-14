import React from "react";
import { IoStar } from "react-icons/io5";

const Ratings = ({ count }) => {
    const starCount = Math.round(Number(count));
  const totalStars = 5;

  return (
    <div className="ratings text-xs flex items-center text-gray-scale-gray-200">
      {[...Array(starCount)].map((_, i) => (
        <span key={`filled-${i}`} className="text-branding-warning">
          <IoStar />
        </span>
      ))}
      {[...Array(totalStars - starCount)].map((_, i) => (
        <span key={`empty-${i}`}>
          <IoStar />
        </span>
      ))}
    </div>
  );
};
  

export default Ratings;
