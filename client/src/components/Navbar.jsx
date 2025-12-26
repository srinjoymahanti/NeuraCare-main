import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUserMd,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAmbulance,
  FaHome,
  FaUserNurse,
  FaInfoCircle,
  FaHandsHelping,
  FaEnvelope
} from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { GiMedicines } from "react-icons/gi";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets.js";

const staffLoginUrl = "https://staff.nauracare.example.com";
const EMERGENCY_NUMBER = "7384829496";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, userData } = useContext(AppContext);

  // 📱 Mobile → Dialer | 💻 Desktop → WhatsApp
  const handleAmbulanceClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${EMERGENCY_NUMBER}`;
    } else {
      window.open(`https://wa.me/91${EMERGENCY_NUMBER}`, "_blank");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* 🔵 TOP EMERGENCY BAR */}
      <div className="hidden md:block bg-gradient-to-r from-blue-800 to-green-400 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <FaPhoneAlt size={12} />
              <span>Emergency: {EMERGENCY_NUMBER}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt size={12} />
              <span>Park street , Kolkata 700001</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <GiMedicines size={14} />
            <span>24/7 Pharmacy Services</span>
          </div>
        </div>
      </div>

      {/* 🔵 MAIN NAVBAR */}
      <div className="container mx-auto px-4 py-3 grid grid-cols-3 items-center">

        {/* LEFT → LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.logo} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold text-blue-800">MediCare</span>
        </div>

        {/* CENTER → MENU + AMBULANCE */}
        <nav className="hidden md:flex justify-center items-center gap-8 font-medium">
          <NavLink to="/" className="flex items-center gap-1 hover:text-blue-600">
            <FaHome /> Home
          </NavLink>
          <NavLink to="/doctors" className="flex items-center gap-1 hover:text-blue-600">
            <FaUserNurse /> Doctors
          </NavLink>
          <NavLink to="/about" className="flex items-center gap-1 hover:text-blue-600">
            <FaInfoCircle /> About
          </NavLink>
          <NavLink to="/services" className="flex items-center gap-1 hover:text-blue-600">
            <FaHandsHelping /> Services
          </NavLink>
          <NavLink to="/contact" className="flex items-center gap-1 hover:text-blue-600">
            <FaEnvelope /> Contact
          </NavLink>

          {/* 🚑 AMBULANCE */}
         {/* 🚑 AMBULANCE */}
<button
  type="button"
  onClick={() => {
    console.log("Ambulance clicked");
    handleAmbulanceClick();
  }}
  className="flex items-center gap-1 text-red-600 font-semibold hover:text-red-700 cursor-pointer pointer-events-auto z-50"
>
  <FaAmbulance />
  Ambulance
</button>

        </nav>

        {/* RIGHT → LOGIN BUTTONS */}
        <div className="hidden md:flex justify-end items-center gap-3">
          <a
            href={staffLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 px-4 py-2 rounded-full border"
          >
            <FaUserMd /> Staff Login <FaExternalLinkAlt className="text-xs" />
          </a>

          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full"
            >
              <HiOutlineLogin /> Login
            </button>
          )}
        </div>

        {/* 📱 MOBILE MENU ICON */}
        <button className="md:hidden text-blue-900 justify-self-end" onClick={() => setShowMenu(true)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* 📱 MOBILE DRAWER */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setShowMenu(false)}>
          <div
            className="bg-white w-72 h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="mb-4" onClick={() => setShowMenu(false)}>
              <FaTimes size={24} />
            </button>

            <div className="flex flex-col gap-4">
              <NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink>
              <NavLink to="/doctors" onClick={() => setShowMenu(false)}>Doctors</NavLink>
              <NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink>
              <NavLink to="/services" onClick={() => setShowMenu(false)}>Services</NavLink>
              <NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink>

              <button
                onClick={handleAmbulanceClick}
                className="text-red-600 font-semibold flex items-center gap-2"
              >
                <FaAmbulance /> Ambulance
              </button>

              <hr />

              <a href={staffLoginUrl} target="_blank" rel="noreferrer">
                Staff Login
              </a>
              <button onClick={() => navigate("/login")}>Login</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
