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
    <section className="py-14 sm:py-20 border-t border-[#e8dfd5]">
      <Container>
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="uppercase tracking-[5px] text-sm text-[#b59b82] mb-5">
            Best Sellers
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Handmade Favorites Crafted With Care
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
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
                <div className="pt-5">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        flex-1
                        leading-snug
                        min-h-[56px] sm:min-h-[72px]
                        transition
                        duration-300
                        group-hover:text-[#b38b59]
                      "
                    >
                      {product.title}
                    </h3>

                    <p className="text-lg whitespace-nowrap">
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
