import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getSingleProduct } from "../services/firebase/products";

import Container from "../components/layout/Container";
import Button from "../components/common/Button";

import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getSingleProduct(id);

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="p-10">Loading product...</p>;
  }

  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-2xl"
            />

            {/* SOLD OUT BADGE */}
            {!product.inStock && (
              <span
                className="
                  absolute
                  top-5
                  left-5
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  uppercase
                  tracking-wider
                "
              >
                Sold Out
              </span>
            )}
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-[#b59b82] mb-5">
              {product.category}
            </p>

            <h1 className="text-5xl lg:text-7xl leading-tight mb-8">
              {product.title}
            </h1>

            <p className="text-5xl mb-6">₹{product.price}</p>

            {/* AVAILABILITY */}
            <div className="mb-8">
              {product.inStock ? (
                <span
                  className="
                    inline-block
                    bg-green-100
                    text-green-700
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  Available
                </span>
              ) : (
                <span
                  className="
                    inline-block
                    bg-red-100
                    text-red-600
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  Currently Sold Out
                </span>
              )}
            </div>

            <p className="text-lg leading-loose text-[#4d5b73] max-w-xl">
              {product.description}
            </p>

            {/* QUANTITY */}
            {product.inStock && (
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
            )}

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* ADD TO CART */}
              {product.inStock ? (
                <Button
                  onClick={() => addToCart(product, quantity)}
                  className="
                    bg-black
                    text-white
                    hover:bg-[#b38b59]
                    w-full
                    lg:w-auto
                    hover:cursor-pointer
                  "
                >
                  Add To Cart
                </Button>
              ) : (
                <Button
                  disabled
                  className="
                    bg-gray-300
                    text-gray-600
                    cursor-not-allowed
                    w-full
                    lg:w-auto
                  "
                >
                  Sold Out
                </Button>
              )}

              {/* WHATSAPP BUTTON */}
              <a
                href={`https://wa.me/917845002957?text=Hi, I want to enquire about ${product.title}`}
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
                    w-full
                    hover:cursor-pointer
                  "
                >
                  {product.inStock
                    ? "Order Via WhatsApp"
                    : "Check Availability"}
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
