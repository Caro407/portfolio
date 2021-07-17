import React from 'react';
import projects from './../../../data/projects'
import ProjectPreview from './../../../components/ProjectPreview'

const Projects = () => {
  return (
    <section className="mt-3">
      <h2 className="font-bold text-xl m-2">Projects</h2>
      <div className="divider m-auto w-64 h-2 mb-3"></div>
      <p>En tant que bébé dev, j'ai déjà pu travailler sur :</p>
      <div className="grid grid-cols-2 mt-3">
        {projects.map((project, index) => <ProjectPreview project={project} key={`project-${index}`}/>)}
      </div>
    </section>
  )
};

export default Projects;
