import React from 'react';
import projects from './../../data/projects'
import ProjectPreview from './../../components/ProjectPreview'

const Projects = () => {
  return (
    <section>
      <h2 className="font-bold text-xl m-2">Projects</h2>
      <p>En tant que bébé dev, j'ai déjà pu travailler sur :</p>
      <div className="grid grid-cols-2">
        {projects.map(project => <ProjectPreview project={project}/>)}
      </div>
    </section>
  )
};

export default Projects;
