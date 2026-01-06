import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <img
          src={logo}
          alt="MyCompany Logo"
          className="w-20 md:w-28 h-auto object-contain"
        />

        {/* Menu desktop */}
        <ul
          className={`hidden md:flex space-x-8 uppercase tracking-widest text-sm
            ${scrolled ? "text-orange-500" : "text-white"}
          `}
        >
          {["Home", "Portofolio", "Services", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link to={`/${item === "Home" ? "" : item.toLowerCase()}`} className="hover:text-orange-600">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={scrolled ? "text-orange-500" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-orange-500" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-40
            bg-white/95 backdrop-blur-lg
            md:hidden
            flex flex-col items-center justify-center
            space-y-6
            uppercase tracking-widest text-sm text-orange-500
            orientation-landscape:justify-start
            orientation-landscape:pt-20
            overflow-y-auto
          "
        >
          {["Home", "Portofolio", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
