import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreOrderClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log("Order submitted:", {
      product: selectedProduct,
      name: e.target.name.value,
      email: e.target.email.value,
    });
    handleCloseModal();
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold">Necklaces</h1>
        <Link
          to="/catalog/necklace"
          className="text-blue-500 hover:underline text-sm sm:text-base"
        >
          See All
        </Link>
      </div>
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
              <button
                className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
                onClick={() => handlePreOrderClick(product)}
              >
                {product.button}
              </button>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="mb-4">
              <h3 className="font-medium">{selectedProduct.name}</h3>
              <p className="text-gray-700">{selectedProduct.price}</p>
            </div>
            <form onSubmit={handleSubmitOrder}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full border rounded p-2"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border rounded p-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NecklaceGrid;
