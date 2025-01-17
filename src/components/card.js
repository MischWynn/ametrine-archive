import React from "react";
import GemRing1 from "../assets/gemstone-ring2.jpg";
import Earring1 from "../assets/earrings-2.jpg";
import Necklace1 from "../assets/necklace-1.jpg";
import CoupleRing1 from "../assets/couplering-1.jpg";
import card1 from "../assets/bar-bracelet.png";
import card2 from "../assets/bar-stern.png";

// Data produk
const products = [
  {
    label: "HOT",
    image: {
      src: GemRing1,
      alt: "Gemstone Ring",
    },
    name: "Green Gemstone Ring",
    price: "Rp. 8.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "SALE",
    image: {
      src: Earring1,
      alt: "Earrings",
    },
    name: "Elegant Earrings",
    price: "Rp. 6.000.000",
    oldPrice: "Rp. 10.000.000",
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: Necklace1,
      alt: "Necklace",
    },
    name: "Golden Necklace",
    price: "Rp. 4.000.000",
    oldPrice: "Rp. 6.000.000",
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "NEW",
    image: {
      src: CoupleRing1,
      alt: "PRE-ORDER NOW",
    },
    name: "Couple Ring Set",
    price: "Rp. 12.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
];

const ProductGrid = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap w-full space-x-4 mb-64">
        {/* Card 1 */}
        <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
          <img
            src={card1}
            alt="Image"
            className="w-full h-auto rounded-t-lg"
          />
        </div>

        {/* Card 2 */}
        <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
          <img
            src={card2}
            alt="Image"
            className="w-full h-auto rounded-t-lg"
          />
        </div>
      </div>

      <div className="mt-24 mb-8">
        {/* Title */}
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold mb-4 text-center">
          Our Product
        </h1>
        <p className="text-base sm:text-lg lg:text-lg mb-8 text-center italic">
          Jewelry Collection by Ametrines
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

export default ProductGrid;
