import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  let { open, handleClick } = props;
  return (
    <div className={open ? 'menu--open' : 'menu--close'}>
      <div
        onClick={e => (e.target.text ? handleClick() : '')}
        className="menu--content">
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/">
          FAQ
        </Link>
        <Link className="link" to="/login">
          Log In
        </Link>
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Menu;
