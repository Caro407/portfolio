import React from 'react';
import { Link } from 'react-router-dom';
import ProjectInsights from "./../ProjectInsights";

const ProjectDetails = (props) => {
  return (
    <div className="min-height">
      <div className="text-left">
        <Link to="/" className="border bg-gray-500 text-white rounded py-2 px-2 hover:bg-gray-600 focus:outline-none">Back</Link>
      </div>
      <h2 className="font-bold text-3xl my-3 uppercase">{props.project.title}</h2>
      <div className="divider m-auto w-64 h-1 mb-3"></div>
        <div className="mb-3">
          <span className="font-bold uppercase">
            Technologies used :
          </span>
          <div>
            {props.project.frameworks.map((framework, index) => <li className="inline mx-2" key={`${props.project.slug}-framework${index}`}>{framework.name}</li>)}
          </div>
        </div>
      <p className="py-2 mt-4 mb-6 section-div mx-auto">{props.project.description}</p>

      {props.project.image ? <img src={props.project.image} alt={`${props.project.slug}`} border="0" className="filter drop-shadow-md" /> : <p>Website currently in development. Updates will be made soon.</p>}

      {props.project.details ? <ProjectInsights details={props.project.details} /> : <p className="font-bold my-3">Come back later soon for more information !</p>}

      <section className="my-6 mx-auto">
        <h2 className="font-bold text-3xl m-1 uppercase">Useful Links</h2>
        <div className="divider m-auto w-64 h-1 mb-3"></div>
        <div className="section-div mx-auto">
          {props.project.website_link ? <a href={props.project.website_link} target="blank" className="my-3 underline">{`Visit ${props.project.title}'s website here`}</a> : <p>This website doesn't have a link yet.</p>}
          {props.project.github ? <div>
            <p>or view code on GitHub here : </p>
            {props.project.github.map((github, index) => <a key={`${props.project.slug}-github${index}`} href={github.link} target="blank" className="hover:underline mx-2">{github.role}</a>)}
          </div> : <p></p>}
        </div>
      </section>
      <Link to="/" className="border bg-gray-500 text-white rounded py-2 px-2 mx-1 hover:bg-gray-600 focus:outline-none">Back</Link>
      {props.project.website_link ? <a href={props.project.website_link} className="border bg-red-600 text-white rounded py-2 px-2 mx-1 hover:bg-red-700 focus:outline-none">Visit now !</a> : <p></p>}
    </div>
  )
};

export default ProjectDetails;
