import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="form--parent innerPadding">
        <div className="form--inner">
          <span className="text--large--bold">Welcome Back.</span>
        </div>
      </div>
    );
  }
}
