import { useState } from "react";

import Container from "../components/layout/Container";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-[#b59b82] mb-5">
              Contact
            </p>

            <h1 className="text-5xl lg:text-7xl leading-tight mb-10">
              Get In Touch
            </h1>

            <p className="text-lg leading-loose text-[#4d5b73] mb-12">
              For custom orders, collaborations, or handmade gift inquiries,
              feel free to connect through WhatsApp or Instagram. Every clay
              creation is handmade with love and care.
            </p>

            <div className="space-y-8 text-lg">
              {/* WHATSAPP */}
              <div>
                <p className="uppercase tracking-[3px] text-sm text-[#b59b82] mb-2">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/917845002957"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#b38b59] transition-all"
                >
                  +91 7845002957
                </a>
              </div>

              {/* INSTAGRAM */}
              <div>
                <p className="uppercase tracking-[3px] text-sm text-[#b59b82] mb-2">
                  Instagram
                </p>

                <a
                  href="https://instagram.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#b38b59] transition-all"
                >
                  @YOUR_USERNAME
                </a>
              </div>

              {/* EMAIL */}
              <div>
                <p className="uppercase tracking-[3px] text-sm text-[#b59b82] mb-2">
                  Mail
                </p>

                <a
                  href="mailto:preethi98287@gmail.com"
                  className="hover:text-[#b38b59] transition-all break-all"
                >
                  preethizign@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-[#e8dfd5] p-6 sm:p-10 rounded-2xl">
            <h2 className="text-3xl mb-8">Custom Order Inquiry</h2>

            <div className="space-y-6">
              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full
                  border
                  border-[#e8dfd5]
                  px-5
                  py-4
                  outline-none
                  bg-transparent
                "
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  border
                  border-[#e8dfd5]
                  px-5
                  py-4
                  outline-none
                  bg-transparent
                "
              />

              {/* MESSAGE */}
              <textarea
                rows="6"
                placeholder="Tell us about your custom order..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
                  w-full
                  border
                  border-[#e8dfd5]
                  px-5
                  py-4
                  outline-none
                  bg-transparent
                  resize-none
                "
              />

              {/* BUTTON */}
              <button
                onClick={() => {
                  if (!name || !email || !message) {
                    alert("Please fill all the fields before submitting.");
                    return;
                  }

                  const whatsappMessage = `Hi Preeth!Zign ✨

I'm interested in a custom order.

Name: ${name}

Email: ${email}

Message:
${message}`;

                  window.open(
                    `https://wa.me/917845002957?text=${encodeURIComponent(
                      whatsappMessage,
                    )}`,
                    "_blank",
                  );
                }}
                className="
                  bg-black
                  text-white
                  px-10
                  py-4
                  uppercase
                  tracking-[3px]
                  text-sm
                  hover:bg-[#b38b59]
                  transition-all
                  duration-300
                  w-full
                  cursor-pointer
                "
              >
                Send Inquiry
              </button>

              {/* NOTE */}
              <div className="mt-6 p-4 border border-[#DC143C] bg-[#fdfaf7] rounded-xl">
                <p className="text-sm leading-7 text-[#4d5b73]">
                  <span className="font-semibold text-black">Note:</span>{" "}
                  Customizations are always welcome ✨ Please share your
                  reference images through WhatsApp or Instagram after
                  submitting your inquiry. Kindly place custom orders at least 3
                  weeks in advance as every clay piece is handmade with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
