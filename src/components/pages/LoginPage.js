import React from "react";
import LoginForm from "../Forms/LoginForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class LoginPage extends React.Component {
  // pass data to Thunk action  and it will return a promise
  // If everything is  ok redirect to home page otherwise
  // back to login with an error.

  submit = (
    data // NOTE login is called or ( dispatched to the login action see connect below)
  ) =>
    this.props.login(data).then(
      () => this.props.history.push("/") //if succesful go to home page
    );

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequred,
  login: PropTypes.func.isRequred
};

export default connect(
  null,
  { login }
)(LoginPage);
