import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import authenticate from '../actions/authAction'
import { bindActionCreators } from 'redux'

class SigninHeader extends Component {

  authButton(){        
    if(!this.props.authenticated){
      return(
      <div>
        <h1 className="title"><a>FizzBuzz 2.0</a></h1>
        <Link to="signin" className="stylized-link">
            Sign in
        </Link><br/>
        <Link to="signup" className="stylized-link">
          Sign up
        </Link>
      </div>  )
    } 
  }
  render(){
    return(
      <div> 
        {this.authButton()}
        <p>
        <Link to="/" className="btn btn-primary">
        </Link>
        </p>
      </div>
    )  
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({authenticate: authenticate}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninHeader)
