import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserAsync } from '../redux/reducers/user';

class Profile extends Component {
  componentDidMount() {
    this.props.setUser();
  }
  render() {
    return <span className="text--large">Hello World</span>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUser: () => dispatch(setUserAsync())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Profile);
