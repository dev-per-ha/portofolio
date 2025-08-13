import { useState } from "react";
import { Link } from "react-scroll"; // for smooth scroll

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-accent">Dawit</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.to} className="hover:text-accent transition">
              <Link to={link.to} smooth={true} duration={500}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.to} className="hover:text-accent transition">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
