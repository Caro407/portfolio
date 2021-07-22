import React from 'react';

const ProjectDetails = (props) => {
  return (
    <div className="min-height">
      <h2 className="font-bold text-3xl my-3 uppercase">{props.project.title}</h2>
      <div className="divider m-auto w-64 h-1 mb-3"></div>
      <p className="py-2 mb-3 section-div mx-auto">{props.project.description}</p>
      <div className="mb-3">
        <span className="font-bold">
          Technologies used :
        </span>
        <div>
          {props.project.frameworks.map((framework, index) => <li className="inline mx-2" key={`${props.project.slug}-framework${index}`}>{framework.name}</li>)}
        </div>
      </div>
      {props.project.image ? <img src={props.project.image} alt={`${props.project.slug}`} border="0" /> : <p>Website currently in development. Updates will be made soon.</p>}

      <ol className="my-3">
        {props.project.details.map((detail, index) =>
          <li>
            <span className="font-bold mx-1">{`${index + 1}.`}</span>
            {detail.insight}
          </li>)}
      </ol>
      <div className="section-div mx-auto">
        <p className="font-bold uppercase my-1">Useful links</p>
        {props.project.website_link ? <a href={props.project.website_link} className="my-3 hover:underline">{`Visit ${props.project.title}'s website here`}</a> : <p>This website doesn't have a link yet.</p>}
        {props.project.github ? <div>
          <p>or view code on GitHub here : </p>
          {props.project.github.map((github, index) => <a key={`${props.project.slug}-github${index}`} href={github.link} className="hover:underline mx-2">{github.role}</a>)}
        </div> : <p></p>}
      </div>
    </div>
  )
};

export default ProjectDetails;
