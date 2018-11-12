import React from 'react';
import { connect } from 'react-redux';

const Profile = props => {
  let { user, projects, subtasks } = props;
  return (
    <div className="innerPadding wrapper parentFlexer">
      <div>
        <span className="text--large--bold">Hi, {user.firstName}</span>
        <span className="text--reg">
          Donec sollicitudin molestie malesuada.
        </span>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            paddingBottom: 15
          }}>
          <span className="title--large--light" style={{ paddingRight: 20 }}>
            Your Projects
          </span>
          <span className="text--reg link">Add Projects +</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects &&
            projects.map((x, i) => (
              <div key={i} className="project--dropdown">
                <span className="text--reg">{x.name}</span>
              </div>
            ))}
        </div>
      </div>
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
