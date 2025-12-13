import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled ? "bg-white backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <img
          src={logo}
          alt="MyCompany Logo"
          className={`w-20 md:w-28 h-auto object-contain transition-all duration-300
            ${scrolled ? "brightness-100" : "brightness-100"}
          `}
        />

        {/* Menu desktop */}
        <ul
          className={`hidden md:flex space-x-8
            font-sans font-extralight uppercase tracking-widest text-sm
            transition-colors duration-300
            ${scrolled ? "text-orange-500" : "text-white"}
          `}
        >
          <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link to="/portofolio" className="hover:text-orange-600">Portofolio</Link></li>
          <li><Link to="/services" className="hover:text-orange-600">Services</Link></li>
          <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
        </ul>

        {/* Tombol hamburger */}
        <button
          className="md:hidden focus:outline-none transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={scrolled ? "text-orange-500" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-orange-500" : "text-white"} />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-5 py-6
                         font-sans font-extralight uppercase tracking-widest text-sm text-orange-500">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/portofolio" onClick={() => setIsOpen(false)}>Portofolio</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
