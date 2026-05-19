import Container from "../components/layout/Container";

const Shipping = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl mb-12">Shipping Policy</h1>

          <div className="space-y-10 text-[#4d5b73] leading-loose">
            <div>
              <h2 className="text-2xl text-black mb-4">Processing Time</h2>

              <p>
                Every clay creation is handmade with care and attention to
                detail. Orders are usually processed within 7–14 working days
                depending on product availability and customization
                requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-4">
                Shipping Across India
              </h2>

              <p>
                We currently ship across India. Delivery timelines may vary
                depending on your location and courier service availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-4">Important Note</h2>

              <p>
                Since all products are handmade, slight variations in color,
                texture, and finishing may occur, making every piece unique and
                special.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shipping;
