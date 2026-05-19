import Container from "../components/layout/Container";
import heroImage from "../assets/images/dog-keychain.jpeg";

import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";

const Home = () => {
  return (
    <section className="py-16 lg:py-24 min-h-[90vh] flex items-center overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <SectionTitle
              subtitle="Handmade Luxury"
              title="Elegant Clay Art Crafted With Love"
            />

            <p className="text-gray-600 text-base md:text-lg leading-8 md:leading-9 max-w-md">
              Premium handmade clay creations designed with elegance, warmth,
              and artistic craftsmanship.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a href="#collections">
                <Button className="bg-black text-white rounded-xl hover:cursor-pointer">
                  Explore Collection
                </Button>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#d8c8b8]"></div>

            <img
              src={heroImage}
              alt="Clay Art"
              className="relative z-10 w-full h-[420px] sm:h-[500px] lg:h-[560px] object-cover rounded-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
