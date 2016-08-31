import { connect } from 'react-redux'
import currentQuestionAction from '../actions/currentQuestionAction'
import CurrentQuestionComponent from '../components/CurrentQuestion'

function mapStateToProps(state, ownProps) {
    return {info: state.currentQuestion}
}

const currentQuestionContainer = connect(mapStateToProps, {getOptions: currentQuestionAction})(CurrentQuestionComponent)

export default currentQuestionContainer
