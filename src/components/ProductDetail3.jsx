import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import shop3 from "../assets/images/shop3.webp";
import ProductSidebar from "./ProductSidebar";

const ProductDetail3 = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Quantity Controls
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Add to Cart
  const handleAddToCart = () => {
    const cartItem = {
      productName: "Coco Winter Unstitched Collection - 3A",
      price: 9490,
      quantity,
      image: shop3,
      category: "Premium Prints",
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // 🔹 Notify Navbar to update cart count
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
    <div className="w-full bg-white flex flex-col md:flex-row px-4 sm:px-6 md:px-12 lg:px-20 py-10 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 mb-10 md:mb-0">
        <ProductSidebar />
      </div>

      {/* Main Product Detail */}
      <main className="flex-1 md:pl-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-1">
          <Link to="/" className="hover:text-amber-700">
            HOME
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-amber-700">
            PREMIUM PRINTS
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Shop 3</span>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={shop3}
              alt="Coco Winter Unstitched Collection - 3A"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-amber-900 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
              Sale!
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1 w-full">
            <h2 className="text-xl sm:text-2xl font-medium mb-2 leading-snug">
              Coco Winter Unstitched Collection - 3A
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-justify text-sm sm:text-base">
              Discover luxury and comfort with our{" "}
              <span className="font-semibold">
                Coco Winter Unstitched Collection - 3A
              </span>
              . This elegant khaddar ensemble blends warmth with sophistication,
              featuring delicate embroidery, premium fabric, and rich seasonal
              hues. Perfect for those who appreciate traditional charm with a
              modern twist.
            </p>

            <p className="text-lg sm:text-2xl font-bold text-black mb-4">
              Rs9,490.00
            </p>

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleDecrease}
                className="border px-4 py-2 rounded-md text-lg hover:bg-gray-100 transition"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="border px-4 py-2 rounded-md text-lg hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className="bg-amber-800 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-amber-900 transition w-full sm:w-auto"
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

export default ProductDetail3;
