import React, { useEffect, useState } from "react";
import FeaturedProductCard from "./../utils/FeaturedProductCard";
import ProductsHeading from './../utils/ProductsHeading';

const FeaturedProduct = ({limit = 4}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=15`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
      });
  }, []); 

  return (
    <div className="container my-10 lg:my-20">
      <ProductsHeading title="Featured Products" />
      <div className="productCards grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 items-center">
        {products.map((product) => (
          <FeaturedProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
