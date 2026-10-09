import React from "react";

const Experience = () => (
  <section id="experience" className="portfolio-section">
    <div className="section-inner">
      <p className="eyebrow">EXPERIENCE</p>
      <h2 className="section-title">Building useful, reliable software</h2>
      <article className="experience-card">
        <div className="experience-heading">
          <div>
            <h3>Software Development Intern</h3>
            <p className="accent-text">Orange Essence Technologies (OETech) · Remote · <a href="https://drive.google.com/file/d/1S8EqUiFAjhHqlYCLq_NDJR3vNB-mcPBt/view?usp=drivesdk" target="_blank" rel="noreferrer">View internship certificate ↗</a></p>
          </div>
          <span className="date-pill">Oct 2025 — Apr 2026</span>
        </div>
        <p className="project-stack">Node.js · Express.js · React · MySQL · Redis · Telegram Bot API</p>
        <ul className="resume-bullets">
          <li>Developed Tickible, a Telegram-based ticketing bot supporting 150+ active users and 1K+ daily requests.</li>
          <li>Implemented Redis caching, reducing response latency by 60%, and automated ticket creation, tracking, and resolution workflows.</li>
          <li>Built a full-stack application using Express.js, React, and MySQL, achieving 99.9% uptime.</li>
          <li>Optimized REST APIs and SQL queries, improving backend performance by 40% and reducing server CPU utilization by 30%.</li>
        </ul>
      </article>
    </div>
  </section>
);

export default Experience;
