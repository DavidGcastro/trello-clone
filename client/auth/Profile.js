import React, { Component } from 'react';
import { connect } from 'react-redux';

const Profile = props => {
  let user = props.user ? props.user : {};
  return (
    <div className="padder">
      <span className="text--large">Hi, {user.firstName}</span>
      <span className="text--reg">Donec sollicitudin molestie malesuada.</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    projects: state.userReducer.projects,
    subtasks: state.userReducer.subtasks
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
