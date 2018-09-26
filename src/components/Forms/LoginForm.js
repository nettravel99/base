import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";

/**
 * ComponentName
 */
export class LoginForm extends Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  // event is passed to onChange
  // This is a universal onChange for text
  onChange = event =>
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    // This will be the errors set in the validate function.
    this.setState({ errors }); // ES6 if errors:errors you can use only errors once.
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      {
        console.log("loading:", this.state.loading);
        console.log("Data: ", this.state.data);

        this.props
          .submit(this.state.data)
          .catch(err =>
            this.setState({ errors: err.response.data.errors, loading: false })
          );
      }
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state; // This pulls data from this.state so it is easier to use for input. Deconstruct.
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong!</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
        </Form.Field>
        {errors.email && <InlineError text={errors.email} />}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Make it secure"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
