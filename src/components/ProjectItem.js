import React from "react";


function ProjectItem({ name, about, technologies }) {
  const technologies=technologies.map(tech=> <span key={tech}>{tech}</span>);

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <div className="technologies"></div>
      </div>
    </div>
  );
}

export default ProjectItem;
