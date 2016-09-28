import { connect } from 'react-redux'
import getTopicsAction from '../actions/getTopicsAction'
import TopicsList from '../components/TopicsList'
import getUserInfo from '../actions/getUserAction'
import getCurrUserInfo from '../actions/getCurrUserAction'




function mapStateToProps(state) {
    return {
      topics: state.topics,
      userInfo: state.user
    }
}

const SmartTopicsContainer = connect(mapStateToProps, {
  getTopics: getTopicsAction,
  getUserInfo: getUserInfo,
  getCurrUserInfo: getCurrUserInfo
})(TopicsList)

export default SmartTopicsContainer
