import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getUserInfo from '../actions/getUserAction'
import UserPage from '../components/UserPage'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getUserInfo: getUserInfo}, dispatch)
}

function mapStateToProps(state) {
    return {
      userInfo: state.user
    }
}

const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage)

export default UserPageContainer
