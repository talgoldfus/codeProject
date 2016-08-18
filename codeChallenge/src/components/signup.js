// simple form that calls an action to dispatch to user/create
// send back the user data to react
// call the signinUser and pass through the user info

// need an action, reducer, container

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import signupUser from '../actions/signupAction'
import signinUser from '../actions/authAction';

// import * as AuthActionCreators from '../actions/authAction'

class SignupUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  handleEmailChange(event) {
    this.setState({user: event.target.value})    
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  login(e) {
    e.preventDefault()
    this.props.signupUser(this.state.user, this.state.password)
    this.props.signinUser(this.state)

  }

  render() {
    return (
    <div>
      <form role="form">
        <div className="form-group">
          <input type="text" value={this.state.user} onChange={this.handleEmailChange.bind(this)} placeholder="Email" />
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} placeholder="Password" />
        </div>
        <button type="submit" onClick={this.login.bind(this)}>Create Login</button>
      </form>
    </div>

    )
  }
}


function mapDispatchToProps(dispatch) {
  // return bindActionCreators(AuthActionCreators, dispatch)
  return bindActionCreators({signupUser: signupUser, signinUser: signinUser}, dispatch)
}

const Signup = connect(null, mapDispatchToProps)(SignupUser)

export default Signup
