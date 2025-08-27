import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript (Basics)",
    "React (Basics)",
    "Git (Basics)",
  ];

  return (
    <section id="Skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
