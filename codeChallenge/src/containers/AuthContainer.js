import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import authAction from '../actions/authAction'
import Auth from '../components/Auth'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({authAction: authAction}, dispatch)
}

function mapStateToProps(state) {
  return {
    login: state.auth
  }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)

export default AuthContainer

