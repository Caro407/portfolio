import React from 'react';

const ProjectDetails = (props) => {
  return (
    <div className="">
      <h2 className="font-bold text-3xl my-3">{props.project.title}</h2>
      <p className="italic py-2 mb-3">{props.project.description}</p>
      <div className="mb-3">
        Technologies used :
        <div className="">
          {props.project.frameworks.map(framework => <li className="inline mx-2">{framework.name}</li>)}
        </div>
      </div>
      <img src={props.project.image} alt={`${props.project.slug}`} border="0" />
      <div className="grid grid-cols-2 my-3">
        {props.project.details.map(detail => <li className="">{detail.insight}</li>)}
      </div>
      <a href={props.project.website_link} className="my-3">{`Visit ${props.project.title}`}</a>
    </div>
  )
};

export default ProjectDetails;
