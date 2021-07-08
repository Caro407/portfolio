import React from 'react';

const Skills = () => {
  return (
    <section className="mt-3">
      <h2 className="font-bold text-xl m-2">Skills</h2>
      <div className="divider m-auto w-64 h-2 mb-3"></div>
      <p>J'aime bien le JS pour faire du React mais aussi le Ruby quand même.</p>
      <ul className="list-disc text-left">
        <li>React & Next.js</li>
        <li>Ruby on Rails</li>
        <li>JS (ES5/ES6)</li>
        <li>HTML 5 / CSS 3 / SCSS</li>
        <li>Bootstrap / Tailwind.css</li>
      </ul>
    </section>
  )
};

export default Skills;
