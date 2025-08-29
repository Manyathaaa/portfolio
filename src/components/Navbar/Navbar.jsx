import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Manyatha</span>
          <span className="text-[#8245ec]"> </span>
          <span className="text-white">M</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
