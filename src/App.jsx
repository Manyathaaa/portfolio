import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Work from "./components/Work/Work.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Education from "./components/Education/Education.jsx";
//import Experience from "./components/Experience/Experience.jsx";
import Project from "./components/Project/projects.jsx";

const App = () => {
  const [isBlur, setIsBlur] = useState(false);

  // Handler to trigger blur effect
  const triggerBlur = () => {
    setIsBlur(true);
    setTimeout(() => setIsBlur(false), 600); // 600ms blur duration
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#8245ec] relative overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#8245ec] opacity-80 blur-xl"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute animate-blob1 left-10 top-20 w-56 h-56 bg-[#8245ec]/40 rounded-full blur-3xl" />
        <div className="absolute animate-blob2 right-20 top-1/3 w-40 h-40 bg-[#2c5364]/40 rounded-full blur-2xl" />
        <div className="absolute animate-blob3 left-1/2 bottom-10 w-72 h-72 bg-[#0f2027]/40 rounded-full blur-3xl" />
        <div className="absolute animate-blob4 right-1/4 bottom-1/4 w-32 h-32 bg-[#8245ec]/30 rounded-full blur-2xl" />
      </div>

      {/* Blur transition overlay */}
      {isBlur && (
        <div className="fixed inset-0 z-50 bg-[#232526]/60 backdrop-blur-2xl transition-all duration-500" />
      )}

      {/* Pass triggerBlur to Navbar for section navigation */}
      <Navbar triggerBlur={triggerBlur} />
      <About />
      <Skills />
      <Project />
      <Work />
      {/* <Experience /> */}
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
