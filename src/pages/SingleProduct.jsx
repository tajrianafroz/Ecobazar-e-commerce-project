import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import Breadcrumbs from "./../components/utils/Breadcrumbs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SingleProduct = () => {
  const { name, id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);

  return (
    <>
      <Breadcrumbs url={`/category/${name}`} title={name} />
      <div id="singleProduct" className="container mt-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="imageSlider grid lg:grid-cols-5 gap-3">
            <div className="thumbnail max-w-[100vw] col-span-5 lg:col-span-1">
              <Swiper
                style={{ height: "500px" }}
                direction={"vertical"}
                breakpoints={{
                  640: {
                    direction: "horizontal",
                  },
                }}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {singleProduct?.images.map((thumb) => (
                  <SwiperSlide key={thumb.id} className="p-1">
                    <img
                      className="max-w-[80px] w-full block ms-auto rounded opacity-70"
                      src={thumb}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="thumbnailView lg:col-span-4 max-w-[100vw]">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                  height: "500px",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {singleProduct?.images.map((view) => (
                  <SwiperSlide key={view.id}>
                    <img src={view} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="imageDetails">ttttt</div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
