import Container from "./layout/Container";
import Button from "./common/Button";

const CustomOrders = () => {
  return (
    <section className="py-24 border-t border-[#e8dfd5]">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[5px] text-sm text-[#b59b82] mb-5">
            Personalized Creations
          </p>

          <h2 className="text-5xl leading-tight mb-8">
            Customizations Are Always Welcome ✨
          </h2>

          <div className="space-y-6 text-gray-600 leading-9 text-lg">
            <p>
              Please share a reference picture for custom orders. Every piece is
              handcrafted carefully to match your idea with warmth and
              personality.
            </p>

            <p>
              Kindly place your order at least 3 weeks in advance because every
              clay piece is handmade and naturally takes time to dry and finish
              beautifully.
            </p>
          </div>

          <div className="mt-10 flex justify-center bg-black text-white rounded-2xl hover:cursor-pointer">
            <a
              href="https://wa.me/917845002957"
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white rounded-2xl hover:cursor-pointer"
            >
              <Button className="bg-black text-white rounded-2xl hover:cursor-pointer">
                Order Via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomOrders;
