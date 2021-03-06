import React from 'react';
import { connect } from 'react-redux';

const Profile = props => {
  let { user, projects, subtasks } = props;
  let numOfTasks = subtasks && subtasks.length;
  let numOfProjects = projects && projects.length;
  let content =
    numOfTasks > 0
      ? `You have ${numOfTasks} tickets assigned to you.`
      : 'You do not have any tickets assigned to you.';

  let ProjectHeader = numOfProjects > 0 ? 'Your Projects' : '';
  return (
    <div className="innerPadding wrapper parentFlexer">
      <div>
        <span className="text--large--bold">Hi, {user.firstName}!</span>
        <span className="text--reg">{content}</span>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            paddingBottom: 15
          }}>
          <span className="title--large--light" style={{ paddingRight: 20 }}>
            {ProjectHeader}
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
