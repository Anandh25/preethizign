import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/917845002957"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition duration-300">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
