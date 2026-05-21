import { Link } from "react-router-dom";

import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t border-[#e8dfd5]">
      <Container>
        <div
          className="
            py-6 sm:py-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-y-3 gap-x-5
          "
        >
          {/* LEFT */}
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 Preeth!Zign. Handmade with love ✨
          </p>

          {/* RIGHT */}
          <div
            className="
    flex
    flex-wrap
    justify-center
    items-center
    gap-4
    sm:gap-6
    text-sm
    text-gray-600
    text-center
  "
          >
            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/preethizign"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#b38b59] transition-all duration-300"
            >
              Instagram
            </a>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="hover:text-[#b38b59] transition-all duration-300"
            >
              Contact
            </Link>
            <Link
              to="/shipping"
              className="hover:text-[#b38b59] transition-all duration-300"
            >
              Shipping
            </Link>

            <Link
              to="/returns"
              className="hover:text-[#b38b59] transition-all duration-300"
            >
              Returns
            </Link>

            <Link
              to="/privacy"
              className="hover:text-[#b38b59] transition-all duration-300"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#b38b59] transition-all duration-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
