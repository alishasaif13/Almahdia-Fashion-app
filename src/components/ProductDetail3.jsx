import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import shop3 from "../assets/images/shop3.webp"; // ✅ make sure path is correct
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
      image: shop3, // ✅ added image
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
          /<span className="text-gray-800 font-medium"> Shop 3</span>
        </div>

        {/* Product Image + Info */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="relative">
            <img
              src={shop3}
              alt="Coco Winter Unstitched Collection - 3A"
              className="w-full max-w-md p-0 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-amber-900 text-white text-xs px-3 py-1 rounded-full">
              Sale!
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">
              Coco Winter Unstitched Collection - 3A
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-5 text-justify">
              Discover luxury and comfort with our{" "}
              <span className="font-semibold">
                Coco Winter Unstitched Collection - 3A
              </span>
              . This elegant khaddar ensemble blends warmth with sophistication,
              featuring delicate embroidery, premium fabric, and rich seasonal
              hues. Perfect for those who appreciate traditional charm with a
              modern twist.
            </p>

            <p className="text-2xl font-bold text-black mb-4">Rs9,490.00</p>

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

export default ProductDetail3;
