import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-censter py-16 px-6 md:px-20 lg:px-40 text-white"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8">
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">
            Hi, I am Manyatha
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-2 text-[#8245ec]"></h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            I am a <span className="text-[#8245ec]">Fullstack Developer</span>
          </h3>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/80 max-w-lg">
            I’m a full-stack developer and Computer Science student specializing
            in Cyber Security at Dayananda Sagar College of Engineering. I have
            a strong passion for building scalable, secure web applications. My
            projects showcase robust authentication, role-based access, and
            real-time management. Skilled in JavaScript, C, C++, Python, React,
            Node.js, Express, MongoDB, PostgreSQL, and more.
          </p>
          <a
            href="https://drive.google.com/file/d/1wb0zrO-cLinL5z_L8zqAyJSIb1XyYmiJ/view?usp=drivesdk"
            download
            className="inline-block px-8 py-4 rounded-full bg-[#8245ec] text-white font-bold text-lg shadow-lg hover:bg-[#a084e8] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
          >
            DOWNLOAD CV
          </a>
          <div className="flex space-x-6 mt-8">
            <a
              href="https://github.com/Manyathaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8245ec]"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="http://www.linkedin.com/in/manyatha-m"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8245ec]"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 0 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center mt-12 md:mt-0">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#8245ec] via-[#2c5364] to-[#232526] p-2 shadow-2xl flex items-center justify-center">
            <img
              src="/assets/portfolio_image.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_40px_#8245ec]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
