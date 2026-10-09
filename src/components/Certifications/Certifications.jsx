import React from "react";

const certifications = [
  { name: "Foundations of Cybersecurity", url: "https://coursera.org/verify/BFG6J9FNGXY7" },
  { name: "Play It Safe", url: "https://coursera.org/verify/FUBQMPW3X3HK" },
  { name: "Networks and Network Security", url: "https://coursera.org/verify/DYGBDBSREZTH" },
  { name: "Tools of Trade: Linux and SQL", url: "https://coursera.org/verify/GHEQVYRZVU85" },
  { name: "Assets, Threats, and Vulnerabilities", url: "https://coursera.org/verify/ARNNYR2XYXP3" },
  { name: "Detection and Response", url: "https://coursera.org/verify/1XMVCIJHY99K" },
];

const Certifications = () => (
  <section id="certifications" className="portfolio-section">
    <div className="section-inner">
      <p className="eyebrow">CONTINUOUS LEARNING</p>
      <h2 className="section-title">Certifications</h2>
      <ul className="cert-list">{certifications.map(({ name, url }) => (
        <li key={name}>
          <span>{name}</span>
          <a href={url} target="_blank" rel="noreferrer">View certificate ↗</a>
        </li>
      ))}</ul>
    </div>
  </section>
);

export default Certifications;
