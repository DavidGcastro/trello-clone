import React, { Component } from 'react';
import axios from 'axios';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loginMessage: '',
      user: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    axios
      .post('/auth/login', this.state)
      .then(response => {
        this.setState({
          loginMessage: 'Success',
          user: `welcome ${response.data.firstName}`
        });
        console.log(response.headers, 'Front end');
      })
      .catch(error => {
        this.setState({ loginMessage: 'Failure' });
        console.log(error);
      });
    e.preventDefault();
  }

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
          Password
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="text"
            name="password"
          />
        </label>
        <input type="submit" value="Submit" />
        {this.state.loginMessage + ','}
        {' ' + this.state.user}
      </form>
    );
  }
}
