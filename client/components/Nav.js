import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="logo">logo</h1>

      <div className="nav--innerParent">
        <Link to="/">
          <p className="nav--item">Product</p>
        </Link>
        <Link to="/">
          <p className="nav--item">Price</p>
        </Link>
        <Link to="/">
          <p className="nav--item">Contact Sales</p>
        </Link>
        <Link to="/">
          <p className="nav--item">About</p>
        </Link>
        <Link to="/">
          <p className="nav--item">Log In</p>
        </Link>
        <Link className="nav--item--button" to="/">
          <p className="nav--item">Start Free Trial</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
