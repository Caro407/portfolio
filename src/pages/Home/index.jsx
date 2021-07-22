import React from 'react';
import Presentation from './../sections/Presentation';
import Skills from './../sections/Skills';
import Projects from './../sections/Projects';
import Contact from './../sections/Contact';

const Home = () => {

  return (
    <main className="container">
      <h1 className="text-center text-5xl my-5 uppercase">Caroline Lefevre</h1>
      <p className="italic">Fullstack developper (React / Ruby on Rails)</p>
      <Presentation />
      <Skills/>
      <Projects />
      <Contact />
    </main>
  )
};

export default Home;
