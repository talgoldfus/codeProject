import React, { Component } from 'react'

export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  // handleChange(key) {
  //   (e) => {
  //     debugger
  //   this.state[key] = e.target.value
  //   this.setState(state)
  //   debugger
  //   }    
  // }  

  handleEmailChange(event) {
    this.setState({user: event.target.value})    
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  login(e) {
    e.preventDefault()
    // debugger
    //need to call the action here with the arguments
    this.props.authAction(this.state.user, this.state.password)
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