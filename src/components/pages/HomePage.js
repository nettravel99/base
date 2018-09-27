import React from "react";
import { Link } from "react-router-dom";
import { connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logOut} from '../../actions/auth'


// Note that isAuthenticated is passed in this function via props - we are decontructing it here. 
const HomePage = ({isAuthenticated, logOut}) => (     
  <div>
    <h1>Home Page</h1>
   { isAuthenticated ? <button onClick={()=>logOut()}>  logout</button> : <Link to="/login">Login</Link>}
  </div>
);




function mapStateToProps(state) {

  return {
    isAuthenticated : !! state.user.token    // note that !! returns a boolean
  }
}



HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,

};


export default connect(mapStateToProps, {logOut})(HomePage);
