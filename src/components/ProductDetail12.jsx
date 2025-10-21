import { useState } from "react";
import shop1 from "../assets/images/shop12.webp";
import { Link } from "react-router-dom";
import ProductSidebar from "./ProductSidebar";
import Swal from "sweetalert2";

const ProductDetail12 = () => {
  const [quantity, setQuantity] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Quantity control
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Form change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const cartItem = {
      productName: "Coco Winter Unstitched Collection - 1A",
      price: 8916,
      quantity,
      user: formData,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Sweet popup on success
    Swal.fire({
      title: "Added to Cart!",
      text: "Your item has been added successfully.",
      icon: "success",
      confirmButtonColor: "#92400e",
      confirmButtonText: "OK",
    });

    // Reset
    setFormData({ name: "", email: "", address: "" });
    setShowForm(false);
  };

  return (
    <div className="w-full bg-white flex flex-col md:flex-row px-6 md:px-20 py-10 min-h-screen">
      <ProductSidebar />

      <main className="flex-1 md:pl-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-amber-700">HOME</Link> / 
          <Link to="/shop" className="hover:text-amber-700"> PREMIUM PRINTS</Link> / 
          <span className="text-gray-800 font-medium"> Shop 1</span>
        </div>

        {/* Product Image + Info */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="relative">
            <img
              src={shop1}
              alt="Coco Winter Unstitched Collection - 1A"
              className="w-full max-w-md p-0 object-cover"
            />
            <div className=" absolute top-4 left-4 bg-amber-900 text-white text-xs px-3 py-1 rounded-full">
              Sale!
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">
              Coco Winter Unstitched Collection - 1A
            </h2>
            <p className="text-gray-500 mb-3 line-through">Rs10,490.00</p>
            <p className="text-2xl font-bold text-black mb-4">Rs8,916.00</p>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Dress Color:</strong> Orange
            </p>

            {/* Fabric Details */}
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4 mb-4">
              <li>Embroidered Khaddar Front 1.38 Yards</li>
              <li>Plain Khaddar Back 1.38 Yards</li>
              <li>Embroidered Khaddar Sleeve 1.38 Yards</li>
              <li>Embroidered Pocket 2 Pairs</li>
              <li>Embroidered Border 1 Yard</li>
              <li>Embroidered Stripe 5 Yards</li>
              <li>Double Sided Printed Polyester Shawl 2.7 Yards</li>
              <li>Printed Khaddar Trouser 2.7 Yards</li>
            </ul>

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
                onClick={() => setShowForm(true)}
                className="bg-amber-800 text-white px-5 py-2 rounded-md hover:bg-amber-900 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
            >
              ✖
            </button>

            <h3 className="text-lg font-semibold mb-4 text-amber-800 text-center">
              Enter Your Details
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 mb-3 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 mb-3 rounded-md"
              />
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 mb-3 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-2 rounded-md hover:bg-amber-900 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail12;
