import { useParams } from "react-router-dom";
import { useState } from "react";

import { products } from "../data/products";

import Container from "../components/layout/Container";
import Button from "../components/common/Button";

import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-2xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-[#b59b82] mb-5">
              {product.category}
            </p>

            <h1 className="text-5xl lg:text-7xl leading-tight mb-8">
              {product.title}
            </h1>

            <p className="text-5xl mb-10">₹{product.price}</p>

            <p className="text-lg leading-loose text-[#4d5b73] max-w-xl">
              {product.description}
            </p>

            {/* QUANTITY */}
            <div className="flex items-center gap-5 mt-10">
              <p className="uppercase tracking-[3px] text-sm">Quantity</p>

              <div className="flex items-center border border-[#d8cec3]">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="px-4 py-2 text-xl hover:cursor-pointer"
                >
                  -
                </button>

                <span className="px-6">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-xl hover:cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => addToCart(product, quantity)}
                className="
    bg-black
    text-white
    hover:bg-[#b38b59]
    w-full
    lg:w-auto hover:cursor-pointer
  "
              >
                Add To Cart
              </Button>

              <a
                href={`https://wa.me/917845002957?text=Hi, I want to order ${product.title} (Qty: ${quantity})`}
                target="_blank"
                rel="noreferrer"
                className="w-full lg:w-auto"
              >
                <Button
                  className="
      border
      border-black
      hover:bg-black
      hover:text-white
      w-full hover:cursor-pointer
    "
                >
                  Order Via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
