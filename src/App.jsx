import React from "react";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About.jsx";
import Work from "../components/Work.jsx";
import Skills from "../components/Skill.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%, transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
