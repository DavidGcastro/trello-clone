import React, { Component } from 'react';
import axios from 'axios';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      me: null
    };
  }

  componentDidMount() {
    axios
      .get('/auth/me')
      .then(me => this.setState({ me: me.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.me);
    return <h1>This is the profile page</h1>;
  }
}
