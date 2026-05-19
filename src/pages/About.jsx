import Container from "../components/layout/Container";

const About = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="uppercase tracking-[4px] text-sm text-[#b59b82] mb-5">
            About ClayAura
          </p>

          <h1 className="text-5xl lg:text-7xl leading-tight mb-10">
            Crafted With Passion & Creativity
          </h1>

          <div className="space-y-8 text-lg leading-loose text-[#4d5b73]">
            <p>
              Hey this is pReEtH!, I’m a software engineer turned passionate
              clay artist, combining creativity with attention to detail to
              create handmade clay collectibles and decor.
            </p>

            <p>
              My journey into clay art began from curiosity and quickly became a
              true passion. I enjoy designing cute, minimal, and glossy handmade
              pieces that feel warm, playful, and personal.
            </p>

            <p>
              Every product is handmade in small batches with care, creativity,
              and love. This brand represents my journey of turning passion into
              purpose — one clay creation at a time.
            </p>

            <div className="pt-10 border-t border-[#e8dfd5]">
              <h2 className="text-3xl mb-6">Custom Orders</h2>

              <div className="space-y-4">
                <p>
                  Customizations are always welcome ✨ Please share a reference
                  picture for custom orders.
                </p>

                <p>
                  Kindly place your order at least 3 weeks in advance, because
                  every clay piece is handmade with care and naturally takes
                  time to dry and finish beautifully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
