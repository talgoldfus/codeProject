import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import currentQuestionAction from '../actions/currentQuestionAction'
import CurrentQuestionComponent from '../components/CurrentQuestion'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getOptions: currentQuestionAction}, dispatch)
}

function mapStateToProps(state, ownProps) {
    return {
      currentQuestion: state.currentQuestion,
    } 
}

const currentQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentQuestionComponent)

export default currentQuestionContainer
