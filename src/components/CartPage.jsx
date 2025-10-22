import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

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
  };

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 md:px-16 py-12">
      <div className="max-w-8xl mx-auto bg-white shadow-2xl rounded-2xl p-10 flex flex-col lg:flex-row gap-8 border border-gray-100">
        {/* LEFT: Cart Table */}
        <div className="lg:w-3/4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-amber-700 pb-3">
             Your Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <div className="text-gray-500 text-lg py-20 text-center">
              Your cart is empty.
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm md:text-base border-collapse">
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
                        <td className="p-3 font-medium text-gray-800 flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.productName}
                            className="w-16 h-16 object-cover rounded-lg border"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">
                              {item.productName}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.category || ""}
                            </p>
                          </div>
                        </td>
                        <td className="p-3 text-center text-gray-700">
                          Rs {item.price}
                        </td>
                        <td className="p-3 text-center text-gray-700">
                          {item.quantity}
                        </td>
                        <td className="p-3 text-center text-amber-700 font-semibold">
                          Rs {item.price * item.quantity}
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => handleRemove(index)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium shadow-sm transition"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total */}
              <div className="flex justify-end mt-6">
                <div className="bg-amber-50 border border-amber-200 px-8 py-3 rounded-lg font-semibold text-lg text-amber-800 shadow-md">
                  Grand Total: Rs {grandTotal}
                </div>
              </div>
            </>
          )}
        </div>

        {/* RIGHT: User Info */}
        <div className="lg:w-80 bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-amber-800 border-b-2 border-amber-700 pb-2">
            Enter Your Details
          </h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-sm"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-sm"
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-sm"
            />

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="mt-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md font-medium transition shadow-md"
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
