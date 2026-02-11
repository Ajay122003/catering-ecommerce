import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo2.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Services", href: "/service" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/home">
            <img
              src={logo}
              alt="Kaveri Catering Logo"
              className="w-48 h-10 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className="hover:text-[#20B58F] text-black transition text-decoration-none"
                >
                  {link.name}
                </Link>

                {/* underline hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#20B58F] transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-4xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-72
          bg-white p-6 shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <img
              src={logo}
              alt="Logo"
              className="w-40"
            />
            <button
              className="text-3xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          
          

          {/* Links */}
          <ul className="flex flex-col gap-3  text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    block px-4 py-3 rounded-lg
                    hover:bg-[#20B58F]/10 transition
                    text-decoration-none text-black
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="absolute bottom-6 left-6 right-6">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                block text-center py-3 rounded-lg
                bg-[#20B58F] text-white font-semibold
                text-decoration-none
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
