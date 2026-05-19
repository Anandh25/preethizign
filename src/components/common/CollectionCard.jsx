const CollectionCard = ({ image, title }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[500px] object-cover rounded-xl group-hover:scale-105 transition duration-700"
        />
      </div>

      <div className="pt-6">
        <h3 className="text-3xl mb-2">{title}</h3>

        <p className="text-sm uppercase tracking-[3px] text-gray-500">
          Explore Collection
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
