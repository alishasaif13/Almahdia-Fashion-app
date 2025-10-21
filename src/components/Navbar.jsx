import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  // Load cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();

    // Listen for updates (even when other components add to cart)
    window.addEventListener("storage", updateCartCount);

    // Custom event for live updates
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <>
      {/* ---------- Top Bar ---------- */}
      <div className="w-full bg-[#edeae1] py-2.5">
        <div className="flex space-x-8 justify-between items-center px-20 mx-8">
          <div>
            <p className="flex items-center space-x-4 text-sm">
              <span className="flex items-center space-x-1">
                <MdEmail className="text-black size-5" />
                <span>info@almahdiacollection.com</span>
              </span>
              <span className="flex items-center space-x-1">
                <MdPhone className="text-black size-5" />
                <span> +92 311 1122144</span>
              </span>
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="flex items-center text-gray-700 hover:text-black transition cursor-pointer">
              <FaMapMarkerAlt size={16} className="mr-1" />
              <span className="text-sm">Gujranwala, Punjab, Pakistan</span>
            </div>

            {/* Social Links */}
            <a
              href="https://www.instagram.com/almahdiacollection?igsh=MXRkcGRmcDdnNHg3aw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/AlMahdiaCollection?mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaTiktok size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <header className="w-full h-20 space-x-8 bg-white px-20 sticky top-0 z-50">
        <div className="flex justify-between items-center px-8 py-3">
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <Link to="/">
              <img
                src="/almahdia-logo.png"
                alt="Al Mahdia Collection Logo"
                className="w-42 h-15 object-contain"
              />
            </Link>

            {/* Navigation Links */}
            <nav className="flex space-x-8 text-gray-800 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition duration-300 ${
                    isActive
                      ? "text-black border-black"
                      : "text-gray-700 border-transparent hover:text-black hover:border-black"
                  }`
                }
              >
                HOME
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition duration-300 ${
                    isActive
                      ? "text-black border-black"
                      : "text-gray-700 border-transparent hover:text-black hover:border-black"
                  }`
                }
              >
                ABOUT
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition duration-300 ${
                    isActive
                      ? "text-black border-black"
                      : "text-gray-700 border-transparent hover:text-black hover:border-black"
                  }`
                }
              >
                SHOP
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition duration-300 ${
                    isActive
                      ? "text-black border-black"
                      : "text-gray-700 border-transparent hover:text-black hover:border-black"
                  }`
                }
              >
                CONTACT
              </NavLink>
            </nav>
          </div>

          {/* Search + Cart Icons */}
          <div className="flex items-center space-x-4 text-gray-800 relative">
            <button className="p-2 rounded border border-black hover:bg-black hover:text-white transition">
              <FaSearch size={16} />
            </button>
            <span className="text-gray-400">|</span>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-2 rounded border border-transparent hover:bg-black hover:text-white transition"
            >
              <FaShoppingCart size={16} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
