import React from 'react';
import Necklace1 from "../assets/necklace-1.jpg";
import Necklace4 from "../assets/necklace-5.jpg";
import Necklace5 from "../assets/necklace-6.png";
import earring1 from "../assets/earrings-1.jpg";
import ring from "../assets/rings-2.jpg";

const sternData = [
  {
    label: "",
    image: {
      src: Necklace1,
      alt: "Simple Earring",
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
      src: Necklace4,
      alt: "Wave Earring",
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
      src: Necklace5,
      alt: "Bird Earring",
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
      src: earring1,
      alt: "Flower Earring",
    },
    name: "Flower Earring",
    price: "Rp. 4.000.000",
    oldPrice: null,
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: ring,
      alt: "Flower Earring",
    },
    name: "Flower Earring",
    price: "Rp. 4.000.000",
    oldPrice: null,
    rating: 4,
    button: "PRE-ORDER NOW",
  },
];

const CatEarring = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex justify-between items-center mb-4">
      {/* Title */}
      <h1 className="text-xl sm:text-xl lg:text-3xl font-bold">
        Stern Edition by Ametrine
      </h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sternData.map((sternData, index) => (
        <div
          key={index}
          className="bg-white shadow-lg border rounded-lg text-center relative overflow-hidden p-4"
        >
          {/* Label */}
          {sternData.label && (
            <span className="absolute top-3 left-3 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
              {sternData.label}
            </span>
          )}

          {/* Gambar Produk */}
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
            <img
              src={sternData.image.src}
              alt={sternData.image.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nama Produk */}
          <h3 className="text-sm font-medium mb-2">{sternData.name}</h3>

          {/* Harga Produk */}
          <div className="text-gray-900 mb-2">
            {sternData.oldPrice ? (
              <div className="text-sm">
                <span className="text-gray-900 font-bold">
                  {sternData.price}
                </span>
                <span className="line-through text-gray-500 ml-2">
                  {sternData.oldPrice}
                </span>
              </div>
            ) : (
              <span className="text-base font-bold">{sternData.price}</span>
            )}
          </div>

          {/* Rating Produk */}
          <div className="text-yellow-500 flex justify-center mb-3">
            {"★".repeat(sternData.rating)}
            {"☆".repeat(5 - sternData.rating)}
          </div>

          {/* Tombol Pre-Order */}
          {sternData.button && (
            <button className="px-4 py-2 bg-gray-900 text-sm text-white rounded hover:bg-gray-700">
              {sternData.button}
            </button>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default CatEarring;
