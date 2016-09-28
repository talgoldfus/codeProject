import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import logoutUser from '../actions/logoutAction'

class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser()//(formProps);
  }

  render() {
    alert("You will be logged off now.")

    return null
  }

}

const logMeOut = connect(null, {logoutUser: logoutUser})(Logout)

export default logMeOut
