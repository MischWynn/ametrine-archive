import React, { useState } from "react";
import logo from "../assets/amterine-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-yellow-50 shadow-md hover:bg-yellow-100">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo dan Tombol */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Ametrine Logo" className="h-16 w-auto" />
            <span className="text-xl font-bold text-gray-900">Ametrine Archives</span>
          </a>
        </div>

        {/* Icon Hamburger untuk perangkat kecil */}
        <button
          className="lg:hidden text-gray-800 hover:text-gray-900"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links untuk perangkat besar */}
        <div className="hidden lg:flex lg:items-center space-x-6">
          <a
            href="/catalog/necklace"
            className="text-gray-800 hover:text-gray-900 text-lg font-bold"
          >
            Necklace
          </a>
          <a
            href="/ring"
            className="text-gray-800 hover:text-gray-900 text-lg font-bold"
          >
            Ring
          </a>
          <a
            href="/earring"
            className="text-gray-800 hover:text-gray-900 text-lg font-bold"
          >
            Earring
          </a>
          <a
            href="/couple-ring"
            className="text-gray-800 hover:text-gray-900 text-lg font-bold"
          >
            Couple Ring
          </a>
        </div>
      </div>

      {/* Menu Responsif untuk perangkat kecil */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="space-y-4 px-4 py-2 bg-yellow-50">
          <li>
            <a
              href="/catalog/necklace"
              className="text-gray-800 hover:text-gray-900 text-lg font-bold"
            >
              Necklace
            </a>
          </li>
          <li>
            <a
              href="/catalog/ring"
              className="text-gray-800 hover:text-gray-900 text-lg font-bold"
            >
              Ring
            </a>
          </li>
          <li>
            <a
              href="/earring"
              className="text-gray-800 hover:text-gray-900 text-lg font-bold"
            >
              Earring
            </a>
          </li>
          <li>
            <a
              href="/couple-ring"
              className="text-gray-800 hover:text-gray-900 text-lg font-bold"
            >
              Couple Ring
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
