import { FaCapsules } from "react-icons/fa";
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
  FaEnvelope,
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
  const { token } = useContext(AppContext);

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
      {/* 🔵 TOP BAR */}
      <div className="hidden md:block bg-gradient-to-r from-blue-800 to-green-400 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <FaPhoneAlt size={12} />
              <span>Emergency: {EMERGENCY_NUMBER}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt size={12} />
              <span>Park street, Kolkata 700001</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <GiMedicines size={14} />
            <span>24/7 Pharmacy Services</span>
          </div>
        </div>
      </div>

      {/* 🔵 MAIN NAVBAR */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO - Shrink resistance added */}
        <div
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          onClick={() => navigate("/")}
        >
          <img src={assets.logo} alt="Logo" className="h-10" />
          <span className="text-xl lg:text-2xl font-bold text-blue-800">MediCare</span>
        </div>

        {/* CENTER MENU - Changed gap-10 to gap-4/6 for better fit */}
        <nav className="hidden xl:flex justify-center items-center gap-6 font-medium text-sm lg:text-base">
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
          <NavLink to="/pharmacy" className="flex items-center gap-1 hover:text-blue-600">
            <FaCapsules /> Pharmacy
          </NavLink>
          <NavLink to="/contact" className="flex items-center gap-1 hover:text-blue-600">
            <FaEnvelope /> Contact
          </NavLink>

          {/* 🚑 AMBULANCE - Removed the large margins causing collision */}
          <button
            onClick={handleAmbulanceClick}
            className="flex items-center gap-1 text-red-600 font-semibold hover:text-red-700 px-4 border-l border-r border-gray-200"
          >
            <FaAmbulance /> Ambulance
          </button>
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex justify-end items-center gap-3">
          <a
            href={staffLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 px-3 py-2 rounded-full border text-sm whitespace-nowrap"
          >
            <FaUserMd /> Staff Login <FaExternalLinkAlt className="text-xs" />
          </a>

          {/* {!token && (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm"
            >
              <HiOutlineLogin /> Login
            </button>
          )} */}
          {!token ? (
    <button
      onClick={() => navigate("/login")}
      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm"
    >
      <HiOutlineLogin /> Login
    </button>
  ) : (
    <button
      onClick={() => {
        setToken(""); // Clear token (import setToken from AppContext)
        navigate("/");
      }}
      className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm"
    >
      Logout
    </button>
  )}
        </div>

        {/* MOBILE ICON */}
        <button
          className="xl:hidden"
          onClick={() => setShowMenu(true)}
        >
          <FaBars size={24} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;