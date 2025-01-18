import React from 'react'


const catwaves = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-4">
        {/* Title */}
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold">
          Stern Edition by Ametrine
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {earringData.map((earring, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border rounded-lg text-center relative overflow-hidden p-4"
          >
            {/* Label */}
            {earring.label && (
              <span className="absolute top-3 left-3 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {earring.label}
              </span>
            )}

            {/* Gambar Produk */}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={earring.image.src}
                alt={earring.image.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Produk */}
            <h3 className="text-sm font-medium mb-2">{earring.name}</h3>

            {/* Harga Produk */}
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

            {/* Rating Produk */}
            <div className="text-yellow-500 flex justify-center mb-3">
              {"★".repeat(earring.rating)}
              {"☆".repeat(5 - earring.rating)}
            </div>

            {/* Tombol Pre-Order */}
            {earring.button && (
              <button className="px-4 py-2 bg-gray-900 text-sm text-white rounded hover:bg-gray-700">
                {earring.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default catwaves
