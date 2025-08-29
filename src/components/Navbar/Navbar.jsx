import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skill", label: "Skill" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
  ];
  return (
    <nav className="bg-[#050414] w-full">
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Manyatha</span>
          <span className="text-[#8245ec]"> </span>
          <span className="text-white">M</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        <ul className="md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className="">
              <button>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
