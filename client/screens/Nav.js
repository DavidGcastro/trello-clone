import React from 'react';
import Menu from '../components/Menu';
import { HamburgerButton } from 'react-hamburger-button';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <div className={this.state.open ? 'hideNav wrapper' : 'nav wrapper'}>
          <div className="nav--logo--parent">
            <img className="nav--logo" src="./assets/images/cogs.png" />
            <h1 className="logo--name">NAME</h1>
          </div>
          <div className="hamburger--parent">
            <HamburgerButton
              className="hamburger"
              open={this.state.open}
              onClick={this.handleClick.bind(this)}
              width="4vh"
              height={20}
              strokeWidth={1}
              color={this.state.open ? 'white' : 'black'}
              animationDuration={0.5}
            />
          </div>
        </div>
        <Menu open={this.state.open} />
      </div>
    );
  }
}