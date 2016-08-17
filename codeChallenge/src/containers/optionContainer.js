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

function mapStateToProps(state) {
  debugger; 
    return {userId: state.board.players[0].userId}
}

const optionContainer = connect(mapStateToProps, mapDispatchToProps)(Option)

export default optionContainer

