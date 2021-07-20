import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './../../data/projects';
import ProjectDetails from './../../components/ProjectDetails';

const Project = (props) => {
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
      {(currentProject !== undefined) ? <ProjectDetails project={currentProject} /> : <p>Error</p>}
    </div>
  )
};

export default Project;
