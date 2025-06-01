import React from "react";
import Banner from "./../components/banner/Banner";
import FeaturedProduct from "./../components/features/FeaturedProduct";
import CustomerServiceBox from "./../components/utils/CustomerServiceBox";
import CategorySlider from "./../components/category/CategorySlider";

const Homepage = () => {
  return (
    <>
      <Banner />
      <CustomerServiceBox />
      <FeaturedProduct />
      <CategorySlider />
    </>
  );
};

export default Homepage;
