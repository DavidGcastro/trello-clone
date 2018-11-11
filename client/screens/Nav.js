import React from 'react';
import Menu from '../components/Menu';
import { HamburgerButton } from 'react-hamburger-button';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
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
          <div className="nav--visible">
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
        <Menu open={this.state.open} handleClick={this.handleClick} />
      </div>
    );
  }
}
