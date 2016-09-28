import { connect } from 'react-redux'
import getUserInfo from '../actions/getUserAction'
import UserPage from '../components/UserPage'

function mapStateToProps(state) {
    return {userInfo: state.user}
}

const UserPageContainer = connect(mapStateToProps, {getUserInfo: getUserInfo})(UserPage)

export default UserPageContainer
