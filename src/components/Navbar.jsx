import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu toggle
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-orange-500 to-orange-700 shadow-lg z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
            <img src="/logo.jpg" alt="SHANKH Logo" className="w-14 h-14 rounded-full" />
          </div>
          <span className="text-white text-xl font-bold tracking-wide">SHANKH</span>
        </a>

        {/* Sanskrit Motto */}
        <div className=" text-white font-semibold text-xl">
          धर्मो रक्षति रक्षितः
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
      <li>
        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
      </li>
      <li>
        <Link to="/aboutus" className="hover:text-gray-300 transition">About</Link>
      </li>
      <li>
        <Link to="/programs" className="hover:text-gray-300 transition">Programs</Link>
      </li>
      <li>
        <Link to="#" className="hover:text-gray-300 transition">Gallery</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
      </li>
    </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-3xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-orange-800 py-4 ]">
         <ul className="flex flex-col items-center space-y-4 text-white font-medium text-lg">
      <li>
        <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
      </li>
      <li>
        <Link to="/aboutus" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>
      </li>
      <li>
        <Link to="/programs" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Programs</Link>
      </li>
      <li>
        <Link to="#" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Gallery</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
      </li>
    </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
