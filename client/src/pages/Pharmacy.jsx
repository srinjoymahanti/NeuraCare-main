import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import pharmacyVideo from "../assets/pharmacy.mp4";

const Pharmacy = () => {
  const phoneNumber = "7384829496";

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        {/* VIDEO SECTION */}
        <div className="relative w-full h-80 md:h-96">
          <video
            src={pharmacyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Video text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              24/7 Pharmacy Services
            </h1>
            <p className="text-lg max-w-xl">
              Trusted medicines • Fast delivery • Emergency support
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 md:p-12 text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Order genuine medicines anytime from our certified pharmacy.
            We ensure quick delivery and verified products for your safety.
          </p>

          {/* CALL BUTTON */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition"
          >
            <FaPhoneAlt />
            Call to Order Medicine
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Available 24/7 • Emergency orders supported
          </p>
        </div>

      </div>
    </div>
  );
};

export default Pharmacy;
