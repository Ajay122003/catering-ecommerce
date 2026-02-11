import React from "react";
import banner from "../assets/Images/Banner.png";

export default function Home() {
  return (
    <div className="pt-16">

      {/* ===== HERO BANNER ===== */}
      <section className="relative w-full md:h-[85vh] overflow-hidden">
        <img
          src={banner}
          alt="Kaveri Catering Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
       
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-8"
            data-aos="fade-down"
          >
            Our Premium Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Wedding Catering",
                desc: "Traditional & modern menus crafted for your big day.",
              },
              {
                title: "Corporate Catering",
                desc: "Professional catering for meetings & events.",
              },
              {
                title: "Party Orders",
                desc: "Birthdays, anniversaries & celebrations made tasty.",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="
                bg-white p-8 rounded-2xl shadow-md
                hover:shadow-2xl hover:-translate-y-2
                transition duration-300 text-center
              "
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-[#20B58F] text-black text-center">
        <h2
          className="text-4xl font-bold mb-4"
          data-aos="zoom-in"
        >
          Make Your Event Deliciously Memorable
        </h2>

        <p
          className="text-black/90 mb-6"
          data-aos="fade-up"
        >
          Book our catering today and experience quality,
          taste & elegance.
        </p>

        <button
          className="
            bg-yellow-400 text-black px-10 py-4 rounded-full
            font-bold hover:bg-yellow-300 transition
          "
          data-aos="flip-up"
        >
          Contact Us
        </button>
      </section>

    </div>
  );
}
