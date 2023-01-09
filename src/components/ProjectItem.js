import React from "react";
// import user from "../data/user";

function ProjectItem({ name, about, technologies }) {
  
  const technologyLi = technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ));
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologyLi}</div>
    </div>
  );
}

export default ProjectItem;