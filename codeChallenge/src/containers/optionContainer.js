import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import correctAnswer from '../actions/optionAction'
import analyticsAction from '../actions/updateAnalytics'
import Option from '../components/Option'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    evaluateAnswer: correctAnswer,
    updateAnalytics: analyticsAction
  }, dispatch)
}

// function mapStateToProps(state) {
//     return {state}
// }

const optionContainer = connect(null, mapDispatchToProps)(Option)

export default optionContainer

