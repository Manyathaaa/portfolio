import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-16 px-6 md:px-20 lg:px-40 text-white"
    >
      <div className="max-w-xl w-full relative p-1 transition-transform duration-500 hover:scale-105 hover:opacity-90">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8245ec] via-[#2c5364] to-[#232526] animate-gradient-move blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
        <div className="relative bg-[#232526]/80 rounded-2xl shadow-2xl p-8 text-left backdrop-blur-md group hover:bg-[#232526]/90 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8245ec] inline-block relative">
            Education
            <span className="block h-1 w-16 mt-2 bg-gradient-to-r from-[#8245ec] via-[#2c5364] to-[#8245ec] rounded-full animate-pulse"></span>
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white/90">
              Dayananda Sagar College of Engineering
            </h3>
            <p className="text-md text-white/70">Bangalore, India</p>
            <p className="text-md text-white/80 mt-2">
              Bachelor of Engineering, Cyber Security
            </p>
            <p className="text-md text-white/60">Year: 2023 - 2027</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
