import Container from "../components/layout/Container";
import heroImage from "../assets/images/bouquet-refrigerator-magnet.jpeg";

import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";

const Home = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24 lg:min-h-[90vh] overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <SectionTitle
              subtitle="Handmade Luxury"
              title="Elegant Clay Art Crafted With Love"
            />

            <p className="text-gray-600 text-base md:text-lg text:md leading-8 md:leading-9 max-w-md">
              Premium handmade clay creations designed with elegance, warmth,
              and artistic craftsmanship.
            </p>

            <div className="mt-8 sm:mt-10 flex items-center gap-6">
              <a href="#collections">
                <Button className="bg-black text-white rounded-xl hover:cursor-pointer">
                  Explore Collection
                </Button>
              </a>
            </div>
          </div>

          {/* Desktop Image Only */}
          <div className="relative hidden md:block">
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#d8c8b8]"></div>

            <img
              src={heroImage}
              alt="Clay Art"
              className="relative z-10 w-full h-[420px] lg:h-[500px] object-cover rounded-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
