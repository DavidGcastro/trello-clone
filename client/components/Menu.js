import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  let { open } = props;
  return (
    <div className={open ? 'menu--open' : 'menu--close'}>
      <div className="menu--content">
        <Link to="/about">About Us</Link>
        <Link to="/"> FAQ </Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up </Link>
      </div>
    </div>
  );
};

export default Menu;
