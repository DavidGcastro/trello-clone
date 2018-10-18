import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import PageNotFound from './404';

const Main = () => {
  return (
    <Router>
      <div id="container">
        <Nav />
        <div className="main--content">
          <div className="spacer" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
