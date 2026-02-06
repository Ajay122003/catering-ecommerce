export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Kaveri Catering
          </h3>
          <p className="text-sm">
            Serving delicious food with quality & care for all occasions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h4>
          <p>📞 +91 93421 98948</p>
          <p>📍 Tamil Nadu, India</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Kaveri Catering. All rights reserved.
      </div>
    </footer>
  );
}
