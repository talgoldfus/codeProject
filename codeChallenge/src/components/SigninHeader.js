import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import authenticate from '../actions/authAction'
import { bindActionCreators } from 'redux'

class SigninHeader extends Component {

  authButton(){        
    if(!this.props.authenticated){
      return(<p>
        <Link to="signin">
            Sign in
        </Link><br/>
        <br/><Link to="signup">
          Sign up
        </Link>
      </p>  )
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
