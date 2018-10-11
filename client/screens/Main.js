import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';

const Main = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Home />
      </div>
    </Router>
  );
};

export default Main;
