import { Link } from "react-router-dom";

const CollectionCard = ({ image, title, category }) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category)}`}
      className="group block cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="
            w-full
            aspect-[4/5]
            object-cover
            rounded-xl
            group-hover:scale-105
            transition
            duration-700
          "
        />
      </div>

      <div className="pt-4 sm:pt-6">
        <h3 className="text-2xl sm:text-3xl mb-2">{title}</h3>

        <p className="text-xs sm:text-sm uppercase tracking-[3px] text-gray-500">
          Explore Collection
        </p>
      </div>
    </Link>
  );
};

export default CollectionCard;
