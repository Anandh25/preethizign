import Container from "../components/layout/Container";

const Returns = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl mb-12">Returns & Refunds</h1>

          <div className="space-y-10 text-[#4d5b73] leading-loose">
            <div>
              <h2 className="text-2xl text-black mb-4">
                No Returns or Exchanges
              </h2>

              <p>
                As every product is handmade and crafted individually, we do not
                accept returns, exchanges, or cancellations once the order has
                been confirmed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-4">Damaged Products</h2>

              <p>
                In case you receive a damaged product, an unboxing video
                recorded from the beginning is mandatory for verification.
                Claims without proper unboxing proof may not be accepted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-4">Contact Support</h2>

              <p>
                For any order-related concerns, feel free to contact us through
                WhatsApp or Instagram.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Returns;
