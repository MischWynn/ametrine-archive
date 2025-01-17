import React from "react";
import Necklace1 from "../assets/necklace-1.jpg";
import Necklace2 from "../assets/necklace-2.jpg";
import Necklace3 from "../assets/necklace-4.jpg";
import Necklace4 from "../assets/necklace-5.jpg";
import Necklace5 from "../assets/necklace-6.png";
import Necklace6 from "../assets/necklace-bird.jpg";
import Necklace7 from "../assets/necklace3.jpg";

const necklaceData = [
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
    rating: null,
    button: "PRE-ORDER NOW",
  },
  {
    label: "HOT",
    image: {
      src: Necklace5,
      alt: "Necklace-Stars-and-Moon-Series",
    },
    name: "Steorra Saturn Necklace",
    price: "Rp. 8.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "NEW",
    image: {
      src: Necklace6,
      alt: "Necklace-bird-faunas",
    },
    name: "Fenix Pearl Necklace",
    price: "Rp. 8.000.000",
    oldPrice: null,
    rating: null,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: Necklace7,
      alt: "Necklace-Stars-and-Moon-Series",
    },
    name: "Himmela Necklace",
    price: "Rp. 8.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
];

const sternData = [
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
    rating: null,
    button: "PRE-ORDER NOW",
  },
  {
    label: "HOT",
    image: {
      src: Necklace5,
      alt: "Necklace-Stars-and-Moon-Series",
    },
    name: "Steorra Saturn Necklace",
    price: "Rp. 8.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
]
const CatalogPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Navigation or Title for Necklace Collection */}
      <nav className="flex flex-wrap justify-start items-center text-gray-700 mb-8">
        <ul className="flex flex-wrap space-x-4 sm:space-x-6">
          <li className="text-lg md:text-2xl font-bold text-left">
            Necklace all Collection by Ametrine
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {necklaceData.map((necklace, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border rounded-lg text-center relative overflow-hidden p-4"
          >
            {/* Label */}
            {necklace.label && (
              <span className="absolute top-3 left-3 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {necklace.label}
              </span>
            )}

            {/* Gambar Produk */}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={necklace.image.src}
                alt={necklace.image.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Produk */}
            <h3 className="text-sm font-medium mb-2">{necklace.name}</h3>

            {/* Harga Produk */}
            <div className="text-gray-900 mb-2">
              {necklace.oldPrice ? (
                <div className="text-sm">
                  <span className="text-gray-900 font-bold">
                    {necklace.price}
                  </span>
                  <span className="line-through text-gray-500 ml-2">
                    {necklace.oldPrice}
                  </span>
                </div>
              ) : (
                <span className="text-base font-bold">{necklace.price}</span>
              )}
            </div>

            {/* Rating Produk */}
            <div className="text-yellow-500 flex justify-center mb-3">
              {"★".repeat(necklace.rating)}
              {"☆".repeat(5 - necklace.rating)}
            </div>

            {/* Tombol Pre-Order */}
            {necklace.button && (
              <button className="px-4 py-2 bg-gray-900 text-sm text-white rounded hover:bg-gray-700">
                {necklace.button}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Navigation or Title for Stern Necklace Collection */}
      <div className="my-8">
      <nav className="flex flex-wrap justify-start items-center text-gray-700 mb-8">
        <ul className="flex flex-wrap space-x-4 sm:space-x-6">
          <li className="text-lg md:text-2xl font-bold text-left">
            Stern Necklace Collection
          </li>
        </ul>
      </nav>

      {/* Second grid for Stern Necklace Collection */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sternData.map((necklace, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border rounded-lg text-center relative overflow-hidden p-4"
          >
            {/* Label */}
            {necklace.label && (
              <span className="absolute top-3 left-3 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {necklace.label}
              </span>
            )}

            {/* Gambar Produk */}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={necklace.image.src}
                alt={necklace.image.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Produk */}
            <h3 className="text-sm font-medium mb-2">{necklace.name}</h3>

            {/* Harga Produk */}
            <div className="text-gray-900 mb-2">
              {necklace.oldPrice ? (
                <div className="text-sm">
                  <span className="text-gray-900 font-bold">
                    {necklace.price}
                  </span>
                  <span className="line-through text-gray-500 ml-2">
                    {necklace.oldPrice}
                  </span>
                </div>
              ) : (
                <span className="text-base font-bold">{necklace.price}</span>
              )}
            </div>

            {/* Rating Produk */}
            <div className="text-yellow-500 flex justify-center mb-3">
              {"★".repeat(necklace.rating)}
              {"☆".repeat(5 - necklace.rating)}
            </div>

            {/* Tombol Pre-Order */}
            {necklace.button && (
              <button className="px-4 py-2 bg-gray-900 text-sm text-white rounded hover:bg-gray-700">
                {necklace.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};


export default CatalogPage;
