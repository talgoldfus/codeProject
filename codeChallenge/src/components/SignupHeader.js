import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import authenticate from '../actions/authAction'
import { bindActionCreators } from 'redux'

class SignupHeader extends Component {

  authButton(){        
    if(!this.props.authenticated){
      return(<p>
        <Link to="/signup">
            Sign Up
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupHeader)
