import React from "react";
import { Link } from "react-router-dom";
import earring1 from "../assets/earrings-1.jpg";
import earring2 from "../assets/earrings-2.jpg";
import earring3 from "../assets/earrings-3.jpg";
import earring4 from "../assets/earrings-4.jpg";

const earring = [
  {
    label: "",
    image: {
      src: earring1,
      alt: "Earring",
    },
    name: "Simple Earring",
    price: "Rp. 2.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "SALE",
    image: {
      src: earring2,
      alt: "Earring",
    },
    name: "Wave Earring",
    price: "Rp. 3.000.000",
    oldPrice: "Rp. 5.000.000",
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: earring3,
      alt: "Earring",
    },
    name: "Bird Earring",
    price: "Rp. 4.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: earring4,
      alt: "Earring",
    },
    name: "Flower Earring",
    price: "Rp. 4.000.000",
    oldPrice: null,
    rating: 4,
    button: "PRE-ORDER NOW",
  },
];

const catEarring = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-4">
        {/* Title */}
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold">Earrings</h1>

        {/* See All */}
        <Link
          to="/catalog/earring"
          className="text-blue-500 hover:underline text-sm sm:text-base"
        >
          See All
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {earring.map((product, index) => (
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

export default catEarring;
