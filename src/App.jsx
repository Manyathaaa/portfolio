import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Work from "./components/Work/Work.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experience/Experience.jsx";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#8245ec] relative">
      {/* Optional: keep your grid overlay if you want */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%, transparent_100%)]"></div> */}

      <Navbar />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
