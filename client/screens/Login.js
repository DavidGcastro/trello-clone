import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="form--parent">
        <div className="form--firstChild">
          <span
            className="text--large--bold"
            style={{ letterSpacing: 4, marginBottom: 25 }}>
            <div className="underline">Welcome</div> Back.
          </span>
          <span className="text--reg" style={{ fontSize: 20 }}>
            Enter the email address associated with your account, and we’ll send
            a magic link to your inbox.
          </span>
          <form className="form--wrapper">
            <div className="input--section">
              <label className="text--reg input--label">Your Email</label>
              <input type="text" />
            </div>
            <div className="input--section">
              <label className="text--reg input--label">Password</label>
              <input type="text" />
            </div>
            <input
              type="submit"
              className="button--action"
              style={{ marginTop: 25, padding: 3 }}
            />
          </form>
          <img src="/assets/images/conversation.png" width={150} />
        </div>
      </div>
    );
  }
}
