import React from 'react';

const Presentation = () => {
  return (
    <section className="mt-3">
      <h2 className="font-bold text-3xl m-1">ABOUT ME</h2>
      <div className="divider m-auto w-64 h-1 mb-3"></div>
      <div className="profile-pic rounded-full mx-auto my-2"></div>
      <div className="section-div flex content-center">
        <p className="">I am Caroline Lefevre, a 25 years old developper based in Paris, recently reconverted from management with the 6 months The Hacking Project's Developper Program.
          I enjoy doing front applications using React and Next.js frameworks, but also working on backend with Ruby on Rails.
          I like to code beatifully simple and useful things, to make everyone's day better !
        </p>
      </div>
    </section>
  )
};

export default Presentation;
