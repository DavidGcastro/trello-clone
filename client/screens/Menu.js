import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  let { open } = props;
  return (
    <div className={open ? 'navOpen--open' : 'navOpen--close'}>
      <div className="navOpen--content">
        <Link to="/about">About Us</Link>
        <Link to="/"> FAQ </Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up </Link>
      </div>
    </div>
  );
};

export default Menu;
