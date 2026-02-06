import React from "react";

import g1 from "../../assets/Images/logo.jpeg";
import g2 from "../../assets/Images/logo.jpeg";
import g3 from "../../assets/Images/logo.jpeg";
import g4 from "../../assets/Images/logo.jpeg";
import g5 from "../../assets/Images/logo.jpeg";
import g6 from "../../assets/Images/logo.jpeg";

export default function Gallery() {
  const galleryItems = [
    { img: g1, title: "Wedding Feast", desc: "Grand traditional wedding catering" },
    { img: g2, title: "Corporate Events", desc: "Professional & hygienic food service" },
    { img: g3, title: "Birthday Parties", desc: "Delicious menus for joyful moments" },
    { img: g4, title: "Outdoor Catering", desc: "Live cooking & outdoor events" },
    { img: g5, title: "Bulk Orders", desc: "Quality food for large gatherings" },
    { img: g6, title: "Special Occasions", desc: "Taste that makes memories" },
  ];

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Heading */}
        <h2
          className="text-3xl font-bold text-center mb-4"
          data-aos="fade-down"
        >
          Our Gallery
        </h2>
        <p
          className="text-center text-gray-600 mb-12"
          data-aos="fade-up"
        >
          A glimpse of our delicious food & memorable events
        </p>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full h-64 object-cover
                  transform group-hover:scale-110
                  transition-transform duration-500
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/60
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-center justify-center
                "
              >
                <div className="text-center px-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
