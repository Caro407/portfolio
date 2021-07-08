import React from 'react';

const ProjectPreview = (props) => {
  return (
    <div className="border rounded">
      <h3>{props.project.title}</h3>
      <p>{props.project.pitch}</p>
    </div>
  )
};

export default ProjectPreview;
