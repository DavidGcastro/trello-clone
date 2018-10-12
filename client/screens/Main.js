import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';

const Main = () => {
  return (
    <Router>
      <div>
        <Nav />
      </div>
    </Router>
  );
};

export default Main;
