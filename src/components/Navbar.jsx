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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <>
      {/* ---------- Top Bar ---------- */}
      <div className="w-full bg-[#edeae1] py-2.5 text-sm">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-20 space-y-2 md:space-y-0 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-6">
            <span className="flex items-center space-x-1">
              <MdEmail className="text-black size-5" />
              <span>info@almahdiacollection.com</span>
            </span>
            <span className="flex items-center space-x-1">
              <MdPhone className="text-black size-5" />
              <span>+92 311 1122144</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            <div className="flex items-center text-gray-700 hover:text-black transition cursor-pointer">
              <FaMapMarkerAlt size={16} className="mr-1" />
              <span className="hidden sm:inline">
                Gujranwala, Punjab, Pakistan
              </span>
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
            <a href="#" className="text-gray-700 hover:text-black transition">
              <FaTiktok size={18} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 md:px-20 py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src="/almahdia-logo.png"
              alt="Al Mahdia Collection Logo"
              className="w-40 h-auto object-contain"
            />
          </Link>

          {/* Hamburger Button (mobile) */}
          <button
            className="md:hidden p-2 border border-gray-300 rounded text-gray-700 hover:bg-black hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
            {["/", "/about", "/shop", "/contact"].map((path, i) => {
              const labels = ["HOME", "ABOUT", "SHOP", "CONTACT"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `pb-1 border-b-2 transition duration-300 ${
                      isActive
                        ? "text-black border-black"
                        : "text-gray-700 border-transparent hover:text-black hover:border-black"
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </nav>

          {/* Search + Cart */}
          <div className="hidden md:flex items-center space-x-4 text-gray-800 relative">
            <button className="p-2 rounded border border-black hover:bg-black hover:text-white transition">
              <FaSearch size={16} />
            </button>
            <span className="text-gray-400">|</span>
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

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
            <nav className="flex flex-col space-y-2 py-3 px-6 text-gray-800 font-medium">
              {["/", "/about", "/shop", "/contact"].map((path, i) => {
                const labels = ["HOME", "ABOUT", "SHOP", "CONTACT"];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `py-2 border-b ${
                        isActive
                          ? "text-black border-black"
                          : "text-gray-700 border-transparent hover:text-black"
                      }`
                    }
                  >
                    {labels[i]}
                  </NavLink>
                );
              })}

              <div className="flex items-center justify-start gap-4 mt-3">
                <button className="p-2 border border-black rounded hover:bg-black hover:text-white transition">
                  <FaSearch size={16} />
                </button>
                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="relative p-2 border border-black rounded hover:bg-black hover:text-white transition"
                >
                  <FaShoppingCart size={16} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
