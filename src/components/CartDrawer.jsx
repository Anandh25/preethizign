import { IoClose } from "react-icons/io5";

import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

import { useCart } from "../context/CartContext";

import Button from "./common/Button";

const CartDrawer = ({ isOpen, setIsOpen }) => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const whatsappMessage = cartItems
    .map(
      (item) =>
        `${item.quantity} x ${item.title} - ₹${item.price * item.quantity}`,
    )
    .join("%0A");

  const whatsappLink = `https://wa.me/917845002957?text=Hi, I want to order:%0A%0A${whatsappMessage}%0A%0ATotal Items: ${totalItems}%0ATotal Amount: ₹${totalPrice}%0A%0APlease confirm availability.`;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition duration-500

        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#f8f5f2] z-50 transition-transform duration-500 flex flex-col

        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e8dfd5]">
          <h2 className="text-3xl">Your Cart</h2>

          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <IoClose className="text-3xl" />
          </button>
        </div>

        {/* Empty */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <h3 className="text-3xl mb-4">Your cart is empty</h3>

            <p className="text-gray-500 mb-8 leading-8">
              Add handmade creations to your cart and continue shopping.
            </p>

            <Button
              onClick={() => setIsOpen(false)}
              className="bg-black text-white hover:bg-[#b38b59]"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 border-b border-[#e8dfd5] pb-6"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl mb-2">{item.title}</h3>

                        <p className="text-gray-500">₹{item.price}</p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer"
                      >
                        <FiTrash2 />
                      </button>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4 mt-5">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="border border-[#d8cec3] w-10 h-10 flex items-center justify-center cursor-pointer"
                      >
                        <FiMinus />
                      </button>

                      <span
                        class="w-10
    h-10
    flex
    items-center
    justify-center
    border
    border-[#d8cec3]"
                      >
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="border border-[#d8cec3] w-10 h-10 flex items-center justify-center cursor-pointer"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#e8dfd5] p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl">Items</h3>

                <p className="text-xl">{totalItems}</p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl">Total</h3>

                <p className="text-2xl">₹{totalPrice}</p>
              </div>

              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Button className="w-full bg-[#25D366] text-white hover:opacity-90 cursor-pointer">
                  Order On WhatsApp
                </Button>
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
