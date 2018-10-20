import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="form--parent">
        <div className="form--box wrapper">
          <div className="form--left">
            <span className="text--large--bold" style={{ letterSpacing: 5 }}>
              <div className="underline">Welcome</div> Back.
            </span>
          </div>
          <form className="form--container innerPadder">
            <div className="form--section">
              <label className="text--reg" style={{ letterSpacing: 2 }}>
                Email
              </label>
              <input type="text" />
            </div>
            <div className="form--section">
              <label className="text--reg" style={{ letterSpacing: 2 }}>
                Password
              </label>
              <input type="text" />
            </div>
            <div className="form--section">
              <input
                type="submit"
                className="button--action"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
