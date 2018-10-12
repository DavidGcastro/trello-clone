import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';

const Main = () => {
  return (
    <Router>
      <div>
        <Nav />
        <div className="content" />
        <Home />
      </div>
    </Router>
  );
};

export default Main;
