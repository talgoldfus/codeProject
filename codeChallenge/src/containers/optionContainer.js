import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import correctAnswer from '../actions/optionAction'
import Option from '../components/Option'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({evaluateAnswer: correctAnswer}, dispatch)
}

// function mapStateToProps(state, ownProps) {
    // return {
      // correct: state.options.correct
    // }
// }

const optionContainer = connect(null, mapDispatchToProps)(Option)

export default optionContainer

