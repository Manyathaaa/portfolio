import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => (
  <section id="about" className="hero-section">
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="eyebrow">SOFTWARE DEVELOPMENT · CYBER SECURITY</p>
        <h1>Manyatha M</h1>
        <p className="hero-lead">I build secure, dependable web applications.</p>
        <p className="hero-summary">
          Computer Science and Engineering student specializing in Cyber Security at Dayananda Sagar College of Engineering. I work across the stack with JavaScript, TypeScript, React, Node.js, and Express, with a focus on practical security and performance.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="https://drive.google.com/file/d/1K0gi9IbrlgczNdMEJhmbMKRN-qk5nQ59/view?usp=drivesdk" target="_blank" rel="noreferrer">Download CV</a>
        </div>
        <div className="hero-contact">
          <a href="mailto:mailto.manyatha@gmail.com"><FaEnvelope /> mailto.manyatha@gmail.com</a>
          <a href="tel:+919900438032">+91 99004 38032</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Manyathaaa" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/manyatha-m1011" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
      <div className="hero-aside" aria-label="Focus areas">
        <span className="aside-label">CURRENT FOCUS</span>
        <strong>Full-stack development</strong>
        <strong>Application security</strong>
        <strong>Cloud infrastructure</strong>
        <span className="aside-note">B.E. · Cyber Security<br />2023—2027 · VTU</span>
      </div>
    </div>
  </section>
);

export default About;
