import api from "../api";

// defining our thunk function that is a function that returns another function.
// All api requests are stored in one object - it gets too large then should be
// split.  api.user.login will return a promise. we get back the res - results
// from the promise and expect the res.data.user
export const login = credentials => dispatch => api
  .user
  .login(credentials)
  .then(user => {
    console.log("Add to local storage", user.token)
    localStorage.UserJWT = user.token;
    dispatch(userLoggedIn(user))
  });

export const logOut = () => dispatch => {
  localStorage.removeItem('UserJWT')
  dispatch(userLoggedOut())

};

// User Logged In action
export const userLoggedIn = user => ({type: "USER_LOGGED_IN", user});

// User Logged Out action
export const userLoggedOut = () => ({type: "USER_LOGGED_OUT", user: {}});