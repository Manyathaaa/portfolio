import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 px-6 md:px-20 lg:px-40 text-white"
    >
      <div
        className="max-w-xl w-full relative p-1"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8245ec] via-[#2c5364] to-[#232526] animate-gradient-move blur-md opacity-60"></div>
        {/*blur-md opacity-60 => soft, diffused glow. */}
        <div className="relative bg-[#232526]/80 rounded-2xl shadow-2xl p-8 text-left backdrop-blur-md transition-transform duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(130,69,236,0.4)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8245ec] inline-block relative">
            Manyatha M
            <span className="block h-1 w-16 mt-2 bg-gradient-to-r from-[#8245ec] via-[#2c5364] to-[#8245ec] rounded-full animate-pulse"></span>
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-white/90">
            I’m Manyatha M, a Computer Science and Engineering student
            specializing in Cyber Security at Dayananda Sagar College of
            Engineering. I have a strong passion for full-stack development and
            enjoy building applications that are both scalable and secure. My
            projects, including a Restaurant Management System and an E-commerce
            platform, showcase my ability to design robust authentication
            systems, role-based access, and real-time order management. I’m
            skilled in JavaScript, C, C++, Python, React, Node.js, Express,
            MongoDB, and PostgreSQL, with hands-on experience in developing REST
            APIs and responsive frontends.
          </p>
          <div className="flex justify-start space-x-6 mt-6">
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
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
