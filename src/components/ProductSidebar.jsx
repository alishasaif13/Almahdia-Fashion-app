import React from "react";
import { Link } from "react-router-dom";
import allProducts from "../data/productsData";

const ProductSidebar = ({ currentId }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide mb-3 text-gray-600">
        PRODUCTS
      </h3>
      <div className="w-8 h-0.5 bg-amber-700 mb-4"></div>
      <div className="space-y-4">
        {allProducts.slice(0, 6).map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className={`flex items-center gap-3 border-b pb-3 ${
              p.id === currentId ? "opacity-60 pointer-events-none" : ""
            }`}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <p className="text-xs text-gray-700">{p.name}</p>
              <p className="text-xs font-semibold text-black">
                Rs{p.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;
