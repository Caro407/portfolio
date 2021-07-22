import React from "react";

const ProjectInsights = (props) => (
  <section className="my-6 mx-auto">
    <h2 className="font-bold text-3xl m-1 uppercase">Insights</h2>
    <div className="divider m-auto w-64 h-1 mb-3"></div>
    <div className="section-div mx-auto">
      <ol>
        {props.details.map((detail, index) =>
          <li>
            <span className="font-bold mx-1">{`${index + 1}.`}</span>
            {detail.insight}
          </li>)}
        </ol>
    </div>
  </section>
);

export default ProjectInsights;
