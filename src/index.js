import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => {

  return (
    <h1>Hello</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
