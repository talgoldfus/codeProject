import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getTopicsAction from '../actions/getTopicsAction'
import TopicsList from '../components/TopicsList'
import getUserInfo from '../actions/getUserAction'
import getCurrUserInfo from '../actions/getCurrUserAction'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopics: getTopicsAction, 
    getUserInfo: getUserInfo,
    getCurrUserInfo: getCurrUserInfo
  }, dispatch)
}

function mapStateToProps(state) {
    return {
      topics: state.topics, 
      userInfo: state.user
    }
}

const SmartTopicsContainer = connect(mapStateToProps, mapDispatchToProps)(TopicsList)

export default SmartTopicsContainer
