import Container from "./layout/Container";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { getProducts } from "../services/firebase/products";

const ProductsShowcase = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();

      setProducts(data.slice(0, 4));
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 sm:py-20 border-t border-[#e8dfd5]">
      <Container>
        {/* Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="uppercase tracking-[5px] text-sm text-[#b59b82] mb-5">
            Best Sellers
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Handmade Favorites Crafted With Care
          </h2>
        </div>

        {/* MOBILE SCROLL / DESKTOP GRID */}
        <div
          className="
            flex
            gap-5
            overflow-x-auto
            snap-x
            snap-mandatory
            pb-2
            scrollbar-hide

            lg:grid
            lg:grid-cols-4
            lg:gap-8
            lg:overflow-visible
          "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group min-w-[78%] sm:min-w-[45%] lg:min-w-0 snap-start"
            >
              <Link to={`/product/${product.id}`}>
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
                      w-full
                      aspect-[4/5]
                      object-cover
                      rounded-2xl
                      group-hover:scale-105
                      transition
                      duration-700
                      cursor-pointer
                    "
                  />
                </div>

                {/* Content */}
                <div className="pt-4 sm:pt-5">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3
                      className="
                        text-lg
                        sm:text-2xl
                        flex-1
                        leading-snug
                        transition
                        duration-300
                        group-hover:text-[#b38b59]
                      "
                    >
                      {product.title}
                    </h3>

                    <p className="text-base sm:text-lg whitespace-nowrap">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsShowcase;
