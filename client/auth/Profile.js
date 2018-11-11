import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserAsync } from '../redux/reducers/user';

class Profile extends Component {
  componentDidMount() {
    this.props.setUser();
  }
  render() {
    let user = this.props.user ? this.props.user : {};
    return (
      <div className="padder">
        <span className="text--large">Hi, {user.firstName}</span>
        <span className="text--reg">
          Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
          neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          Quisque velit nisi, pretium ut lacinia in, elementum id enim.
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          Nulla porttitor accumsan tincidunt.
        </span>
      </div>
    );
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
