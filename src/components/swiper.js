import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dummy product data
const products = [
  { id: 1, label: "HOT", image: "path-to-image1.jpg", name: "Product 1", price: "$229.9", oldPrice: null, rating: 5 },
  { id: 2, label: "SALE", image: "path-to-image2.jpg", name: "Product 2", price: "$199.9", oldPrice: "$239.9", rating: 4 },
  { id: 3, label: "NEW", image: "path-to-image3.jpg", name: "Product 3", price: "$249.9", oldPrice: null, rating: 4 },
  { id: 4, label: "", image: "path-to-image4.jpg", name: "Product 4", price: "$299.9", oldPrice: "$329.9", rating: 5 },
];

const ProductCarousel = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={2} // Number of slides per view (responsive settings below)
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-md p-4 rounded-lg text-center relative">
              {product.label && (
                <span className="absolute top-4 left-4 bg-gray-200 text-gray-700 px-2 py-1 rounded">
                  {product.label}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="text-gray-500">
                {product.oldPrice ? (
                  <div className="text-sm">
                    <span className="text-gray-900 font-bold">{product.price}</span>
                    <span className="line-through ml-2">{product.oldPrice}</span>
                  </div>
                ) : (
                  <span className="text-lg font-bold">{product.price}</span>
                )}
              </div>
              <div className="text-yellow-500 flex justify-center mb-4">
                {"★".repeat(product.rating)}
              </div>
              <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
