import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 pt-12 pb-6">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-8 md:px-20 text-sm">
        {/* About */}
        <div>
          <h3 className="font-semibold uppercase tracking-widest text-gray-900 mb-2">
            About Us
          </h3>
          <div className="w-10 h-[2px] bg-[#a91c1c] mb-4"></div>
          <p className="text-gray-600 text-justify justify-baseline leading-relaxed">
            Al Mahdia Collection is a Pakistani clothing brand that embodies timeless elegance and modern style.
            With a focus on quality craftsmanship and attention to detail, we create garments that empower
            individuals to express their unique sense of fashion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Quick Links
          </h3>
          <div className="w-10 h-[2px] bg-[#a91c1c] mb-4"></div>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Product Categories
          </h3>
          <div className="w-10 h-[2px] bg-[#a91c1c] mb-4"></div>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black cursor-pointer">Shawls</li>
            <li className="hover:text-black cursor-pointer">Premium Prints</li>
            <li className="hover:text-black cursor-pointer">Bottoms</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold uppercase tracking-widest text-gray-900 mb-2">
            Contact Us
          </h3>
          <div className="w-10 h-[2px] bg-[#a91c1c] mb-4"></div>

          <div className="space-y-3 text-gray-700">
            <p className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2 " />
              Gujranwala, Punjab, Pakistan
            </p>
            <p className="flex items-center">
              <MdPhone className="mr-2" /> +92 311 1122144
            </p>
            <p className="flex items-center">
              <MdEmail className="mr-2 " /> info@almahdia.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-gray-700 text-lg">
           <a
    href="https://www.facebook.com/AlMahdiaCollection?mibextid=rS40aB7S9Ucbxw6v"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook className="hover:text-black cursor-pointer" />
  </a>

  <a
    href="https://www.instagram.com/almahdiacollection?igsh=MXRkcGRmcDdnNHg3aw=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="hover:text-black cursor-pointer" />
  </a>

            <FaTiktok className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-200 text-center py-3 text-sm text-gray-600 mt-6 w-full">
       <p>
    Copyright © 2025{" "}
    <span className="font-semibold text-black">Al Mahdia Collection</span>
  </p>
  <p className="mt-2">
    Developed With Love By{" "}
    <a
      href="https://technicmentors.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-gray-800 hover:text-black underline-offset-2 hover:underline transition"
    >
      Technic Mentors
    </a>
  </p>

      </div>
    </footer>
  );
};

export default Footer;
