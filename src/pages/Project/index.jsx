import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './../../data/projects';

const Project = () => {
  const { project } = useParams();
  const [currentProject, setCurrentProject] = React.useState(undefined);

  React.useEffect(
    () => {
      const foundProject = projects.find((proj) => proj.slug === project);
      setCurrentProject(foundProject);
    }, [project]
  );

  return (
    <div className="container">
      {(currentProject !== undefined) ? <h2 className="font-bold text-3xl my-3">{currentProject.title}</h2> : <p>Error</p>}
      <p className="italic">{currentProject.pitch}</p>
    </div>
  )
};

export default Project;
