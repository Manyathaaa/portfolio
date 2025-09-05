import React from "react";

import { skills } from "../../constants/skills";

const Skills = () => {
  return (
    <section
      id="skill"
      className="flex flex-col items-center justify-center py-16 px-6 md:px-20 lg:px-40 text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#8245ec] inline-block relative">
        Skills
        <span className="block h-1 w-16 mt-2 bg-gradient-to-r from-[#8245ec] via-[#2c5364] to-[#8245ec] rounded-full animate-pulse"></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-4xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center bg-gradient-to-br from-[#232526] via-[#2c5364] to-[#8245ec] rounded-xl shadow-lg p-6 transition-transform duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_10px_40px_rgba(130,69,236,0.4)] hover:bg-gradient-to-tr hover:from-[#8245ec] hover:via-[#2c5364] hover:to-[#232526] cursor-pointer relative overflow-hidden"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-4 drop-shadow-xl group-hover:animate-bounce"
              style={{ filter: "drop-shadow(0 0 8px #8245ec)" }}
            />
            <span className="text-lg font-semibold text-white group-hover:text-[#8245ec] transition-colors duration-300">
              {skill.name}
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white rounded-xl transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
