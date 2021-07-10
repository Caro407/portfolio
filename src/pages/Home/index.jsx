import React from 'react';
import Presentation from './../sections/Presentation';
import Skills from './../sections/Skills';
import Projects from './../sections/Projects';
import Contact from './../sections/Contact';

const Home = () => {

  return (
    <main className="container">
      <h1 className="text-center text-5xl mt-5">Portfolio de moi</h1>
      <Presentation />
      <Skills/>
      <Projects />
      <Contact />
    </main>
  )
};

export default Home;
