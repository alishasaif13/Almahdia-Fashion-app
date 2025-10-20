import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 🖼 Import your 16 images
import shop1 from "../assets/images/shop1.webp";
import shop2 from "../assets/images/shop2.webp";
import shop3 from "../assets/images/shop3.webp";
import shop4 from "../assets/images/shop4.webp";
import shop5 from "../assets/images/shop5.webp";
import shop6 from "../assets/images/shop6.webp";
import shop7 from "../assets/images/shop7.webp";
import shop8 from "../assets/images/shop8.webp";
import shop9 from "../assets/images/shop9.webp";
import shop10 from "../assets/images/shop11.webp";
import shop11 from "../assets/images/shop11.webp";
import shop12 from "../assets/images/shop12.webp";
import shop13 from "../assets/images/shop13.webp";
import shop14 from "../assets/images/shop14.webp";
import shop15 from "../assets/images/shop15.webp";
import shop16 from "../assets/images/shop16.webp";

// 🧥 Products Data
const productsData = [
  { id: 1, name: "Coco Winter Unstitched - 1A", price: 8916, oldPrice: 10490, image: shop1, inStock: true, sale: true },
  { id: 2, name: "Coco Winter Unstitched - 2B", price: 8916, oldPrice: 10490, image: shop2, inStock: true, sale: true },
  { id: 3, name: "Coco Winter Unstitched - 3A", price: 9490, image: shop3, inStock: false },
  { id: 4, name: "Coco Winter Unstitched - 4A", price: 10200, image: shop4, inStock: false },
  { id: 5, name: "Coco Winter Unstitched - 5A", price: 8990, oldPrice: 9500, image: shop5, inStock: true, sale: true },
  { id: 6, name: "Coco Winter Unstitched - 6A", price: 9990, image: shop6, inStock: true },
  { id: 7, name: "Coco Winter Unstitched - 7A", price: 10300, image: shop7, inStock: true },
  { id: 8, name: "Coco Winter Unstitched - 8A", price: 8900, image: shop8, inStock: false },
  { id: 9, name: "Coco Winter Unstitched - 9A", price: 9600, image: shop9, inStock: true },
  { id: 10, name: "Coco Winter Unstitched - 10A", price: 9200, oldPrice: 9500, image: shop10, inStock: true, sale: true },
  { id: 11, name: "Coco Winter Unstitched - 11A", price: 8700, image: shop11, inStock: true },
  { id: 12, name: "Coco Winter Unstitched - 12A", price: 8300, image: shop12, inStock: true },
  { id: 13, name: "Coco Winter Unstitched - 13A", price: 8700, image: shop13, inStock: true },
  { id: 14, name: "Coco Winter Unstitched - 14A", price: 9100, image: shop14, inStock: true },
  { id: 15, name: "Coco Winter Unstitched - 15A", price: 8800, image: shop15, inStock: false },
  { id: 16, name: "Coco Winter Unstitched - 16A", price: 8200, image: shop16, inStock: true },
];

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("popularity");

  const itemsPerPage = 12;
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  // Sorting logic
  const sortedProducts = [...productsData].sort((a, b) => {
    if (sortOption === "highToLow") return b.price - a.price;
    if (sortOption === "lowToHigh") return a.price - b.price;
    return 0;
  });

  // Pagination logic
  const start = (currentPage - 1) * itemsPerPage;
  const displayed = sortedProducts.slice(start, start + itemsPerPage);

  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white px-6 md:px-20 py-12">
      {/* Sidebar */}
      <aside className="md:w-1/4 mb-10 md:mb-0 pr-6">
        <h3 className="text-sm font-semibold tracking-wide mb-3 text-gray-600">
          PRODUCT CATEGORIES
        </h3>
        <div className="w-8 h-0.5 bg-amber-700 mb-4"></div>
        <ul className="space-y-2 text-gray-700">
          <li className="hover:text-amber-700 cursor-pointer">Bottoms</li>
          <li className="hover:text-amber-700 cursor-pointer">Premium Prints</li>
          <li className="hover:text-amber-700 cursor-pointer">Shawls</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <p className="text-gray-600 text-sm">
            Showing {start + 1}–{Math.min(start + itemsPerPage, productsData.length)} of {productsData.length} results
          </p>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
          >
            <option value="popularity">Sort by popularity</option>
            <option value="latest">Sort by latest</option>
            <option value="lowToHigh">Sort by price: low to high</option>
            <option value="highToLow">Sort by price: high to low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((p) => (
            <div key={p.id} className="relative group">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-96 object-cover"
              />

              {/* Sale badge */}
              {p.sale && (
                <div className="absolute top-4 left-4 bg-amber-900 text-white text-xs px-3 py-1 rounded-full">
                  Sale!
                </div>
              )}

              {/* Out of stock overlay */}
              {!p.inStock && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                  <span className="text-black font-semibold text-sm tracking-wide">
                    OUT OF STOCK
                  </span>
                </div>
              )}

              {/* Product details */}
              <div className="mt-3 text-center">
                <h4 className="text-sm text-gray-800">{p.name}</h4>
                <div className="text-sm font-semibold">
                  {p.oldPrice && (
                    <span className="line-through text-gray-400 mr-2">
                      Rs{p.oldPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-black">
                    Rs{p.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-2 rounded-full border border-gray-400 hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="p-2 rounded-full border border-gray-400 hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Scroll to footer */}
        <div className="text-center mt-6">
          <button
            onClick={scrollToFooter}
            className="text-amber-700 text-sm underline hover:text-amber-800"
          >
            Go to footer ↓
          </button>
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
