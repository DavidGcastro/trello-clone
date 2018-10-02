import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';

const Main = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Nav} />
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
};

export default Main;
