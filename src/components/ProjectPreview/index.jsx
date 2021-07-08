import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreview = (props) => {
  return (
    <div className="border rounded mx-1 px-1">
      <Link to={`/projects/${props.project.slug}`} className="font-bold">{props.project.title}</Link>
      <p>{props.project.pitch}</p>
    </div>
  )
};

export default ProjectPreview;
