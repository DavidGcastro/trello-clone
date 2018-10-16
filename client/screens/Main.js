import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

const Main = () => {
  return (
    <Router>
      <div className="main--content">
        <Nav />
        <div className="spacer" />
        <Home />
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
