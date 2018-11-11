import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserAsync } from '../redux/reducers/user';

class Profile extends Component {
  componentDidMount() {
    this.props.setUser();
  }
  render() {
    let { user } = this.props;
    console.log(user);
    return <span className="text--large">Hello World</span>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: () => dispatch(setUserAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
