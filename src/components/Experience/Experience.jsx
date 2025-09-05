import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-16 px-6 md:px-20 lg:px-40 text-white"
    >
      <div className="max-w-xl w-full relative p-1">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8245ec] via-[#2c5364] to-[#232526] animate-gradient-move blur-md opacity-60"></div>
        <div className="relative bg-[#232526]/80 rounded-2xl shadow-2xl p-8 text-left backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-opacity-100 hover:shadow-[0_0_40px_#8245ec] hover:opacity-90">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8245ec] inline-block relative">
            Experience
            <span className="block h-1 w-16 mt-2 bg-gradient-to-r from-[#8245ec] via-[#2c5364] to-[#8245ec] rounded-full animate-pulse"></span>
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white/90">
              GirlScript Summer of Code
            </h3>
            <p className="text-md text-white/70">Open Source Contributor</p>
            <p className="text-md text-white/80 mt-2">Summer 2025</p>
            <p className="text-md text-white/60 mt-2">
              Contributed to open source projects, collaborated with developers,
              and enhanced skills in teamwork, Git, and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
