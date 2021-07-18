import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreview = (props) => {
  return (
    <div className="border rounded m-1 px-2 py-3">
      <Link to={`/projects/${props.project.slug}`} className="font-bold">{props.project.title}</Link>
      <a href={props.project.github[0]}><div className="github-link"></div></a>
      <details>
        <summary>Technologies used</summary>
        {props.project.frameworks.map(framework => <li>{framework.name}</li>)}
      </details>
      <p className="text-sm italic py-2">{props.project.pitch}</p>
    </div>
  )
};

export default ProjectPreview;
