import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaFacebook, FaGithub } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `mt-2 lg:mt-0 lg:mx-4 transition-colors duration-300
     ${
       isActive
         ? "text-green-800 border-b-2 border-yellow-400"
         : "text-green-700 hover:text-green-900"
     }`;

  return (
    <nav className="bg-white text-green-900 z-50 shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Logo & Mobile Button */}
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2">
              <img
                src="/logo.jpeg"
                alt="Deof Farmtech Systems Logo"
                className="h-15 w-15"
              />
              <span className="hidden sm:block text-lg font-bold">
                Deof Farmtech Systems
              </span>
            </NavLink>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-green-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

          {/* Menu */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out
            lg:relative lg:inset-auto lg:translate-x-0 lg:opacity-100 lg:flex lg:items-center lg:w-auto lg:p-0`}
          >
            {/* Links */}
            <div className="flex flex-col lg:flex-row lg:items-center">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/education" className={navLinkClass}>
                Learn
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center mt-6 lg:mt-0 lg:ml-6">
              <a
                href="#"
                className="mx-2 text-green-700 hover:text-yellow-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="mx-2 text-green-700 hover:text-yellow-500 transition-colors"
                aria-label="Github"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
