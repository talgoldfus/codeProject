import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

function Auth(ComposedComponent){
  
  class Authorized extends Component {
    componentWillMount(){
      if(!this.props.authenticated){
        browserHistory.push('/')
      }
    }
    componentWillUpdate(newProps){
      if(!newProps.authenticated){
        browserHistory.push('/') 
      }
    }
    render(){
      return (
      <ComposedComponent  {...this.props}/> 
      ) 
    }
  }

  function mapStateToProps(state){
    
    return { authenticated: state.authentication.authenticated }
  }

  return connect(mapStateToProps)(Authorized)
  
}

export default Auth

// import React, { Component } from 'react'
// import { browserHistory } from 'react-redux'

// export default class Auth extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       user: '',
//       password: ''
//     }
//   }

//   componentWillMount() {
//     debugger
//     if (!this.props.authenticated) {
//       browserHistory.push('/')
//     }
//   }

//   componentDidMount() {
//     if (!this.props.authenticated) {
//       browserHistory.push('/')
//     }
//   }

//   handleEmailChange(event) {
//     this.setState({user: event.target.value})    
//   }

//   handlePasswordChange(event) {
//     this.setState({password: event.target.value})
//   }

//   login(e) {
//     e.preventDefault()
//     this.props.authAction(this.state.user, this.state.password)
//   }

//   render() {
//     return (
//     <div>
//       <form role="form">
//         <div className="form-group">
//           <input type="text" value={this.state.user} onChange={this.handleEmailChange.bind(this)} placeholder="Email" />
//           <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} placeholder="Password" />
//         </div>
//         <button type="submit" onClick={this.login.bind(this)}>Create Login</button>
//       </form>
//     </div>

//     )
//   }
// }