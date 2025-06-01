import React, { useEffect, useState } from "react";
import FeaturedProductCard from "./../utils/FeaturedProductCard";
import ProductsHeading from "./../utils/ProductsHeading";
import { useDispatch } from "react-redux";
import { storeProduct } from "../../slices/productSlice";

const FeaturedProduct = ({ limit = 4 }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=15`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        dispatch(storeProduct(data?.products));
      });
  }, []);

  return (
    <div className="container my-10 lg:my-20">
      <ProductsHeading title="Featured Products" />
      <div className="productCards grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 items-center">
        {products?.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
