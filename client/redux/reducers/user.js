import axios from 'axios';
const SET_USER = 'SET_USER';
const CREATE_USER = 'CREATE_USER';
const LOG_OUT = 'LOG_OUT';
const GET_PROJECTS = 'GET_PROJECTS';
const GET_SUBTASKS = 'GET_SUBTASKS';

/* ACTION CREATORS */
const setUser = user => ({ type: SET_USER, user });
const createUser = newUser => ({ type: CREATE_USER, newUser });
const getUserProjects = projects => ({ type: GET_PROJECTS, projects });
const getUserSubtasks = subtasks => ({ type: GET_SUBTASKS, subtasks });
const logoutUser = () => ({ type: LOG_OUT });

/**************************************************************************/
/*THUNK CREATORS*/
export const setUserAsync = () => dispatch =>
  axios
    .get('/auth/me')
    .then(me => dispatch(setUser(me.data)))
    .then(res => {
      let id = res.user.id;
      axios
        .get(`api/users/${id}`)
        .then(y => {
          let subtask = y.data[0].subtasks;
          dispatch(getUserSubtasks(subtask));
          return y;
        })
        .then(x => dispatch(getUserProjects(x.data[0].projects)));

      return res;
    })
    .catch(err => console.log(err, 'Error handler in redux setUserAsync'));

/**************************************************************************/

export const createUserAsync = data => dispatch => {
  axios
    .post('/auth/signup', data)
    .then(newUser => {
      dispatch(createUser(newUser.data.user.id));
      return newUser;
    })
    .then(x => (window.location.href = x.data.redirectUrl))
    .catch(err => console.error(err));
};

/**************************************************************************/

export const logOutUserAsync = () => dispatch =>
  axios
    .get('/auth/logout')
    .then(() => dispatch(logoutUser()))
    .then(() => (window.location.href = '/'))
    .catch(err => console.log(err));

/**************************************************************************/

/* REDUCER */
export default function(initialState = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...initialState, user: action.user };
    case LOG_OUT:
      return { ...initialState, user: false };
    case CREATE_USER:
      return { ...initialState, user: action.newUser };
    case GET_PROJECTS:
      return { ...initialState, projects: action.projects };
    case GET_SUBTASKS: {
      return { ...initialState, subtasks: action.subtasks };
    }
    default:
      return initialState;
  }
}
