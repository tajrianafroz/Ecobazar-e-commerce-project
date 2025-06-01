import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import Breadcrumbs from "./../components/utils/Breadcrumbs";
import FeaturedProductCard from "./../components/utils/FeaturedProductCard";

const Categories = () => {
  const { name } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [name]);

  return (
    <div>
      <Breadcrumbs url={`/category/${name}`} title={name} />
      <div className="container my-10 lg:my-20">
        <div className="productCards grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 items-center">
          {products?.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
