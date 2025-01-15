import React from "react";
import GemRing1 from "../assets/gemstone-ring2.jpg";
import Earring1 from "../assets/earrings-2.jpg";
import Necklace1 from "../assets/necklace-1.jpg";
import CoupleRing1 from "../assets/couplering-1.jpg";

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
    button: "ADD TO CART",
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
    button: "ADD TO CART",
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
    button: "ADD TO CART",
  },
  {
    label: "NEW",
    image: {
      src: CoupleRing1,
      alt: "Couple Ring",
    },
    name: "Couple Ring Set",
    price: "Rp. 12.000.000",
    oldPrice: null,
    rating: 5,
    button: "ADD TO CART",
  },
];

const ProductGrid = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center text-gray-700 mb-8">
        <ul className="flex flex-wrap space-x-4 sm:space-x-6">
          <li className="hover:underline cursor-pointer">Rings</li>
          <li className="hover:underline cursor-pointer">Necklace</li>
          <li className="hover:underline cursor-pointer">Earrings</li>
          <li className="hover:underline cursor-pointer">Couple Ring</li>
        </ul>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <button className="hover:underline">Back</button>
          <span>|</span>
          <button className="hover:underline">Next</button>
        </div>
      </nav>

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
            <div className="text-gray-500">
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
