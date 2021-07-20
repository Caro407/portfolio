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
      <img src="https://portfolio-cl.s3.eu-west-3.amazonaws.com/gab-1.png" alt="gab-1" border="0" />
    </div>
  )
};

export default Project;
