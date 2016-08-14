import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getTopicsAction from '../actions/getTopicsAction'
import TopicsList from '../components/TopicsList'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getTopics: getTopicsAction}, dispatch)
}

function mapStateToProps(state) {
    return {
      topics: state.topics
    }
}

const SmartTopicsContainer = connect(mapStateToProps, mapDispatchToProps)(TopicsList)

export default SmartTopicsContainer

