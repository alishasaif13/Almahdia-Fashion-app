import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa"; // ✅ Added delete icon

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCartStorage(updatedCart);

    Swal.fire({
      icon: "success",
      title: "Removed!",
      text: "Product removed from cart.",
      confirmButtonColor: "#92400e",
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!user.name || !user.email || !user.phone) {
      Swal.fire({
        icon: "error",
        title: "Missing Info",
        text: "Please fill in all details before placing the order.",
        confirmButtonColor: "#92400e",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: `Thank you, ${user.name}! Your order is confirmed.`,
      confirmButtonColor: "#92400e",
    });

    localStorage.removeItem("cart");
    setCart([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 border border-gray-100">
        {/* LEFT: Cart Table */}
        <div className="lg:w-3/4 w-full overflow-x-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-b-4 border-amber-700 pb-3">
            Your Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <div className="text-gray-500 text-base sm:text-lg py-16 sm:py-20 text-center">
              Your cart is empty.
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
               <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
  <table className="w-full min-w-[600px] text-xs sm:text-sm md:text-base border-collapse">
    <thead className="bg-amber-100 text-gray-700 uppercase tracking-wide">
      <tr>
        <th className="p-3 text-left">Product</th>
        <th className="p-3 text-center">Price</th>
        <th className="p-3 text-center">Qty</th>
        <th className="p-3 text-center">Total</th>
        <th className="p-3 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item, index) => (
        <tr
          key={index}
          className="border-b hover:bg-amber-50 transition duration-200"
        >
          {/* PRODUCT COLUMN */}
          <td className="p-3 font-medium text-gray-800 flex items-center gap-3 sm:gap-4 min-w-[200px]">
            <img
              src={item.image}
              alt={item.productName}
              className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-lg border"
            />
            <div className="truncate">
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                {item.productName}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                {item.category || ""}
              </p>
            </div>
          </td>

          {/* PRICE */}
          <td className="p-3 text-center text-gray-700 whitespace-nowrap">
            Rs {item.price}
          </td>

          {/* QUANTITY */}
          <td className="p-3 text-center text-gray-700 whitespace-nowrap">
            {item.quantity}
          </td>

          {/* TOTAL */}
          <td className="p-3 text-center text-amber-700 font-semibold whitespace-nowrap">
            Rs {item.price * item.quantity}
          </td>

          {/* ACTION (Trash Icon) */}
          <td className="p-3 text-center whitespace-nowrap">
            <button
              onClick={() => handleRemove(index)}
              className="text-red-600 hover:text-red-700 p-2 rounded-full transition"
              title="Remove Item"
            >
              <FaTrash size={18} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

              </div>

              {/* Total */}
              <div className="flex justify-end mt-6">
                <div className="bg-amber-50 border border-amber-200 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg text-amber-800 shadow-md">
                  Grand Total: Rs {grandTotal}
                </div>
              </div>
            </>
          )}
        </div>

        {/* RIGHT: User Info */}
        <div className="lg:w-80 w-full bg-gray-50 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-amber-800 border-b-2 border-amber-700 pb-2">
            Enter Your Details
          </h3>

          <form className="flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-sm text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-sm text-sm sm:text-base"
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-sm text-sm sm:text-base"
            />

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="mt-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md font-medium text-sm sm:text-base transition shadow-md"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
