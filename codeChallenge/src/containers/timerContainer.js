import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import correctAnswer from '../actions/optionAction'
import analyticsAction from '../actions/updateAnalytics'
import Timer from '../components/Timer'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    evaluateAnswer: correctAnswer,
    updateAnalytics: analyticsAction
  }, dispatch)
}

function mapStateToProps(state) { 
    return {userId: state.board.players[0].userId}
}

const timerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer)

export default timerContainer


