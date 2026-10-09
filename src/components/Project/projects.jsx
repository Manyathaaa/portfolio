import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "URBI-FIX – Smart City Citizen Helpdesk",
    stack: "React.js",
    description: "A smart city citizen helpdesk application built with React.",
    github: "https://github.com/Manyathaaa/urbifix-app",
    live: "https://urbi-fix.vercel.app/",
  },
  {
    title: "AuthGuard Scan Shield",
    stack: "React.js · TypeScript · Node.js · Express.js · Supabase",
    description:
      "A web-based API security scanner for Swagger/OpenAPI specifications and Postman collections. Checks rate limits, password policies, brute-force protection, JWT validation, and account lockout behavior, then reports findings with remediation guidance.",
    github: "https://github.com/Manyathaaa",
  },
  {
    title: "Restaurant Management System",
    stack: "Node.js · Express.js · MongoDB · JWT · Next.js",
    description:
      "A full-stack restaurant application with REST APIs for menu management, order processing, and tracking. JWT authentication and role-based access control secure administrative operations.",
    github: "https://github.com/Manyathaaa/restaurant-node",
    live: "https://restaurant-node-3w14.onrender.com/",
  },
  {
    title: "E-Commerce Platform",
    stack: "React.js · Node.js · Express.js · MongoDB · JWT",
    description:
      "A MERN stack shopping experience with product listings, cart, wishlist, and order management. Includes JWT authentication, bcrypt password hashing, and role-based authorization.",
    github: "https://github.com/Manyathaaa/ecommerce-app",
    live: "https://magica.manyathaaa.xyz/",
  },
];

const Projects = () => (
  <section id="project" className="portfolio-section">
    <div className="section-inner">
      <p className="eyebrow">SELECTED WORK</p>
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <span className="project-number">0{index + 1}</span>
            <h3>{project.title}</h3>
            <p className="project-stack">{project.stack}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              {project.live && <a href={project.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live demo</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
