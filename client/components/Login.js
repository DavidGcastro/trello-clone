import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    axios
      .post('/api/login', this.state)
      .then(function(response) {
        console.log(response.body);
      })
      .catch(function(error) {
        console.log(error);
      });
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
