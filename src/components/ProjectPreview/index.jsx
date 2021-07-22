import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreview = (props) => {
  return (
    <div className="border border-white rounded m-1 px-2 py-3">
      <div className="grid grid-cols-4 my-2">
        <Link to={`/projects/${props.project.slug}`} className="lg:col-span-3 col-span-4 font-bold uppercase">{props.project.title}</Link>
        <div className="flex align-center justify-around lg:col-span-1 col-span-4">
          <a href={props.project.website_link}>
            <i className="fas fa-link"></i>
          </a>
          {props.project.github ? <a href={props.project.github[0]}><div className="github-link"></div></a> : <p></p>}
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
