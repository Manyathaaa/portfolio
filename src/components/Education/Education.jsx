import React from "react";

const Education = () => (
  <section id="education" className="portfolio-section">
    <div className="section-inner">
      <p className="eyebrow">EDUCATION</p>
      <h2 className="section-title">Academic background</h2>
      <article className="education-card">
        <div className="experience-heading">
          <div>
            <h3>Dayananda Sagar College of Engineering</h3>
            <p className="accent-text">B.E. in Computer Science and Engineering (Cyber Security)</p>
          </div>
          <span className="date-pill">2023 — 2027</span>
        </div>
        <div className="education-meta">
          <span>Visvesvaraya Technological University (VTU)</span>
          <span>CGPA: 8.75 / 10</span>
        </div>
      </article>
      <div className="subjects">
        <h3>Core subjects</h3>
        <p>Computer Networks · Network Security · Operating Systems · DBMS · Web Security · Cryptography · Digital Forensics</p>
      </div>
    </div>
  </section>
);

export default Education;
