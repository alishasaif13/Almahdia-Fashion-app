// ProductDetail1.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import shop1 from "../assets/images/shop1.webp"; // <-- ensure this path is correct
import ProductSidebar from "./ProductSidebar";

const ProductDetail1 = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    // include image field here
    const cartItem = {
      productName: "Coco Winter Unstitched Collection - 1A",
      price: 8916,
      quantity,
      image: shop1, // <--- important: include image
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
          /
          <Link to="/shop" className="hover:text-amber-700">
            {" "}
            PREMIUM PRINTS
          </Link>{" "}
          /<span className="text-gray-800 font-medium"> Shop 1</span>
        </div>

        {/* Product Image + Info */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="relative">
            <img
              src={shop1}
              alt="Coco Winter Unstitched Collection - 1A"
              className="w-full max-w-md p-0 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-amber-900 text-white text-xs px-3 py-1 rounded-full">
              Sale!
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">
              Coco Winter Unstitched Collection - 1A
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-justify">
              Step into timeless elegance with our{" "}
              <span className="font-semibold">
                Coco Winter Unstitched Collection
              </span>
              , crafted with the finest khaddar fabric for comfort and warmth.
              This 3-piece unstitched suit features intricate digital prints
              inspired by winter florals and earthy tones — perfect for casual
              chic or semi-formal occasions. Pair it with your favorite
              accessories to complete the look.
            </p>

            <p className="text-2xl font-bold text-black mb-4">Rs8,916.00</p>

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

export default ProductDetail1;
