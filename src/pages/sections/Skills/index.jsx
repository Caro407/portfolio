import React from 'react';

const Skills = () => {
  return (
    <section className="mt-3">
      <h2 className="font-bold text-3xl m-1">Skills</h2>
      <div className="divider m-auto w-64 h-1 mb-3"></div>
      <div className="section-div">
        <p>J'aime bien le JS pour faire du React mais aussi le Ruby quand même.</p>

        <label for="front-frameworks" className="block text-left">React & Next.js</label>
        <div className="progress">
          <span className="progress-bar" style={{width: 85+"%"}}></span>
        </div>
        <label for="front-frameworks" className="block text-left">Ruby on Rails</label>
        <div className="progress">
          <span className="progress-bar" style={{width: 70+"%"}}></span>
        </div>
        <label for="front-frameworks" className="block text-left">JS (ES5/ES6)</label>
        <div className="progress">
          <span className="progress-bar" style={{width: 80+"%"}}></span>
        </div>
        <label for="front-frameworks" className="block text-left">HTML 5 / CSS 3 / SCSS</label>
        <div className="progress">
          <span className="progress-bar" style={{width: 75+"%"}}></span>
        </div>
        <label for="front-frameworks" className="block text-left">Bootstrap / Tailwind.css</label>
        <div className="progress">
          <span className="progress-bar" style={{width: 80+"%"}}></span>
        </div>
      </div>

    </section>
  )
};

export default Skills;
