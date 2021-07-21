import React from 'react';

const Skills = () => {
  return (
    <section className="mt-3">
      <h2 className="font-bold text-3xl m-1">SKILLS</h2>
      <div className="divider m-auto w-64 h-1 mb-3"></div>
      <div className="section-div">
        <div className="flex justify-around">
          <div className="w-1/2 sm:w-full">
            <h3 className="font-bold">LANGUAGES</h3>
            <label for="front-frameworks" className="block text-left">Ruby</label>
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
            <label for="front-frameworks" className="block text-left">SQL</label>
            <div className="progress">
              <span className="progress-bar" style={{width: 50+"%"}}></span>
            </div>
          </div>
          <div className="w-1/2 sm:w-full">
            <h3 className="font-bold">FRAMEWORKS</h3>
            <label for="front-frameworks" className="block text-left">React & Next.js</label>
            <div className="progress">
              <span className="progress-bar" style={{width: 85+"%"}}></span>
            </div>
            <label for="front-frameworks" className="block text-left">Ruby on Rails</label>
            <div className="progress">
              <span className="progress-bar" style={{width: 70+"%"}}></span>
            </div>
            <label for="front-frameworks" className="block text-left">Bootstrap</label>
            <div className="progress">
              <span className="progress-bar" style={{width: 80+"%"}}></span>
            </div>
            <label for="front-frameworks" className="block text-left">Tailwind.css</label>
            <div className="progress">
              <span className="progress-bar" style={{width: 80+"%"}}></span>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
};

export default Skills;
