import SectionTitle from "./common/SectionTitle";
import CollectionCard from "./common/CollectionCard";

import img1 from "../assets/images/dog-keychain.jpeg";
import img2 from "../assets/images/mini-bunny-desk-buddy.jpeg";
import img3 from "../assets/images/mini-guitar-refrigerator-magnet.jpeg";

import Container from "./layout/Container";

const FeaturedCollections = () => {
  return (
    <section className="py-24 border-t border-[#e8dfd5]" id="collections">
      <Container>
        <SectionTitle
          subtitle="Curated Collections"
          title="Handcrafted Pieces Designed For Modern Elegance"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <CollectionCard image={img1} title="Keychains" category="Keychains" />

          <CollectionCard
            image={img2}
            title="Desk Buddies"
            category="Desk Buddies"
          />

          <CollectionCard
            image={img3}
            title="Refrigerator Magnets"
            category="Refrigerator Magnets"
          />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCollections;
