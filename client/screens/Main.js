import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer'

const Main = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
