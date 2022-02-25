import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {
  console.log(projects);
  const projectData = projects.map((prjData)=>{
    return <ProjectItem name={prjData.name} about={prjData.about} technologies={prjData.technologies} key={prjData.id}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectData}</div>
    </div>
  );
}

export default ProjectList;
