import React from "react";

import wedding from "../../assets/Images/logo.jpeg";
import corporate from "../../assets/Images/logo.jpeg";
import birthday from "../../assets/Images/logo.jpeg";
import outdoor from "../../assets/Images/logo.jpeg";
import bulk from "../../assets/Images/logo.jpeg";

export default function Services() {
  const services = [
    {
      title: "Wedding Catering",
      img: wedding,
      desc: "Traditional and modern wedding menus prepared with premium quality ingredients.",
    },
    {
      title: "Corporate Catering",
      img: corporate,
      desc: "Professional catering solutions for meetings, conferences, and corporate events.",
    },
    {
      title: "Birthday & Party Catering",
      img: birthday,
      desc: "Delicious food and customized menus for birthdays and private parties.",
    },
    {
      title: "Outdoor Catering",
      img: outdoor,
      desc: "Live cooking and outdoor catering services for large events and functions.",
    },
    {
      title: "Bulk Orders",
      img: bulk,
      desc: "Affordable and hygienic bulk food orders for schools, offices, and events.",
    },
  ];

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Catering Services
        </h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#20B58F]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
