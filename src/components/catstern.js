import React from "react";
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

const CatStern = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold">
          Stern Edition by Ametrine
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sternData.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border rounded-lg text-center relative overflow-hidden p-4"
          >
            {/* Label */}
            {product.label && (
              <span className="absolute top-3 left-3 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {product.label}
              </span>
            )}

            {/* Gambar Produk */}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={product.image.src}
                alt={product.image.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Produk */}
            <h3 className="text-sm font-medium mb-2">{product.name}</h3>

            {/* Harga Produk */}
            <div className="text-gray-900 mb-2">
              {product.oldPrice ? (
                <div className="text-sm">
                  <span className="text-gray-900 font-bold">
                    {product.price}
                  </span>
                  <span className="line-through text-gray-500 ml-2">
                    {product.oldPrice}
                  </span>
                </div>
              ) : (
                <span className="text-base font-bold">{product.price}</span>
              )}
            </div>

            {/* Rating Produk */}
            <div className="text-yellow-500 flex justify-center mb-3">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>

            {/* Tombol Pre-Order */}
            <button
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
              onClick={() => handlePreOrderClick(product)}
            >
              {product.button}
            </button>
          </div>
        ))}
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
    </div>
  );
};

export default CatStern;

