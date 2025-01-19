import React, { useState } from 'react';
import waves1 from '../assets/earrings-waves.jpg';
import waves2 from '../assets/necklace-4.jpg';
import waves3 from '../assets/rings-3.jpg';

const earringData = [
  {
    label: "HOT",
    image: {
      src: waves1,
      alt: "Waves Earring",
    },
    name: "Waves Earring",
    price: "Rp. 8.000.000",
    oldPrice: "Rp. 10.000.000",
    rating: 5,
    button: "PRE-ORDER NOW",
  },
  {
    label: "SALE",
    image: {
      src: waves2,
      alt: "Waves Necklace",
    },
    name: "Waves Necklace",
    price: "Rp. 6.000.000",
    oldPrice: "Rp. 7.500.000",
    rating: 4,
    button: "PRE-ORDER NOW",
  },
  {
    label: "NEW",
    image: {
      src: waves3,
      alt: "Waves Ring",
    },
    name: "Waves Ring",
    price: "Rp. 5.000.000",
    oldPrice: null,
    rating: 4,
    button: "PRE-ORDER NOW",
  },
];

const CatWaves = () => { // Nama komponen diubah menjadi huruf kapital
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
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold">
          Panthalassa Edition by Ametrine
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {earringData.map((earring, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border rounded-lg text-center relative overflow-hidden p-4"
          >
            {earring.label && (
              <span className="absolute top-3 left-3 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {earring.label}
              </span>
            )}

            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={earring.image.src}
                alt={earring.image.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-sm font-medium mb-2">{earring.name}</h3>

            <div className="text-gray-900 mb-2">
              {earring.oldPrice ? (
                <div className="text-sm">
                  <span className="text-gray-900 font-bold">
                    {earring.price}
                  </span>
                  <span className="line-through text-gray-500 ml-2">
                    {earring.oldPrice}
                  </span>
                </div>
              ) : (
                <span className="text-base font-bold">{earring.price}</span>
              )}
            </div>

            <div className="text-yellow-500 flex justify-center mb-3">
              {"★".repeat(earring.rating)}
              {"☆".repeat(5 - earring.rating)}
            </div>

            {earring.button && (
              <button
                className="px-4 py-2 bg-gray-900 text-sm text-white rounded hover:bg-gray-700"
                onClick={() => handlePreOrderClick(earring)}
              >
                {earring.button}
              </button>
            )}
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold text-center mb-4">
              Pre-Order {selectedProduct.name}
            </h2>
            <form onSubmit={handleSubmitOrder}>
              <label className="block mb-2">
                Name
                <input
                  type="text"
                  name="name"
                  className="block w-full px-4 py-2 border rounded-lg"
                  required
                />
              </label>
              <label className="block mb-2">
                Email
                <input
                  type="email"
                  name="email"
                  className="block w-full px-4 py-2 border rounded-lg"
                  required
                />
              </label>
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 text-sm text-white rounded hover:bg-gray-700 w-full"
              >
                SUBMIT ORDER
              </button>
            </form>
            <button
              className="px-4 py-2 bg-gray-900 text-sm text-white rounded hover:bg-gray-700 w-full mt-4"
              onClick={handleCloseModal}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatWaves;
