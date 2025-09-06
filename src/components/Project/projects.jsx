import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Magica",
    image: "/assets/work_logo/ecommerce.png",
    description:
      "A modern ecommerce platform built with React, Tailwind, and Vite.",
    link: "https://magica.manyathaaa.xyz/",
    code: "https://github.com/Manyathaaa/ecommerce-app",
  },
  {
    title: "Magica (Vercel)",
    image: "/assets/work_logo/ecommerce.png",
    description: "An alternate deployed version of the ecommerce platform.",
    link: "https://e-commerce-sooty-delta-13.vercel.app/",
    code: "https://github.com/Manyathaaa/ecommerce-app",
  },
  {
    title: "LinkedIn Clone",
    image: "/assets/work_logo/linkedIn-clone.png",
    description:
      "A LinkedIn-style networking platform built with React, featuring user authentication, profile management, and dynamic post feeds powered by backend APIs.",
    link: "https://linked-in-clone-green.vercel.app/",
    code: "https://github.com/Manyathaaa/linkedin-clone",
  },
  {
    title: "URBI-FIX – Smart City Citizen Helpdesk",
    image: "/assets/work_logo/urbifix.png",
    description: "A smart city citizen helpdesk application built with React.",
    link: "https://urbi-fix.vercel.app/",
    code: "https://github.com/Manyathaaa/urbifix-app",
  },
  {
    title: "Restaurant Node",
    image: "/assets/work_logo/restaurant_node.png",
    description:
      "A restaurant management application built with Node.js and Express.",
    link: "https://restaurant-node-3w14.onrender.com/",
    code: "https://github.com/Manyathaaa/restaurant-node",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-40 min-h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#8245ec] opacity-90 blur-lg" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-80 rounded-2xl shadow-2xl p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_40px_#8245ec] hover:bg-opacity-100 hover:rotate-1 hover:opacity-95"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-80 h-40 object-cover rounded-xl mb-6 shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-3"
            />
            <h3 className="text-2xl font-bold text-[#8245ec] mb-2 text-center">
              {proj.title}
            </h3>
            <p className="text-lg text-gray-700 mb-4 text-center">
              {proj.description}
            </p>
            <div className="flex gap-4 mb-2">
              {proj.code && (
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 text-white font-semibold shadow-md hover:bg-[#8245ec] hover:scale-105 transition-all duration-300"
                  title="View Codebase on GitHub"
                >
                  <FaGithub className="mr-2" /> Code
                </a>
              )}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-[#8245ec] text-white font-semibold shadow-md hover:bg-[#a084e8] hover:scale-105 transition-all duration-300"
                title="View Deployed Project"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
