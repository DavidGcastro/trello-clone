import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav--logo--parent">
        <img className="nav--logo" src="./assets/images/logo.png" />
        <h1 className="logo--name">BATON</h1>
      </div>
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
