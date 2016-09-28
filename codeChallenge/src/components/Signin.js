import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import signinUser from '../actions/authAction';
import { bindActionCreators } from 'redux'


class Signin extends Component {
  handleFormSubmit(formProps) {
    this.props.signinUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form className="form group" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <h1>Sign In</h1>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" {...password} type="password" />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signinUser: signinUser}, dispatch)
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, mapDispatchToProps)(Signin);
