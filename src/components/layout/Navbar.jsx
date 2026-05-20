import { useState } from "react";

import { Link } from "react-router-dom";

import { HiOutlineShoppingBag } from "react-icons/hi";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";

import Container from "./Container";

import { useCart } from "../../context/CartContext";

import CartDrawer from "../CartDrawer";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  const { cartItems } = useCart();

  return (
    <>
      <header className="border-b border-[#e8dfd5] bg-[#f8f5f2] sticky top-0 z-30">
        <Container>
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/">
              <h1 className="text-4xl lg:text-5xl">Preeth!Zign✨</h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-12 uppercase tracking-[3px] text-sm">
              <Link to="/">Home</Link>

              <Link to="/shop">Shop</Link>

              <Link to="/about">About</Link>

              <Link to="/contact">Contact</Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-5">
              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative cursor-pointer"
              >
                <HiOutlineShoppingBag className="text-3xl" />

                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? (
                  <IoClose className="text-3xl" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-3xl" />
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden border-t border-[#e8dfd5] bg-[#f8f5f2]">
            <nav className="flex flex-col items-center gap-8 py-10 uppercase tracking-[3px] text-sm">
              <Link to="/" onClick={() => setMobileMenu(false)}>
                Home
              </Link>

              <Link to="/shop" onClick={() => setMobileMenu(false)}>
                Shop
              </Link>

              <Link to="/about" onClick={() => setMobileMenu(false)}>
                About
              </Link>

              <Link to="/contact" onClick={() => setMobileMenu(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
    </>
  );
};

export default Navbar;
