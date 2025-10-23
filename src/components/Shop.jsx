import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// 🖼 Import images
import shop1 from "../assets/images/shop1.webp";
import shop2 from "../assets/images/shop2.webp";
import shop3 from "../assets/images/shop3.webp";
import shop4 from "../assets/images/shop4.webp";
import shop5 from "../assets/images/shop5.webp";
import shop6 from "../assets/images/shop6.webp";
import shop7 from "../assets/images/shop7.webp";
import shop8 from "../assets/images/shop8.webp";
import shop9 from "../assets/images/shop9.webp";
import shop10 from "../assets/images/shop1.webp";
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
  const [selectedCategory, setSelectedCategory] = useState("Premium Prints");

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

  // Category handling
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "Bottoms") {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white flex flex-col md:flex-row px-4 sm:px-6 md:px-20 py-10 min-h-screen gap-8">
      {/* Sidebar */}
      <aside
        className="
          w-full md:w-1/4
          md:pr-8
          md:sticky md:top-24
          md:self-start
          md:h-[calc(100vh-6rem)]
          overflow-y-auto
          border-b md:border-b-0 md:border-r border-gray-200
          pb-6 md:pb-0
        "
      >
        <h3 className="text-sm font-semibold tracking-wide mb-3 text-gray-700">
          PRODUCT CATEGORIES
        </h3>
        <div className="w-8 h-0.5 bg-amber-700 mb-4"></div>
        <ul className="space-y-2 text-gray-700">
          {["Bottoms", "Premium Prints", "Shawls"].map((cat) => (
            <li
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`cursor-pointer ${
                selectedCategory === cat
                  ? "text-amber-700 font-semibold"
                  : "hover:text-amber-700"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-amber-700">
            HOME
          </Link>{" "}
          /{" "}
          <span className="text-gray-800 font-medium">
            {selectedCategory.toUpperCase()}
          </span>
        </div>

        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-3 md:gap-0">
          <p className="text-gray-600 text-sm text-center md:text-left">
            Showing {start + 1}–
            {Math.min(start + itemsPerPage, productsData.length)} of{" "}
            {productsData.length} results
          </p>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700 w-full md:w-auto"
          >
            <option value="popularity">Sort by popularity</option>
            <option value="popularity">Sort by Latest</option>
            <option value="lowToHigh">Sort by price: low to high</option>
            <option value="highToLow">Sort by price: high to low</option>
          </select>
        </div>

        {/* Product Grid */}
        {selectedCategory === "Shawls" ? (
          <div className="text-center py-32 text-gray-500">
            No products were found matching your selection.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayed.map((p) => (
              <div key={p.id} className="relative group cursor-pointer">
                <Link to={`/Product${p.id}`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-72 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Sale Badge */}
                {p.sale && (
                  <div className="absolute top-4 left-4 bg-amber-900 text-white text-xs px-3 py-1 rounded-full">
                    Sale!
                  </div>
                )}

                {/* Out of Stock */}
                {!p.inStock && (
                  <div className="absolute inset-0 bg-white/80  h-15 mt-30 flex items-center justify-center">
                    <span className="text-black font-semibold text-sm tracking-wide">
                      OUT OF STOCK
                    </span>
                  </div>
                )}

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
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            disabled={currentPage === 1}
            className={`p-2 rounded-full border border-gray-400 ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full border border-gray-400 ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
