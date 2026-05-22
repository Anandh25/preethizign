import Container from "./layout/Container";

const testimonials = [
  {
    name: "Anupama",
    review:
      "The detailing and finish were honestly amazing. It felt so personal and beautifully handmade.",
  },

  {
    name: "Priya",
    review:
      "I ordered a custom clay gift for my friend and it turned out even better than the reference picture.",
  },

  {
    name: "Karthik",
    review:
      "The quality, packaging, and overall aesthetic felt premium while still being cute and minimal.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-[#e8dfd5] overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="uppercase tracking-[5px] text-sm text-[#b59b82] mb-5">
            Customer Love
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Handmade Pieces That People Truly Connect With
          </h2>
        </div>

        {/* Infinite Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 w-max animate-scroll">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="
                  w-[320px]
                  sm:w-[420px]
                  p-8
                  rounded-xl
                  border
                  border-[#e8dfd5]
                  bg-white/40
                "
              >
                <p className="text-gray-600 leading-8 mb-8">“{item.review}”</p>

                <h3 className="text-2xl">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
