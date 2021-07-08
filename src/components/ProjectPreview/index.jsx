import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreview = (props) => {
  return (
    <div className="border rounded m-1 px-2 py-3">
      <Link to={`/projects/${props.project.slug}`} className="font-bold">{props.project.title}</Link>
      <p className="text-sm italic py-2">{props.project.pitch}</p>
    </div>
  )
};

export default ProjectPreview;
