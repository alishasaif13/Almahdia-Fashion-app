import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import shop4 from "../assets/images/shop5.webp"; // ✅ ensure path correct
import ProductSidebar from "./ProductSidebar";

const ProductDetail5 = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Quantity control
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Add to cart and redirect
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
    <div className="w-full bg-white flex flex-col md:flex-row px-6 md:px-20 py-10 min-h-screen">
      <ProductSidebar />

      <main className="flex-1 md:pl-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-amber-700">
            HOME
          </Link>{" "}
          /{" "}
          <Link to="/shop" className="hover:text-amber-700">
            PREMIUM PRINTS
          </Link>{" "}
          /<span className="text-gray-800 font-medium"> Shop 5</span>
        </div>

        {/* Product Image + Info */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="relative">
            <img
              src={shop4}
              alt="Coco Winter Unstitched Collection - 4A"
              className="w-full max-w-md p-0 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-amber-900 text-white text-xs px-3 py-1 rounded-full">
              Sale!
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">
              Coco Winter Unstitched Collection - 4B
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed mb-5 text-justify">
              Elevate your winter wardrobe with our{" "}
              <span className="font-semibold">
                Coco Winter Unstitched Collection - 4B
              </span>
              . Designed with premium embroidered khaddar fabric, this ensemble
              blends traditional craftsmanship with contemporary aesthetics.
              Soft textures, luxurious embroidery, and rich color tones make it
              a perfect choice for elegant daywear and evening gatherings.
            </p>

            <p className="text-2xl font-bold text-black mb-4">Rs12,200.00</p>

            {/* Quantity Controls */}
            <div className="mt-6 flex items-center gap-3">
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
            <div className="mt-6">
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
