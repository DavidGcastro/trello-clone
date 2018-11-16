import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import PageNotFound from './404';
import About from './About';
import Profile from '../auth/Profile';
import { setUserAsync, logOutUserAsync } from '../redux/reducers/user';

class Main extends Component {
  componentDidMount() {
    this.props.setUser();
  }
  render() {
    let userLoggedIn = this.props.user ? true : false;
    console.log(userLoggedIn);
    return (
      <Router>
        <div id="container">
          <Nav userLoggedIn={userLoggedIn} />
          <div className="main--content">
            <div className="spacer" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/About" component={About} />
              {userLoggedIn && (
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/profile" component={Profile} />
                  <Route component={PageNotFound} />
                </Switch>
              )}
              <Route component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: () => dispatch(setUserAsync()),
    logout: () => dispatch(logOutUserAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
