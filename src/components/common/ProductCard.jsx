import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col">
      {/* IMAGE */}
      <Link
        to={`/product/${product.id}`}
        className="overflow-hidden rounded-[24px] block"
      >
        <img
          src={product.image}
          alt={product.title}
          className="
            w-full
            h-[420px]
            object-cover
            rounded-[24px]
            transition-all
            duration-700
            group-hover:scale-105
          "
        />
      </Link>

      {/* CONTENT */}
      <div className="pt-5 flex flex-col flex-1">
        {/* TITLE + PRICE */}
        <div className="flex justify-between items-start gap-4">
          <Link to={`/product/${product.id}`}>
            <h3
              className="
                text-[34px]
                leading-[1.2]
                hover:text-[#b38b59]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {product.title}
            </h3>
          </Link>

          <p className="text-2xl whitespace-nowrap">₹{product.price}</p>
        </div>

        {/* CATEGORY */}
        <p className="uppercase tracking-[4px] text-sm text-[#b59b82] mt-5 mb-8">
          {product.category}
        </p>

        {/* VIEW DETAILS */}
        <div className="mt-auto pt-2">
          <Link
            to={`/product/${product.id}`}
            className="
hidden sm:inline-block
uppercase
tracking-[3px]
text-xs
border-b
border-black
w-fit
pb-1
hover:text-[#b38b59]
hover:border-[#b38b59]
transition-all
duration-300
"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
