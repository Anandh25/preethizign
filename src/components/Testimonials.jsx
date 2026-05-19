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
    <section className="py-24 border-t border-[#e8dfd5]">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[5px] text-sm text-[#b59b82] mb-5">
            Customer Love
          </p>

          <h2 className="text-5xl leading-tight">
            Handmade Pieces That People Truly Connect With
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-[#e8dfd5] bg-white/40"
            >
              <p className="text-gray-600 leading-8 mb-8">“{item.review}”</p>

              <h3 className="text-2xl">{item.name}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
