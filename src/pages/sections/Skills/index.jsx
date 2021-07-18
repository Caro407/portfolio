import React from 'react';

const Skills = () => {
  return (
    <section className="mt-3">
      <h2 className="font-bold text-xl m-2">Skills</h2>
      <div className="divider m-auto w-64 h-2 mb-3"></div>
      <p>J'aime bien le JS pour faire du React mais aussi le Ruby quand même.</p>
      <div className="block text-left">
        <label for="react">React & Next.js</label>
        <progress id="react" max="100" value="80"> 80% </progress>
      </div>
      <div className="block text-left">
        <label for="rails">Ruby on Rails</label>
        <progress id="rails" max="100" value="70"> 70% </progress>
      </div>
      <div className="block text-left">
        <label for="js">JS (ES5/ES6)</label>
        <progress id="js" max="100" value="80"> 80% </progress>
      </div>
      <div className="block text-left">
        <label for="front-languages">HTML 5 / CSS 3 / SCSS</label>
        <progress id="front-languages" max="100" value="60"> 60% </progress>
      </div>
      <div className="block text-left">
        <label for="front-frameworks">Bootstrap / Tailwind.css</label>
        <progress id="front-frameworks" max="100" value="80"> 80% </progress>
      </div>
    </section>
  )
};

export default Skills;
