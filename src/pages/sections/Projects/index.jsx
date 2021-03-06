import React from 'react';
import projects from './../../../data/projects'
import ProjectPreview from './../../../components/ProjectPreview'

const Projects = () => {
  return (
    <section className="mt-3">
      <h2 className="font-bold text-3xl m-1">PROJECTS</h2>
      <div className="divider m-auto w-64 h-1 mb-3"></div>
      <div className="section-div">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-3">
          {projects.map((project, index) => <ProjectPreview project={project} key={`project-${index}`}/>)}
        </div>
      </div>
    </section>
  )
};

export default Projects;
