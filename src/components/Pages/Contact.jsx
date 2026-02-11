import React from "react";

export default function Contact() {
  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Heading */}
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Contact Us
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* ===== LEFT : MAP ===== */}
          <div
            className="w-full h-[350px] md:h-full"
            data-aos="fade-right"
          >
            <iframe
              title="Kaveri Catering Location"
              src="https://www.google.com/maps?q=chennai&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* ===== RIGHT : DETAILS ===== */}
          <div
            className="p-8 md:p-10 flex flex-col justify-center"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold mb-8 text-[#20B58F]">
              Kaveri Catering Services
            </h3>

            {/* Address */}
            <div
              className="mb-6 p-4 rounded-xl bg-gray-50 hover:bg-[#20B58F]/5 transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="font-semibold text-gray-700 mb-1">
                📍 Address
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Muthu Nagar Line Stop, Masakkalipalayam, Near Sri Vishnu Vidyalaya School ,
                Upplipalayam Post, Coimbatore - 641 015
              </p>
            </div>

            {/* Opening Hours */}
            <div
              className="mb-6 p-4 rounded-xl bg-gray-50 hover:bg-[#20B58F]/5 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-semibold text-gray-700 mb-1">
                ⏰ Opening Hours
              </h4>
              <p className="text-gray-600">
                Monday – Sunday<br />
                9:00 AM – 10:00 PM
              </p>
            </div>

            {/* Phone */}
            <div
              className="mb-6 p-4 rounded-xl bg-gray-50 hover:bg-[#20B58F]/5 transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="font-semibold text-gray-700 mb-1">
                📞 Phone
              </h4>
              <p className="text-gray-600">
                +91 72006 70939<br />
                +91 95782 21116
              </p>
            </div>

            {/* Email */}
            <div
              className="p-4 rounded-xl bg-gray-50 hover:bg-[#20B58F]/5 transition"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="font-semibold text-gray-700 mb-1">
                ✉️ Email
              </h4>
              <p className="text-gray-600">
                kavericatering65@gmail.com
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
