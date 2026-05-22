import SectionTitle from "./common/SectionTitle";
import CollectionCard from "./common/CollectionCard";

import img1 from "../assets/images/dog-keychain.jpeg";
import img2 from "../assets/images/mini-bunny-desk-buddy.jpeg";
import img3 from "../assets/images/mini-guitar-refrigerator-magnet.jpeg";

import Container from "./layout/Container";

const FeaturedCollections = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 border-t border-[#e8dfd5]"
      id="collections"
    >
      <Container>
        <SectionTitle
          subtitle="Curated Collections"
          title="Handcrafted Pieces Designed For Modern Elegance"
        />

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
            lg:grid-cols-3
            lg:gap-10
            lg:overflow-visible
          "
        >
          <div className="min-w-[78%] sm:min-w-[48%] lg:min-w-0 snap-start">
            <CollectionCard
              image={img1}
              title="Keychains"
              category="Keychains"
            />
          </div>

          <div className="min-w-[78%] sm:min-w-[48%] lg:min-w-0 snap-start">
            <CollectionCard
              image={img2}
              title="Desk Buddies"
              category="Desk Buddies"
            />
          </div>

          <div className="min-w-[78%] sm:min-w-[48%] lg:min-w-0 snap-start">
            <CollectionCard
              image={img3}
              title="Refrigerator Magnets"
              category="Refrigerator Magnets"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCollections;
