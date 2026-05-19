import Container from "../components/layout/Container";

const Privacy = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl mb-12">Privacy Policy</h1>

          <div className="space-y-10 text-[#4d5b73] leading-loose">
            <div>
              <h2 className="text-2xl text-black mb-4">
                Information Collection
              </h2>

              <p>
                We may collect basic customer information such as name, phone
                number, email address, and shipping address for order processing
                and communication purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-4">Data Protection</h2>

              <p>
                Your personal information will never be sold or shared with
                third parties except when required for shipping and order
                fulfillment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-4">Secure Communication</h2>

              <p>
                We take reasonable measures to protect customer information and
                maintain secure communication channels.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Privacy;
