import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      loggedIn: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    axios
      .post('/auth/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function(response) {
        if (response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl;
        } //fix this
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMessage: 'User not found!' });
      });
  };

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
              <input
                onChange={event => this.setState({ email: event.target.value })}
                type="text"
              />
            </div>
            <div className="input--section">
              <label className="text--reg input--label">Password</label>
              <input
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
                type="password"
              />
            </div>
            <span className="text--danger">{this.state.errorMessage}</span>
            <input
              onClick={this.handleClick}
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
