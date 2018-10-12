import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';

export default class Main extends React.Component {
  //why callback recommended
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Home />
        </div>
      </Router>
    );
  }
}
