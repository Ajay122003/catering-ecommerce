import { useState } from "react";
import logo from "../../assets/Images/logo2.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Menu", href: "#" },
    { name: "Services", href: "/service" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <img
            src={logo}
            alt="Kaveri Catering Logo"
            className="w-48 h-10 object-contain"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium items-center ">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#20B58F] text-decoration-none text-black"
                >
                  {link.name}
                </a>
                {/* underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#20B58F] transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center text-gray-800"
            onClick={() => setOpen(true)}
          >
            <i className="bi bi-list text-4xl"></i>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE SIDE NAV ================= */}
      {/* ================= MOBILE SIDE NAV (WHITE STYLE) ================= */}
<div
  className={`fixed inset-0 z-50 ${
    open ? "visible" : "invisible"
  }`}
>
  {/* Overlay */}
  <div
    className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
      open ? "opacity-100" : "opacity-0"
    }`}
    onClick={() => setOpen(false)}
  />

  {/* Drawer */}
  <div
    className={`absolute top-0 left-0 h-full w-72
    bg-white text-gray-800
    p-6 shadow-2xl
    transform transition-transform duration-300 ease-out
    ${open ? "translate-x-0" : "-translate-x-full"}`}
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-10">
      <img
        src={logo}
        alt="Kaveri Catering Logo"
        className="w-32 object-contain"
      />
      <button
        className="text-3xl text-gray-600"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>
    </div>

    {/* Links */}
    <ul className="flex flex-col gap-3 text-lg font-medium  ">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={() => setOpen(false)}
            className="
              block px-4 py-3 rounded-lg
              text-black
              hover:bg-[#20B58F]/10
              transition
               text-decoration-none
            "
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>

    {/* Bottom CTA */}
    <div className="absolute   bottom-6 left-6 right-6">
      <button
        className="
          w-full py-3 rounded-lg
          bg-[#20B58F] text-white
          font-semibold
        "
      >
        Contact Us
      </button>
    </div>
  </div>
</div>

    </>
  );
}
