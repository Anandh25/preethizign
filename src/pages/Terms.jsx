import Container from "../components/layout/Container";

const Terms = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl mb-12">Terms & Conditions</h1>

          <div className="space-y-10 text-[#4d5b73] leading-loose">
            <div>
              <h2 className="text-2xl text-black mb-4">Handmade Products</h2>

              <p>
                All products are handmade and may contain slight variations in
                appearance, color, and texture.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-4">Payment Policy</h2>

              <p>
                We currently accept prepaid orders only. Cash on Delivery (COD)
                is not available.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-4">Custom Orders</h2>

              <p>
                Customized or personalized orders cannot be canceled, returned,
                or exchanged once confirmed.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Terms;
