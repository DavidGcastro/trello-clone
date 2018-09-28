import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            name="email"
          />
        </label>
        <label>
          PassWord
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="text"
            name="password"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}