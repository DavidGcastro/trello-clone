import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUserAsync } from '../redux/reducers/user';

const Menu = props => {
  let { open, handleClick, userLoggedIn, logout } = props;
  return (
    <div className={open ? 'menu--open' : 'menu--close'}>
      {userLoggedIn ? (
        <div
          onClick={e => (e.target.text ? handleClick() : '')}
          className="menu--content">
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
        <div
          onClick={e => (e.target.text ? handleClick() : '')}
          className="menu--content">
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
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOutUserAsync())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Menu);
