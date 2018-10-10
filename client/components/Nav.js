import React from 'react';
import { Link } from 'react-router-dom';
import { HamburgerButton } from 'react-hamburger-button';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      open: false
    };
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className="nav">
        <div className="nav--logo--parent">
          <img className="nav--logo" src="./assets/images/logo.png" />
          <h1 className="logo--name">BATON</h1>
        </div>
        <div className="hamburger--parent">
          <HamburgerButton
            open={this.state.open}
            onClick={this.handleClick.bind(this)}
            width={'4vh'}
            height={20}
            strokeWidth={1}
            color="black"
            animationDuration={0.5}
          />
        </div>
      </div>
    );
  }
}
