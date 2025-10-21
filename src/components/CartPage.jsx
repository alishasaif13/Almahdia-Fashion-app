import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Calculate total
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Your cart is empty!",
        text: "Please add some products before checkout.",
      });
      return;
    }

    Swal.fire({
      title: "Checkout Successful!",
      text: "Thank you for your purchase.",
      icon: "success",
      confirmButtonColor: "#8B4513",
    });

    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="px-10 py-10 min-h-screen bg-white">
      <h2 className="text-2xl font-semibold mb-6">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Price (Rs)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Quantity
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Total (Rs)
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name || item.productName || "Unnamed Product"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Grand Total */}
          <div className="text-right mt-4 font-semibold text-lg">
            Total Amount: Rs {grandTotal}
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="mt-6 bg-amber-800 text-white px-5 py-2 rounded-md hover:bg-amber-900"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
