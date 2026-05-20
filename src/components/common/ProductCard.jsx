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
        className="overflow-hidden rounded-[24px] block relative"
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
              text-xs
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
        <div className="mt-5 mb-8 flex items-center gap-3 flex-wrap">
          <p className="uppercase tracking-[4px] text-sm text-[#b59b82]">
            {product.category}
          </p>

          {/* STOCK STATUS */}
          {product.inStock ? (
            <span
              className="
                text-green-600
                text-xs
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
                text-xs
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
