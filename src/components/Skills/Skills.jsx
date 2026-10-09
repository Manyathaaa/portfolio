import React from "react";

const groups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "C", "C++"] },
  { title: "Frameworks", items: ["Node.js", "Express.js", "React.js", "Next.js"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "Supabase", "Redis"] },
  { title: "Cybersecurity", items: ["Wireshark", "Burp Suite", "Nmap", "Kali Linux", "JWT", "Password Hashing", "API Security"] },
  { title: "Developer tools", items: ["Git", "GitHub", "Postman", "Docker"] },
  { title: "Cloud & AWS", items: ["VPC", "EC2", "S3", "IAM", "Lambda", "CloudFormation", "RDS", "Boto3"] },
];

const Skills = () => (
  <section id="skill" className="portfolio-section skills-section">
    <div className="section-inner">
      <p className="eyebrow">TOOLKIT</p>
      <h2 className="section-title">Technical skills</h2>
      <div className="skill-grid">
        {groups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
