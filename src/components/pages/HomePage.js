import React from "react";
import { Link } from "react-router-dom";
import { connect} from 'react-redux'
import PropTypes from 'prop-types'
import {userLoggedOut} from '../../actions/auth'
import store from "../../redux/store";

// Note that isAuthenticated is passed in this function via props - we are decontructing it here. 
const HomePage = ({isAuthenticated, userLoggedOut}) => (     
  <div>
    <h1>Home Page</h1>
   { isAuthenticated ? <button onClick={logOut}> logout</button> : <Link to="/login">Login</Link>}
  </div>
);

function logOut()
{
  localStorage.removeItem('UserJWT')
  store.dispatch(userLoggedOut());
}
function mapStateToProps(state) {

  return {
    isAuthenticated : !! state.user.token    // note that !! returns a boolean
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};


export default connect(mapStateToProps, {userLoggedOut})(HomePage);
