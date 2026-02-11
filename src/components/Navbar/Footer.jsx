import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Kaveri Catering Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <h3 className="text-2xl font-bold text-white">
              Kaveri Catering
            </h3>
          </div>

          <p className="text-sm leading-relaxed">
            Premium catering services for weddings, corporate events,
            parties & special occasions. Quality food, elegant
            presentation, unforgettable taste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h4>

          <ul className="space-y-3">
            <li>
              <Link to="/home" className=" text-white hover:text-yellow-400 transition text-decoration-none">
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="text-white hover:text-yellow-400 transition text-decoration-none">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-white hover:text-yellow-400 transition text-decoration-none">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-yellow-400 transition text-decoration-none">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h4>

          <p className="mb-2">📞 +91 72006 70939 , 95782 21116</p>
          <p className="mb-2">
            📍 Muthu Nagar Line Stop, Masakkalipalayam,
            Near Sri Vishnu Vidyalaya School,
            Upplipalayam Post, Coimbatore - 641015
          </p>
          <p>✉️ kavericatering65@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-5 text-sm bg-black/40">
        © {new Date().getFullYear()} Kaveri Catering.
        Designed with ❤️ for delicious moments.
      </div>
    </footer>
  );
}

