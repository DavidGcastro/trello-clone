import axios from 'axios';
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

/**
 * ACTION CREATORS
 */
const setUser = user => ({ type: SET_USER, user });

const logoutUser = () => ({ type: LOG_OUT });
/**
 *
 * THUNK CREATORS
 */
export const setUserAsync = () => dispatch =>
  axios
    .get('/auth/me')
    .then(me => dispatch(setUser(me.data)))
    .catch(err => console.log(err));

export const logOutUserAsync = () => dispatch =>
  axios
    .get('/auth/logout')
    .then(() => dispatch(logoutUser()))
    .catch(err => console.log(err));

/* REDUCER
 */
export default function(initialState = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...initialState, user: action.user };
    case LOG_OUT:
      return { ...initialState, user: false };
    default:
      return initialState;
  }
}
