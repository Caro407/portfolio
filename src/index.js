import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Presentation from './pages/sections/Presentation';
import Skills from './pages/sections/Skills';
import Projects from './pages/sections/Projects';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <Presentation />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects/:project">
            <Project />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
