import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar'
import Presentation from './sections/Presentation'
import Projects from './sections/Projects'

const App = () => {

  return (
    <>
      <Router>
        <main>
          <h1 className="text-center text-5xl">Portfolio de moi</h1>
          <Navbar/>
          <Presentation />
          <Projects />
        </main>
        <Switch>
          <Route path="/home">
            <Presentation />
          </Route>
          <Route path="/about">
            <Presentation />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
