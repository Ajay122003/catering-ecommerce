import React from "react";
import banner from "../assets/Images/Banner.png";

export default function Home() {
  return (
    <div className="pt-16">

      {/* ===== BANNER IMAGE ONLY ===== */}
      {/* ===== RESPONSIVE BANNER IMAGE ===== */}
<section className="w-full h-auto md:h-[80vh]">
  <img
    src={banner}
    alt="Kaveri Catering Banner"
    className="
      w-full
      h-auto
      md:h-full
      object-contain
      md:object-cover
    "
  />
</section>


      {/* ===== SERVICES ===== */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Wedding Catering",
              "Corporate Catering",
              "Birthday & Party Orders",
            ].map((service) => (
              <div
                key={service}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service}
                </h3>
                <p className="text-gray-600">
                  High-quality food prepared by expert chefs,
                  customized to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-16 bg-[#7b1c1c] text-white text-center">
        <h2 className="text-3xl font-bold">
          Make Your Event Memorable With Us
        </h2>
        <p className="mt-4 text-white/90">
          Contact us today for best catering services.
        </p>

        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
}
