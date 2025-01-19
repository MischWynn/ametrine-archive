import { Link } from "react-router-dom";
import React, { useState } from "react";
import Ring1 from "../assets/rings-1.jpg";
import Ring2 from "../assets/rings-2.jpg";
import Ring3 from "../assets/rings-3.jpg";
import Ring4 from "../assets/rings-4.jpg";

const ring = [
  {
    label: "",
    image: {
      src: Ring1,
      alt: "Ring",
    },
    name: "Icy Princess Crystal Ring",
    price: "Rp. 7.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "SALE",
    image: {
      src: Ring2,
      alt: "stern ring collection",
    },
    name: "Stern Blue Ring",
    price: "Rp. 6.000.000",
    oldPrice: "Rp. 10.000.000",
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "",
    image: {
      src: Ring3,
      alt: "Necklace-Stars-and-Moon-Series",
    },
    name: "Wavy Ocean Ring",
    price: "Rp. 4.000.000",
    oldPrice: "Rp. 6.000.000",
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "NEW",
    image: {
      src: Ring4,
      alt: "Necklace-Stars-and-Moon-Series",
    },
    name: "Simple Ring",
    price: "Rp. 3.000.000",
    oldPrice: null,
    rating: 5,
    button: "PRE-ORDER NOW",
  },
];
const RingGrid = () => {
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
        {/* Title */}
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold">Rings</h1>

        {/* See All */}
        <Link
          to="/catalog/ring"
          className="text-blue-500 hover:underline text-sm sm:text-base"
        >
          See All
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ring.map((ring, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg text-center relative overflow-hidden"
          >
            {ring.label && (
              <span className="absolute top-4 left-4 bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {ring.label}
              </span>
            )}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={ring.image.src}
                alt={ring.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{ring.name}</h3>
            <div className="text-gray-900">
              {ring.oldPrice ? (
                <div className="text-sm">
                  <span className="text-gray-900 font-bold">{ring.price}</span>
                  <span className="line-through ml-2">{ring.oldPrice}</span>
                </div>
              ) : (
                <span className="text-lg font-bold">{ring.price}</span>
              )}
            </div>
            <div className="text-yellow-500 flex justify-center mb-4">
              {"★".repeat(ring.rating)}
            </div>
            {ring.button && (
              <button
                onClick={() => handlePreOrderClick(ring)}
                className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
              >
                {ring.button}
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

export default RingGrid;

