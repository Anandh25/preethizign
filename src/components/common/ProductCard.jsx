import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className={`
        group
        flex
        flex-col
        transition-all
        duration-300

        ${!product.inStock ? "opacity-70" : ""}
      `}
    >
      {/* IMAGE */}
      <Link
        to={`/product/${product.id}`}
        className="overflow-hidden rounded-[20px] block relative"
      >
        <img
          src={product.image}
          alt={product.title}
          className="
            w-full
            aspect-square
            sm:aspect-[4/5]
            object-cover
            rounded-[20px]
            transition-all
            duration-700
            group-hover:scale-105
          "
        />

        {/* SOLD OUT BADGE */}
        {!product.inStock && (
          <span
            className="
              absolute
              top-3
              left-3
              bg-red-500
              text-white
              px-3
              py-1
              rounded-full
              text-[10px]
              uppercase
              tracking-[2px]
              z-10
            "
          >
            Sold Out
          </span>
        )}
      </Link>

      {/* CONTENT */}
      <div className="pt-4 flex flex-col flex-1">
        {/* TITLE + PRICE */}
        <div className="flex flex-col gap-2">
          <Link to={`/product/${product.id}`}>
            <h3
              className="
                text-lg
                sm:text-2xl
                leading-snug
                hover:text-[#b38b59]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {product.title}
            </h3>
          </Link>

          <p className="text-lg sm:text-xl font-medium">₹{product.price}</p>
        </div>

        {/* CATEGORY */}
        <div className="mt-3 mb-5 flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
          <p className="uppercase tracking-[3px] text-[11px] text-[#b59b82]">
            {product.category}
          </p>

          {/* STOCK STATUS */}
          {product.inStock ? (
            <span
              className="
                text-green-600
                text-[10px]
                uppercase
                tracking-[2px]
              "
            >
              Available
            </span>
          ) : (
            <span
              className="
                text-red-500
                text-[10px]
                uppercase
                tracking-[2px]
              "
            >
              Sold Out
            </span>
          )}
        </div>

        {/* VIEW DETAILS */}
        <div className="mt-auto pt-2">
          <Link
            to={`/product/${product.id}`}
            className="
              hidden
              sm:inline-block
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
