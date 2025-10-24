import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import shop4 from "../assets/images/shop5.webp";
import ProductSidebar from "./ProductSidebar";

const ProductDetail5 = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const cartItem = {
      productName: "Coco Winter Unstitched Collection - 4B",
      price: 12200,
      quantity,
      image: shop4,
      category: "Premium Prints",
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    window.dispatchEvent(new Event("cartUpdated"));

    Swal.fire({
      title: "Added to Cart!",
      text: "Redirecting to your cart...",
      icon: "success",
      confirmButtonColor: "#92400e",
      confirmButtonText: "Go to Cart",
    }).then(() => {
      navigate("/cart");
    });
  };

  return (
    <div className="w-full bg-white flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-10 min-h-screen gap-8">
      {/* Sidebar */}
      <div className="w-full lg:w-[280px]">
        <ProductSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-amber-700">
            HOME
          </Link>{" "}
          /{" "}
          <Link to="/shop" className="hover:text-amber-700">
            PREMIUM PRINTS
          </Link>{" "}
          /
          <span className="text-gray-800 font-medium"> Shop 5</span>
        </div>

        {/* Product Image + Info */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Product Image */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={shop4}
              alt="Coco Winter Unstitched Collection - 4B"
              className="w-full max-w-md sm:max-w-lg lg:max-w-none p-0 object-cover rounded-xl shadow-lg mx-auto"
            />
            <div className="absolute top-4 left-4 bg-amber-900 text-white text-xs px-3 py-1 rounded-full">
              Sale!
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-medium mb-2">
              Coco Winter Unstitched Collection - 4B
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-justify text-sm sm:text-base">
              Elevate your winter wardrobe with our{" "}
              <span className="font-semibold">
                Coco Winter Unstitched Collection - 4B
              </span>
              . Designed with premium embroidered khaddar fabric, this ensemble
              blends traditional craftsmanship with contemporary aesthetics.
              Soft textures, luxurious embroidery, and rich color tones make it
              a perfect choice for elegant daywear and evening gatherings.
            </p>

            <p className="text-lg sm:text-2xl font-bold text-black mb-4">
              Rs12,200.00
            </p>

            {/* Quantity Controls */}
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
              <button
                onClick={handleDecrease}
                className="border px-4 py-2 rounded-md"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="border px-4 py-2 rounded-md"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <button
                onClick={handleAddToCart}
                className="bg-amber-800 text-white px-5 py-2 rounded-md hover:bg-amber-900 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail5;
