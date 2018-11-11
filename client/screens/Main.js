import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import PageNotFound from './404';
import Profile from '../auth/Profile';

const Main = props => {
  let isLoggedIn = true;
  return (
    <Router>
      <div id="container">
        <Nav />
        <div className="main--content">
          <div className="spacer" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {isLoggedIn && (
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route exact path="/profile" component={Profile} />
              </Switch>
            )}
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
