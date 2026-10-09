import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Project from "./components/Project/projects.jsx";
import Certifications from "./components/Certifications/Certifications.jsx";

const App = () => {
  const [isBlur, setIsBlur] = useState(false);

  // Handler to trigger blur effect
  const triggerBlur = () => {
    setIsBlur(true);
    setTimeout(() => setIsBlur(false), 600); // 600ms blur duration
  };

  return (
    <div className="portfolio-app min-h-screen w-full relative overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 -z-10"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute left-10 top-20 w-56 h-56 bg-[#54d6bb]/10 rounded-full blur-3xl" />
        <div className="absolute right-20 top-1/3 w-40 h-40 bg-[#54d6bb]/10 rounded-full blur-2xl" />
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
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
