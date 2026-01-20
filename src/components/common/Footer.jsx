import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Logo */}
        <NavLink to="/">
          <img
            src="/logo.jpeg"
            alt="Deof Farmtech Systems"
            className="mx-auto w-32 h-auto"
          />
        </NavLink>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center mt-6 gap-6">
          <NavLink
            to="/"
            className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
          >
            Contact
          </NavLink>
          <NavLink
            to="/learn"
            className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
          >
            Learn
          </NavLink>
        </div>

        {/* Divider */}
        <hr className="my-6 border-green-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-sm text-yellow-400">
          <p>
            © {new Date().getFullYear()} Deof Farmtech Systems. All Rights
            Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 sm:mt-0 text-yellow-400">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-yellow-300 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Github"
              className="hover:text-yellow-300 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-yellow-300 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
