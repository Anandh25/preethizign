import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../components/layout/Container";
import ProductCard from "../components/common/ProductCard";

import { products } from "../data/products";

const categories = ["All", "Keychains", "Desk Buddies", "Refrigerator Magnets"];

const Shop = () => {
  const [searchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromURL || "All",
  );

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ? true : product.category === selectedCategory;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* Heading */}
        <div className="mb-16">
          <p className="uppercase tracking-[5px] text-sm text-[#b59b82] mb-5">
            Shop Collection
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            Explore Handmade Clay Creations
          </h1>
        </div>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search handmade creations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-[#e8dfd5] bg-transparent px-6 py-4 outline-none rounded-full placeholder:text-gray-400"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 border uppercase tracking-[3px] text-sm transition duration-300 rounded-full

              ${
                selectedCategory === category
                  ? "bg-black text-white border-black"
                  : "border-[#e8dfd5] hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Shop;
