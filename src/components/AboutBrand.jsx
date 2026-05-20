import Container from "./layout/Container";

import aboutImage from "../assets/images/dog-keychain.jpeg";

const AboutBrand = () => {
  return (
    <section className="py-24 border-t border-[#e8dfd5]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={aboutImage}
              alt="Clay Artist"
              className="w-full h-[650px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[5px] text-sm text-[#b59b82] mb-5">
              Our Story
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8 max-w-lg">
              Handmade Creations Filled With Warmth & Personality
            </h2>

            <div className="space-y-6 text-gray-600 leading-9 text-lg">
              <p>
                Hey this is Preeth! , I’m a software engineer turned passionate
                clay artist, combining creativity with attention to detail to
                create handmade clay collectibles and decor.
              </p>

              <p>
                My journey into clay art began from curiosity and quickly became
                a true passion. I enjoy designing cute, minimal, and glossy
                handmade pieces that feel warm, playful, and personal.
              </p>

              <p>
                Every product is handmade in small batches with care,
                creativity, and love. This brand represents my journey of
                turning passion into purpose — one clay creation at a time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBrand;
