import React from 'react';

const ProjectDetails = (props) => {
  return (
    <div>
      <h2 className="font-bold text-3xl my-3">{props.project.title}</h2>
      <p className="text-sm italic py-2">{props.project.description}</p>
      <img src={props.project.image} alt={`${props.project.slug}`} border="0" />
      {props.project.details.map(detail => <li>{detail.insight}</li>)}
    </div>
  )
};

export default ProjectDetails;
