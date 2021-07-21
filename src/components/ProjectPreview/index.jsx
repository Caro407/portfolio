import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreview = (props) => {
  return (
    <div className="border border-white rounded m-1 px-2 py-3">
      <div className="grid grid-cols-4 my-2">
        <Link to={`/projects/${props.project.slug}`} className="col-span-3 font-bold uppercase">{props.project.title}</Link>
        <div className="flex align-center justify-around">
          <a href={props.project.website_link}>
            <i className="fas fa-link"></i>
          </a>
          <a href={props.project.github[0]}><div className="github-link"></div></a>
        </div>
      </div>
      <details>
        <summary>Technologies used</summary>
        {props.project.frameworks.map((framework, index) => <li key={`${framework.name}-${index}`} className="inline mx-2">{framework.name}</li>)}
      </details>
      <p className="text-sm italic py-2">{props.project.pitch}</p>
    </div>
  )
};

export default ProjectPreview;
