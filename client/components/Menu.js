import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  let { open, handleClick, userLoggedIn } = props;
  return (
    <div className={open ? 'menu--open' : 'menu--close'}>
      {userLoggedIn ? (
        <div
          onClick={e => (e.target.text ? handleClick() : '')}
          className="menu--content">
          <Link className="link" to="/about">
            About Us
          </Link>
          <Link className="link" to="/signup">
            Other Link
          </Link>
          <Link className="link" to="/signup">
            Other Link
          </Link>
          <Link className="link" to="/signup">
            Log Out m
          </Link>
        </div>
      ) : (
        <div
          onClick={e => (e.target.text ? handleClick() : '')}
          className="menu--content">
          <Link className="link" to="/about">
            About Us
          </Link>
          <Link className="link" to="/profile">
            Profile
          </Link>
          <Link className="link" to="/login">
            Log In
          </Link>
          <Link className="link" to="/signup">
            Sign Up
          </Link>
          <Link className="link" to="/signup">
            Other Link
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
