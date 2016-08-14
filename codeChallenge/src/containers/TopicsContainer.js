import { connect } from 'react-redux'
import bindActionCreators from 'redux'
import getTopicsAction from '../actions/getTopicsAction'
import TopicsList from '../components/TopicsList'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTopics: getTopicsAction },dispatch)
}

const mapStateToProps = (state) => {
    return {topics: state.topics}
}

const TopicsContainer = connect(mapStateToProps, mapDispatchToProps)(TopicsList)

export default TopicsContainer

