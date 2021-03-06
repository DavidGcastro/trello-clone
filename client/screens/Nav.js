import React from 'react';
import Menu from '../components/Menu';
import { HamburgerButton } from 'react-hamburger-button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUserAsync } from '../redux/reducers/user';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let { userLoggedIn, logout } = this.props;
    console.log(this.props);

    return (
      <div>
        <div className={this.state.open ? 'hideNav wrapper' : 'nav wrapper'}>
          <div className="nav--logo--parent wrapper">
            <Link to="/">
              <span
                className="logo--name"
                style={{ color: '#2E4F4C', fontWeight: 'bold' }}>
                NAME
              </span>
            </Link>
          </div>
          {userLoggedIn ? (
            <div className="nav--visible">
              <Link className="link" to="/about">
                About Us
              </Link>
              <Link className="link" to="/profile">
                Profile
              </Link>
              <a href="#" className="link" onClick={logout}>
                Log Out
              </a>
            </div>
          ) : (
            <div className="nav--visible">
              <Link className="link" to="/about">
                About Us
              </Link>
              <Link className="link" to="/login">
                Log In
              </Link>
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </div>
          )}

          <div className="hamburger--parent">
            <HamburgerButton
              className="hamburger"
              open={this.state.open}
              onClick={this.handleClick}
              width="4vh"
              height={20}
              strokeWidth={1}
              color={this.state.open ? 'white' : 'black'}
              animationDuration={0.5}
            />
          </div>
        </div>
        <Menu
          open={this.state.open}
          handleClick={this.handleClick}
          userLoggedIn={userLoggedIn}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOutUserAsync())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Nav);
