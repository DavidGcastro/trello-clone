import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

const Main = () => {
  return (
    <Router>
      <div id="container">
        <Nav />
        <div className="main--content">
          <div className="spacer" />
          <Home />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
