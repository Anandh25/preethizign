import { useState } from "react";

const faqData = [
  {
    question: "How long will custom orders take?",
    answer: "Usually 2–3 weeks depending on the complexity and drying process.",
  },
  {
    question: "Can I request personalized designs?",
    answer:
      "Yes ✨ Customizations are always welcome for all handmade creations.",
  },
  {
    question: "Do you ship across India?",
    answer: "Yes, we provide shipping across India.",
  },
  {
    question: "Are all products handmade?",
    answer:
      "Yes, every clay creation is handcrafted carefully with love and detail.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 border-t border-[#e8dfd5]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="uppercase tracking-[4px] text-sm text-[#b59b82] mb-5 text-center">
          FAQ
        </p>

        <h2 className="text-4xl sm:text-5xl text-center mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-[#e8dfd5] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer hover:bg-[#fdfaf7] transition-all duration-300"
              >
                <span className="text-lg">{faq.question}</span>

                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-[#4d5b73] leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
