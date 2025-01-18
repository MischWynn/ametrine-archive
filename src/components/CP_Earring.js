import React from "react";
import earring1 from "../assets/earrings-1.jpg";
import earring2 from "../assets/earrings-2.jpg";
import earring3 from "../assets/earrings-3.jpg";    
import earring4 from "../assets/earrings-4.jpg";
import earring5 from "../assets/earrings-5.jpg";
import earring6 from "../assets/earrings-6.jpg";
import earring7 from "../assets/earrings-bird.jpg";
import earring8 from "../assets/earrings-flower.jpg";
import earring9 from "../assets/earrings-waves.jpg";

const earringData = [
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
  {
    label: "NEW",
    image: {
      src: earring5,
      alt: "Earring",
    },
    name: "Star Earring",
    price: "Rp. 5.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: earring6,
      alt: "Earring",
    },
    name: "Heart Earring",
    price: "Rp. 5.000.000",
    oldPrice: null,
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: earring7,
      alt: "Earring",
    },
    name: "Butterfly Earring",
    price: "Rp. 6.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "SALE",
    image: {
      src: earring8,
      alt: "Earring",
    },
    name: "Leaf Earring",
    price: "Rp. 6.000.000",
    oldPrice: "Rp. 10.000.000",
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "HOT",
    image: {
      src: earring9,
      alt: "Earring",
    },
    name: "Wave Earring",
    price: "Rp. 8.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
];

const CatalogPageEarring = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Navigation or Title for Earring Collection */}
      <nav className="flex flex-wrap justify-start items-center text-gray-700 mb-8">
        <ul className="flex flex-wrap space-x-4 sm:space-x-6">
          <li className="text-lg md:text-2xl font-bold text-left">
            All Earring Collection by Ametrine
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {earringData.map((earringData, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border rounded-lg text-center relative overflow-hidden p-4"
          >
            {/* Label */}
            {earringData.label && (
              <span className="absolute top-3 left-3 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {earringData.label}
              </span>
            )}

            {/* Gambar Produk */}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={earringData.image.src}
                alt={earringData.image.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Produk */}
            <h3 className="text-sm font-medium mb-2">{earringData.name}</h3>

            {/* Harga Produk */}
            <div className="text-gray-900 mb-2">
              {earringData.oldPrice ? (
                <div className="text-sm">
                  <span className="text-gray-900 font-bold">
                    {earringData.price}
                  </span>
                  <span className="line-through text-gray-500 ml-2">
                    {earringData.oldPrice}
                  </span>
                </div>
              ) : (
                <span className="text-base font-bold">{earringData.price}</span>
              )}
            </div>

            {/* Rating Produk */}
            <div className="text-yellow-500 flex justify-center mb-3">
              {"★".repeat(earringData.rating)}
              {"☆".repeat(5 - earringData.rating)}
            </div>

            {/* Tombol Pre-Order */}
            {earringData.button && (
              <button className="px-4 py-2 bg-gray-900 text-sm text-white rounded hover:bg-gray-700">
                {earringData.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default CatalogPageEarring;
  