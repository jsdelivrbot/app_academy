import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signUp = user => dispatch => {
  ApiUtil.signUp(user)
    .then(user => {
      dispatch(receiveCurrentUser(user);
    }), errors => {
      console.log(errors);
    })
}

// export const signup = user => dispatch => (
//   APIUtil.signup(user)
//     .then(user => dispatch(receiveCurrentUser(user)),
//       err => dispatch(receiveErrors(err.responseJSON)))
// );
//

export const signIn = user => dispatch => {
  ApiUtil.signIn(user)
    .then(user => {
      dispatch(receiveCurrentUser(user);
    }), errors => {
      console.log(errors);
    })
}

// export const login = user => dispatch => (
//   APIUtil.login(user)
//     .then(user => dispatch(receiveCurrentUser(user)),
//       err => dispatch(receiveErrors(err.responseJSON)))
// );
//


export const signOut = () => dispatch => {
  ApiUtil.signOut()
    .then(() => {
      dispatch(receiveCurrentUser(null);
    }), errors => {
      console.log(errors);
    })
}
// export const logout = () => dispatch => (
//   APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
// );
//

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
    errors: []
  }
}
// export const receiveCurrentUser = currentUser => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser
// });
//

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    currentUser: null,
    errors: errors
  }
}
// export const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors
// });
