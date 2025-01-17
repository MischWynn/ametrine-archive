import React from "react";
import { Link } from "react-router-dom"; // Tambahkan impor ini
import Necklace1 from "../assets/necklace-1.jpg";
import Necklace2 from "../assets/necklace-2.jpg";
import Necklace3 from "../assets/necklace-4.jpg";
import Necklace4 from "../assets/necklace-5.jpg";

const products = [
  {
    label: "",
    image: {
      src: Necklace2,
      alt: "Snow Necklace",
    },
    name: "Winter Snow Necklace",
    price: "Rp. 3.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "SALE",
    image: {
      src: Necklace3,
      alt: "Tide Necklace",
    },
    name: "Wave Blue Necklace",
    price: "Rp. 6.000.000",
    oldPrice: "Rp. 10.000.000",
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: Necklace1,
      alt: "Necklace-Stars-and-Moon-Series",
    },
    name: "Blue Moons Necklace",
    price: "Rp. 4.000.000",
    oldPrice: "Rp. 6.000.000",
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "NEW",
    image: {
      src: Necklace4,
      alt: "Necklace-Stars-and-Moon-Series",
    },
    name: "Steorra Gold Necklace",
    price: "Rp. 8.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
];

const NecklaceGrid = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-4">
        {/* Title */}
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold">
          Necklaces
        </h1>

        {/* See All */}
        <Link
          to="/catalog/necklace"
          className="text-blue-500 hover:underline text-sm sm:text-base"
        >
          See All
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg text-center relative overflow-hidden"
          >
            {product.label && (
              <span className="absolute top-4 left-4 bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {product.label}
              </span>
            )}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={product.image.src}
                alt={product.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="text-gray-900">
              {product.oldPrice ? (
                <div className="text-sm">
                  <span className="text-gray-900 font-bold">
                    {product.price}
                  </span>
                  <span className="line-through ml-2">{product.oldPrice}</span>
                </div>
              ) : (
                <span className="text-lg font-bold">{product.price}</span>
              )}
            </div>
            <div className="text-yellow-500 flex justify-center mb-4">
              {"★".repeat(product.rating)}
            </div>
            {product.button && (
              <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
                {product.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NecklaceGrid;
