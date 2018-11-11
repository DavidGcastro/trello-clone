import axios from 'axios';
const SET_USER = 'SET_USER';

/**
 * ACTION CREATORS
 */
const setUser = user => ({ type: SET_USER, user });
/**
 *
 * THUNK CREATORS
 */
export const setUserAsync = () => dispatch =>
  axios
    .get('/auth/me')
    .then(me => dispatch(setUser(me.data)))
    .catch(err => console.log(err));

/* REDUCER
 */
export default function(initialState = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...initialState, user: action.user };
    default:
      return initialState;
  }
}
